import { useState } from 'react';

const EVENTS = [
  {
    id: 1,
    month: 'MAR',
    day: 15,
    title: 'Art Workshop',
    description: 'Express yourself through mixed media',
    time: '2:00 PM — 5:00 PM',
    featured: false,
  },
  {
    id: 2,
    month: 'MAR',
    day: 20,
    title: 'Community Dinner',
    description: 'A potluck evening of food and friendship',
    time: '6:00 PM — 9:00 PM',
    featured: true,
  },
  {
    id: 3,
    month: 'MAR',
    day: 25,
    title: 'Support Group',
    description: 'Safe space for sharing and healing',
    time: '7:00 PM — 8:30 PM',
    featured: false,
  },
];

// Days in March 2025 that have events
const EVENT_DAYS = [15, 20, 25];

// Days displayed as "highlighted primary" (featured)
const FEATURED_DAY = 20;

const DAYS_OF_WEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// March 2025 starts on Saturday → index 6
const MARCH_START_DOW = 6;
const MARCH_DAYS = 31;

export default function Events() {
  const [selectedDay, setSelectedDay] = useState(20);

  return (
    <section id="events" className="bg-pride-sand py-24 px-6">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Upcoming Events
        </h2>
        <p className="text-pride-muted text-lg">
          Join us for these exciting community gatherings
        </p>
      </div>

      {/* Event cards — fan layout on desktop */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-stretch mb-20">
        {EVENTS.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Calendar */}
      <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-sm p-6">
        {/* Month header */}
        <div className="flex items-center justify-between mb-6">
          <button className="text-pride-muted hover:text-pride-navy transition-colors">←</button>
          <h3 className="font-display font-semibold text-pride-navy">March 2025</h3>
          <button className="text-pride-muted hover:text-pride-navy transition-colors">→</button>
        </div>

        {/* Day-of-week headers */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS_OF_WEEK.map((d) => (
            <span key={d} className="text-center text-xs text-pride-muted font-semibold py-1">
              {d}
            </span>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-y-1">
          {/* Empty cells before month start */}
          {Array.from({ length: MARCH_START_DOW }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Day cells */}
          {Array.from({ length: MARCH_DAYS }, (_, i) => i + 1).map((day) => {
            const hasEvent  = EVENT_DAYS.includes(day);
            const isFeatured = day === FEATURED_DAY;
            const isSelected = day === selectedDay;

            return (
              <button
                key={day}
                onClick={() => hasEvent && setSelectedDay(day)}
                className={`
                  w-8 h-8 mx-auto text-sm rounded-full flex items-center justify-center transition-all duration-150
                  ${isFeatured
                    ? 'bg-gradient-cta text-white font-bold shadow-md'
                    : isSelected && hasEvent
                      ? 'bg-purple-200 text-pride-purple font-semibold'
                      : hasEvent
                        ? 'text-pride-purple font-semibold hover:bg-purple-50'
                        : 'text-pride-muted hover:bg-gray-100'
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }) {
  const { month, day, title, description, time, featured } = event;

  return (
    <article
      className={`
        relative flex-1 rounded-3xl p-6 flex flex-col gap-3 transition-all duration-200
        ${featured
          ? 'bg-white ring-2 ring-pink-200 shadow-xl scale-[1.03] z-10'
          : 'bg-white/60 shadow-sm'
        }
      `}
    >
      {/* Featured badge */}
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-white text-xs font-bold px-4 py-1 rounded-full">
          Featured
        </span>
      )}

      {/* Date badge */}
      <div className="w-14 h-14 rounded-2xl bg-pink-100 flex flex-col items-center justify-center">
        <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">{month}</span>
        <span className="font-display font-bold text-2xl text-pride-navy leading-none">{day}</span>
      </div>

      {/* Content */}
      <h3 className={`font-display font-bold ${featured ? 'text-2xl' : 'text-xl'} text-pride-navy`}>
        {title}
      </h3>
      <p className="text-pride-muted text-sm leading-relaxed flex-1">{description}</p>

      {/* Time */}
      <div className="flex items-center gap-2 text-sm text-pride-muted">
        <span>🕐</span> {time}
      </div>
    </article>
  );
}
