const TESTIMONIALS = [
  {
    id: 1,
    quote:
      '"United in Pride gave me a second family. The support groups helped me find my voice and the courage to be myself. I\'m forever grateful."',
    name: 'Alex',
    since: 'Member since 2022',
    bg: 'bg-purple-100',
    avatarBg: 'bg-purple-300',
  },
  {
    id: 2,
    quote:
      '"The art workshops changed my life. I found a creative outlet and a community that celebrates who I am. This place is truly magical."',
    name: 'Jordan',
    since: 'Member since 2023',
    bg: 'bg-pink-100',
    avatarBg: 'bg-pink-300',
  },
  {
    id: 3,
    quote:
      '"As a newcomer to Ottawa, United in Pride was the first place I felt truly welcome. The community dinners are my favourite — pure joy!"',
    name: 'Sam',
    since: 'Member since 2024',
    bg: 'bg-teal-50',
    avatarBg: 'bg-teal-300',
  },
];

export default function Stories() {
  return (
    <section id="stories" className="bg-white py-24 px-6">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Community Stories
        </h2>
        <p className="text-pride-muted text-lg">
          Hear from the people who make this space special
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map(({ id, quote, name, since, bg, avatarBg }) => (
          <TestimonialCard
            key={id}
            quote={quote}
            name={name}
            since={since}
            bg={bg}
            avatarBg={avatarBg}
          />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, since, bg, avatarBg }) {
  return (
    <div className="flex flex-col">
      {/* Bubble */}
      <div className={`${bg} rounded-3xl p-7 flex-1`}>
        <p className="text-pride-navy text-sm leading-relaxed italic">{quote}</p>
      </div>

      {/* Speech-bubble tail (CSS triangle) */}
      <div className={`w-4 h-3 ml-8 overflow-hidden`}>
        <div className={`w-4 h-4 ${bg} rotate-45 -translate-y-2`} />
      </div>

      {/* Author row */}
      <div className="flex items-center gap-3 mt-3 ml-2">
        <div
          className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center font-display font-bold text-white`}
        >
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-pride-navy text-sm">{name}</p>
          <p className="text-pride-muted text-xs">{since}</p>
        </div>
      </div>
    </div>
  );
}
