export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background grid texture overlay */}
      <div className="absolute inset-0 grid-glow" />

      {/* 1. Large Accent Orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[720px] rounded-full bg-accent/20 glow-blob animate-orb-1" />

      {/* 2. Medium Accent-2 Orb */}
      <div className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-accent-2/20 glow-blob animate-orb-2" />

      {/* 3. Small Accent Orb */}
      <div className="absolute bottom-10 left-10 h-[360px] w-[360px] rounded-full bg-accent/15 glow-blob animate-orb-3" />
    </div>
  );
}
