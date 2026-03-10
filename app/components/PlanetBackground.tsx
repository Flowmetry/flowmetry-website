'use client';

import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
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

/* ── Planet ──────────────────────────────────────────────────────────────── */
/*
 * Scale is fixed at 1.0 — camera distance (cameraZ) controls apparent size.
 * On mobile (< 768 px wide) the camera is pulled back to z = 8, making the
 * sphere appear at ~87 % of the viewport width without side-clipping.
 *
 * Math (sphere_diameter = 2 × r × scale = 3.0 world units, scale = 1.0):
 *   viewport.width  = 2 × z × tan(FOV/2) × aspect
 *
 *   Desktop  z = 5, aspect ≈ 1.6 → viewport.width ≈ 7.5  → sphere = 40 % of width  ✓
 *   Mobile   z = 8, aspect ≈ 0.46 → viewport.width ≈ 3.45 → sphere = 87 % of width  ✓
 *
 * yOffset = 8 % of viewport.height keeps the sphere in the hero band and
 * guarantees sphere top (offset + 1.5) < viewport top edge (height / 2).
 */

function Planet() {
  const { viewport } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);

  // Both values are captured once — never recalculated on resize/scroll.

  // Scale fixed at 1.0; camera Z (set in PlanetBackground) controls apparent size.
  const scale = 1.0;

  // Y offset: push planet upward into the hero area without clipping at the top.
  // 8 % of viewport height → sphere top stays ~20 % below the viewport edge.
  const yOffset = useRef(viewport.height * 0.08).current;

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
    <mesh ref={meshRef} scale={scale} position={[0, yOffset, 0]}>
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

  // Computed once after mount — stable, never recalculates on scroll or resize.
  // Mobile (< 768 px): camera pulled back so the full sphere fits the narrow viewport.
  const cameraZ = window.innerWidth < 768 ? 8 : 5;

  return (
    /* position:fixed + inset:0 — canvas never scrolls or reflows */
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          // Prevents blank frames when the compositor resamples the canvas
          // during momentum scroll on iOS/Android.
          preserveDrawingBuffer: true,
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 0.8;
        }}
      >
        {/* z = 5 desktop, z = 8 mobile — distance controls apparent sphere size */}
        <PerspectiveCamera makeDefault position={[0, 0, cameraZ]} fov={50} />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* Lights */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -2, -5]} intensity={8.0} color="#3b82f6" distance={20} decay={2} />

        {/* Planet — Suspense keeps stars + lights visible during texture fetch */}
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
