export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,168,28,0.16),transparent)]" />
      <div className="absolute left-1/2 top-[-14%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[130px] sm:h-[600px] sm:w-[900px]" />
      <div className="absolute -bottom-40 -right-24 h-[320px] w-[320px] rounded-full bg-gold-600/10 blur-[110px] sm:h-[420px] sm:w-[420px]" />
      <div className="absolute -bottom-32 -left-24 h-[280px] w-[280px] rounded-full bg-gold-700/10 blur-[100px]" />
      <div className="grid-fade absolute inset-0" />

      <div className="absolute left-[12%] top-[22%] hidden h-2 w-2 animate-pulse-glow rounded-full bg-gold-400 sm:block" />
      <div className="absolute right-[16%] top-[32%] hidden h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold-300 [animation-delay:0.6s] sm:block" />
      <div className="absolute left-[22%] top-[65%] hidden h-1.5 w-1.5 animate-pulse-glow rounded-full bg-gold-400 [animation-delay:1.2s] sm:block" />
      <div className="absolute right-[10%] top-[60%] hidden h-2 w-2 animate-pulse-glow rounded-full bg-gold-300 [animation-delay:0.3s] sm:block" />
    </div>
  )
}
