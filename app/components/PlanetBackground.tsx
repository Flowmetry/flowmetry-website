'use client';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

/* ── Texture URL ─────────────────────────────────────────────────────────── */

const PLANET_TEX =
  'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg';

/* ── Procedural bump map (noise) ─────────────────────────────────────────── */

function hash2(xi: number, yi: number): number {
  let a = (Math.imul(xi, 1664525) + Math.imul(yi, 1013904223)) | 0;
  a ^= a >> 13;
  a  = Math.imul(a, 0x45d9f3b);
  a ^= a >> 15;
  return (a >>> 0) / 4294967296;
}

function valueNoise(x: number, y: number): number {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix,        fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix,   iy  ), b = hash2(ix+1, iy  );
  const c = hash2(ix,   iy+1), d = hash2(ix+1, iy+1);
  return a + (b-a)*ux + (c-a)*uy + (a-b-c+d)*ux*uy;
}

function fbm(x: number, y: number, octaves: number): number {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < octaves; i++) { v += a * valueNoise(x*f, y*f); a *= 0.5; f *= 2; }
  return v;
}

function buildBumpMap(size: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  const px  = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm((x / size) * 8 + 33, (y / size) * 8 + 71, 7);
      const v = Math.round(Math.max(0, Math.min(1, n)) * 255);
      const i = (y * size + x) * 4;
      px[i] = px[i+1] = px[i+2] = v; px[i+3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return new THREE.CanvasTexture(canvas);
}

/* ── Camera auto-fit for mobile ─────────────────────────────────────────── */

function CameraFit() {
  const { camera, size } = useThree();
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    if (size.width < 768) {
      const aspect = size.width / size.height;
      cam.position.z = (1.5 / (Math.tan(25 * Math.PI / 180) * aspect)) * 1.1;
    } else {
      cam.position.z = 5;
    }
    cam.updateProjectionMatrix();
  }, [camera, size]);
  return null;
}

/* ── Planet — texture loaded via useLoader (suspends until ready) ─────────── */

function Planet() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Suspends while fetching — Stars + lights stay visible during load
  const colorMap = useLoader(THREE.TextureLoader, PLANET_TEX);

  const [bumpTex, setBumpTex] = useState<THREE.CanvasTexture | null>(null);
  useEffect(() => {
    const bump = buildBumpMap(512);
    setBumpTex(bump);
    return () => bump.dispose();
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.5, 96, 96]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpTex ?? undefined}
        bumpScale={0.05}
        roughness={0.9}
        metalness={0.0}
      />
    </mesh>
  );
}

/* ── Export ──────────────────────────────────────────────────────────────── */

export function PlanetBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.8;
        }}
      >
        {/* Stars — render immediately, no Suspense needed */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Lights — always on */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <pointLight
          position={[-5, -2, -5]}
          intensity={8.0}
          color="#3b82f6"
          distance={20}
          decay={2}
        />

        {/* Camera rig */}
        <CameraFit />

        {/* Planet — suspends while texture fetches; stars + lights stay visible */}
        <Suspense fallback={null}>
          <Planet />
        </Suspense>
      </Canvas>

      {/* Film-grain overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.025, mixBlendMode: 'overlay', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <filter id="planet-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#planet-noise)" />
      </svg>
    </div>
  );
}
