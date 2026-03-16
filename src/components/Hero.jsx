const TAGS = [
  { emoji: '🏠', label: 'Safe Space' },
  { emoji: '🌈', label: 'Inclusive' },
  { emoji: '💜', label: 'Supportive' },
];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-hero min-h-[88vh] flex items-center justify-center text-center px-6"
    >
    
      <Circle size={340} color="bg-purple-200/70"  className="top-[8%]  -left-[6%]" />
      <Circle size={80}  color="bg-teal-200/80"    className="top-[38%] left-[20%]" />
      <Circle size={120} color="bg-teal-200/70"    className="top-[12%] right-[10%]" />
      <Circle size={200} color="bg-pink-200/60"    className="bottom-[8%] left-[10%]" />
      <Circle size={180} color="bg-purple-200/50"  className="bottom-[12%] right-[32%]" />
      <Circle size={220} color="bg-pink-300/40"    className="-bottom-[4%] -right-[2%]" />

     
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Headline */}
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-pride-navy mb-6">
          Welcome to{' '}
          <span className="text-gradient">United in Pride</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-pride-muted text-lg md:text-xl leading-relaxed mb-10">
          A safe, inclusive space for Ottawa's 2SLGBTQIA+ community
          <br className="hidden md:block" />
          to connect, grow, and thrive together.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TAGS.map(({ emoji, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 bg-white/80 backdrop-blur border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium text-pride-navy shadow-sm"
            >
              {emoji} {label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#programs"
            className="bg-gradient-cta text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Explore Programs
          </a>
          <a
            href="#about-centre"
            className="border-2 border-pride-lavender text-pride-purple font-semibold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

// Reusable decorative circle
function Circle({ size, color, className }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
