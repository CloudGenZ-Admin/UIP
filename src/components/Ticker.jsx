const ANNOUNCEMENTS = [
  { emoji: '🌿', text: 'New Support Group Starting March 28' },
  { emoji: '🎨', text: 'Art Workshop Registration Open' },
  { emoji: '🏠', text: 'Community Dinner — March 20th' },
  { emoji: '✨', text: 'Volunteer Opportunities Available' },
  { emoji: '🌈', text: 'Pride Month Celebration Coming Soon' },
  { emoji: '💜', text: 'Peer Counselling Now Accepting New Members' },
];


const ITEMS = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

export default function Ticker() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        background: 'linear-gradient(90deg, #c4aee8 0%, #98d4c4 50%, #c4aee8 100%)',
      }}
    >
    
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#c4aee8] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#98d4c4] to-transparent z-10" />

     
      <div className="flex animate-ticker whitespace-nowrap">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-white font-semibold text-sm"
          >
            <span>{item.emoji}</span>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
