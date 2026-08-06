export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-glow" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[720px] rounded-full bg-accent/20 glow-blob" />
      <div className="absolute top-1/3 -right-20 h-[340px] w-[340px] rounded-full bg-accent-2/15 glow-blob" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-accent/10 glow-blob" />
    </div>
  );
}
