export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background grid texture overlay */}
      <div className="absolute inset-0 grid-glow" />

      {/* 1. Large Orb (Purple/Violet Glow) */}
      <div className="absolute top-[8%] left-[10%] h-[620px] w-[620px] rounded-full bg-gradient-to-tr from-[#6d5bff]/50 via-[#8b5cf6]/40 to-[#a855f7]/45 glow-blob animate-orb-1" />

      {/* 2. Medium Orb (Cyan/Teal Accent Glow) */}
      <div className="absolute top-[40%] -right-[5%] h-[460px] w-[460px] rounded-full bg-gradient-to-br from-[#0a9bb0]/50 via-[#06b6d4]/40 to-[#3b82f6]/45 glow-blob animate-orb-2" />

      {/* 3. Small Orb (Electric Indigo/Cyan Accent Glow) */}
      <div className="absolute bottom-[8%] left-[25%] h-[340px] w-[340px] rounded-full bg-gradient-to-r from-[#4f46e5]/55 via-[#6d5bff]/50 to-[#0a9bb0]/45 glow-blob animate-orb-3" />
    </div>
  );
}
