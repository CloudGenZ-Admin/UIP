const GALLERY_ITEMS = [
  { id: 1, emoji: '🎨', title: 'Art Workshop — Feb 2025', gradient: 'bg-gradient-g1' },
  { id: 2, emoji: '🎉', title: 'Community Celebration',    gradient: 'bg-gradient-g2' },
  { id: 3, emoji: '💬', title: 'Support Circle',           gradient: 'bg-gradient-g3' },
  { id: 4, emoji: '🌈', title: 'Pride March 2024',         gradient: 'bg-gradient-g4' },
  { id: 5, emoji: '🧘', title: 'Wellness Wednesday',       gradient: 'bg-gradient-g5' },
  { id: 6, emoji: '📣', title: 'Advocacy Rally',           gradient: 'bg-gradient-g6' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 px-6">
      {/* Section header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Our Community
        </h2>
        <p className="text-pride-muted text-lg">
          Moments of joy, connection, and pride
        </p>
      </div>

      {/* Image grid */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_ITEMS.map(({ id, emoji, title, gradient }) => (
          <GalleryCard key={id} emoji={emoji} title={title} gradient={gradient} />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ emoji, title, gradient }) {
  return (
    <figure className="group cursor-pointer">
      {/* Image area */}
      <div
        className={`${gradient} aspect-[4/3] rounded-2xl flex items-center justify-center
          overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-200`}
      >
        <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
      </div>
      {/* Caption */}
      <figcaption className="mt-3 text-center text-sm font-medium text-pride-muted">
        {title}
      </figcaption>
    </figure>
  );
}
