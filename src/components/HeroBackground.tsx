export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,168,28,0.18),transparent)]" />
      <div className="absolute left-1/2 top-[-16%] h-[420px] w-[720px] -translate-x-1/2 animate-float rounded-full bg-gold-300/25 blur-[130px] sm:h-[600px] sm:w-[900px]" />
      <div className="absolute -right-24 top-[42%] h-[320px] w-[320px] animate-float rounded-full bg-gold-400/15 blur-[110px] [animation-delay:1.5s] sm:h-[420px] sm:w-[420px]" />
      <div className="absolute -left-24 top-[55%] h-[280px] w-[280px] animate-float rounded-full bg-gold-500/10 blur-[100px] [animation-delay:3s]" />
      <div className="grid-fade absolute inset-0" />

      <div className="absolute left-[12%] top-[22%] hidden h-2 w-2 animate-pulse-glow rounded-full bg-gold-500 sm:block" />
      <div className="absolute right-[16%] top-[32%] hidden h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold-400 [animation-delay:0.6s] sm:block" />
      <div className="absolute left-[22%] top-[65%] hidden h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold-500 [animation-delay:1.2s] sm:block" />
      <div className="absolute right-[10%] top-[60%] hidden h-2 w-2 animate-pulse-glow rounded-full bg-gold-400 [animation-delay:0.3s] sm:block" />
    </div>
  )
}
