export function SectionBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      style={{
        maskImage: 'radial-gradient(ellipse 75% 90% at 50% 55%, black 30%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at 50% 55%, black 30%, transparent 75%)',
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(139,74,30,0.12),transparent)]" />
    </div>
  );
}
