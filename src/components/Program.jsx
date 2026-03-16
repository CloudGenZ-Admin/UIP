const PROGRAMS = [
  {
    id: 'art',
    emoji: '🎨',
    title: 'Art & Creativity',
    description: 'Express yourself through painting, writing, and mixed media workshops.',
    cta: 'Explore →',
    bg: 'bg-purple-100',
    featured: false,
  },
  {
    id: 'support',
    emoji: '💬',
    title: 'Support Groups',
    description: 'Peer-led groups for sharing experiences in a safe, confidential environment.',
    cta: 'Join Now →',
    bg: 'bg-pink-100',
    featured: true,
  },
  {
    id: 'education',
    emoji: '📚',
    title: 'Education',
    description: 'Workshops on health, rights, history, and personal development.',
    cta: 'Learn More →',
    bg: 'bg-green-100',
    featured: false,
  },
  {
    id: 'social',
    emoji: '🎉',
    title: 'Social Events',
    description: 'Community dinners, game nights, movie screenings, and celebrations.',
    cta: 'See Events →',
    bg: 'bg-yellow-50',
    featured: false,
  },
  {
    id: 'wellness',
    emoji: '🧘',
    title: 'Wellness',
    description: 'Yoga, meditation, fitness classes, and mental health resources.',
    cta: 'Get Started →',
    bg: 'bg-blue-100',
    featured: false,
  },
  {
    id: 'advocacy',
    emoji: '📣',
    title: 'Advocacy',
    description: 'Fighting for equality, policy change, and community representation.',
    cta: 'Get Involved →',
    bg: 'bg-purple-50',
    featured: false,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-24 px-6">
     
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Our Programs
        </h2>
        <p className="text-pride-muted text-lg">
          Discover the many ways we support our community
        </p>
      </div>

     
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROGRAMS.map((prog) => (
          <ProgramCard key={prog.id} {...prog} />
        ))}
      </div>
    </section>
  );
}

function ProgramCard({ emoji, title, description, cta, bg, featured }) {
  return (
    <article
      className={`relative rounded-3xl p-8 flex flex-col gap-4 ${bg}
        ${featured ? 'ring-2 ring-pink-200 shadow-lg scale-[1.02]' : 'shadow-sm hover:shadow-md'}
        transition-shadow duration-200`}
    >
     
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-white text-xs font-bold px-4 py-1 rounded-full shadow">
          Featured
        </span>
      )}

    
      <span className="text-4xl">{emoji}</span>

    
      <h3 className="font-display font-bold text-xl text-pride-navy">{title}</h3>

     
      <p className="text-pride-muted text-sm leading-relaxed flex-1">{description}</p>

     
      <a
        href="#"
        className="text-pride-purple font-semibold text-sm hover:underline mt-auto"
      >
        {cta}
      </a>
    </article>
  );
}
