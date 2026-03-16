const FEATURES = [
  'Peer-led support groups & counselling',
  'Cultural & educational programming',
  'Youth & elder-specific programs',
  'Advocacy & community outreach',
];

export default function About() {
  return (
    <section id="about-centre" className="bg-pride-sand py-24 px-6">
     
      <WaveDivider />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
        <div className="bg-gradient-about rounded-3xl aspect-[4/3] flex items-center justify-center shadow-lg">
          <span className="text-white/80 font-display font-medium text-lg">
            Community Centre
          </span>
        </div>

        {/* Text content */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy">
            About Our Centre
          </h2>

          <p className="text-pride-muted leading-relaxed">
            United in Pride is a vibrant community centre for 2SLGBTQIA+
            individuals and allies, located on the unceded, unsurrendered territory
            of the Algonquin Anishinaabe people in Odawa/Ottawa.
          </p>

          <p className="text-pride-muted leading-relaxed">
            We provide a welcoming space where everyone can find support,
            build connections, and celebrate their authentic selves.
          </p>

          {/* Feature checklist */}
          <ul className="space-y-3 pt-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-pride-teal flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-pride-muted font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            className="inline-block mt-4 bg-gradient-cta text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

// Subtle wave SVG at the top of the section
function WaveDivider() {
  return (
    <div className="w-full overflow-hidden mb-16 -mt-8">
      <svg viewBox="0 0 1440 40" className="w-full text-white" fill="currentColor">
        <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,16 1440,20 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
}
