const STATS = [
  { value: '2,500+', label: 'Members',          color: '#b8a7e0', offset: 40 },
  { value: '150+',   label: 'Events Yearly',    color: '#f0a0b8', offset: 60 },
  { value: '$26K',   label: 'Fundraising Goal', color: '#7dcbb8', offset: 75 },
  { value: '✓',      label: 'Safe Space',       color: '#f0d060', offset: 100 },
];

const CIRCUMFERENCE = 220;

export default function Stats() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        {STATS.map((stat) => (
          <StatRing key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function StatRing({ value, label, color, offset }) {

  const dashOffset = CIRCUMFERENCE - (CIRCUMFERENCE * offset) / 100;

  return (
    <div className="flex flex-col items-center gap-3">
     
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        
          <circle
            cx="50" cy="50" r="38"
            fill="none"
            stroke="#f0f0f4"
            strokeWidth="7"
          />
         
          <circle
            cx="50" cy="50" r="38"
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={dashOffset}
            className="transition-all duration-700"
          />
        </svg>

    
        <span className="absolute font-display font-bold text-xl text-pride-navy">
          {value}
        </span>
      </div>

  
      <p className="text-pride-muted text-sm font-medium text-center">{label}</p>
    </div>
  );
}
