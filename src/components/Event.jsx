import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { apiService } from '../api/apiService';

// --- Helpers to format backend 'date' and 'time' fields ---
const formatDateParts = (dateString) => {
  if (!dateString) return { day: '', month: '' };
  const [year, month, day] = dateString.split('-'); // Format: YYYY-MM-DD
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return {
    day: parseInt(day, 10), // Remove leading zeros for the UI (e.g. "05" -> "5")
    month: monthNames[parseInt(month, 10) - 1]
  };
};

const formatTime12hr = (timeString) => {
  if (!timeString) return '';
  const [hour, minute] = timeString.split(':'); // Format: HH:mm
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${minute} ${ampm}`;
};

const featuredCardStyle = {
  border: '2px solid transparent',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box',
  backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B, #A855F7, #3B82F6)',
};

export default function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState([]); // Controls what is rendered in the timeline
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false); // Track if user has clicked a specific date

  // Helper function to get default Top 3 events
  const getDefaultEvents = (data) => {
    // Get today's date in YYYY-MM-DD strictly
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const localTodayStr = `${yyyy}-${mm}-${dd}`;

    // 1. Filter out past events (keep present and future)
    const upcomingEvents = data.filter(ev => ev.date >= localTodayStr);

    // 2. Group by date, keeping only the latest event for each date
    const groupedByDate = upcomingEvents.reduce((acc, ev) => {
      if (!acc[ev.date]) {
        acc[ev.date] = ev;
      } else {
        // Compare time (HH:mm string comparison works natively), keep the latest
        if (ev.time > acc[ev.date].time) {
          acc[ev.date] = ev;
        }
      }
      return acc;
    }, {});

    // 3. Convert object back to array, sort by date (upcoming first), and slice top 3
    const defaultEventsList = Object.values(groupedByDate)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 3);

    return defaultEventsList;
  };

  // Fetch events from Backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await apiService.getEvents();
        setEventsData(response.data);
        // Show filtered top 3 events initially
        setVisibleEvents(getDefaultEvents(response.data));
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Handler to clear calendar selection and show default top 3 events
  const handleClearSelection = () => {
    setVisibleEvents(getDefaultEvents(eventsData));
    setIsFiltered(false);
  };

  // --- Dynamic Calendar Configuration ---
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIdx = today.getMonth();
  const todayDay = today.getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[currentMonthIdx];

  // Calculate days in the current month & which day of the week the 1st falls on
  const daysInMonth = new Date(currentYear, currentMonthIdx + 1, 0).getDate();
  const startDayOfMonth = new Date(currentYear, currentMonthIdx, 1).getDay();

  return (
    <section id="events" className="py-[100px] bg-[#FAFAFA] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Headers */}
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] font-bold tracking-[2px] uppercase text-sm mb-2">
          What's Coming Up
        </p>
        <h2 className="text-center text-[2.5rem] font-[800] leading-[1.2] mb-[48px]">
          Upcoming Events
        </h2>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* Timeline Section */}
          <div className="relative pl-[60px]">
            {/* SVG Timeline Curve */}
            <svg className="absolute left-0 top-0 w-[60px] h-full" viewBox="0 0 60 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30,0 C60,100 0,200 30,300 C60,400 0,500 30,600" fill="none" stroke="url(#curveGrad)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B6B" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col gap-10">
              {isLoading ? (
                <div className="flex justify-center py-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#A855F7] border-solid"></div>
                </div>
              ) : visibleEvents.length === 0 ? (
                <div className="text-center text-slate-500 font-medium py-10 bg-white rounded-[20px] shadow-sm">
                  No events found for this selection.
                </div>
              ) : (
                visibleEvents.map((ev, i) => {
                  const { day, month } = formatDateParts(ev.date);

                  return (
                    <motion.div
                      id={`event-${ev.date}`} // Unique ID based on exact date
                      key={ev.id || i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative ${ev.featured ? 'featured' : ''} scroll-mt-32`}
                    >
                      {/* Event Node (The dot on the line) */}
                      <div className={`absolute left-[-48px] top-6 rounded-full border-[3px] border-[#f1f5f9] bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] z-10 transition-all 
                        ${ev.featured ? 'w-[22px] h-[22px] left-[-51px] top-[21px] shadow-[0_0_0_6px_rgba(168,85,247,0.2)]' : 'w-4 h-4'}`}
                      />

                      {/* Event Card */}
                      <div
                        className="bg-white p-7 rounded-[20px] flex flex-col md:flex-row gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:translate-x-1.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                        style={ev.featured ? featuredCardStyle : {}}
                      >
                        {/* Date Block */}
                        <div className="bg-gradient-to-br from-[rgba(255,107,107,0.08)] to-[rgba(168,85,247,0.08)] p-3 rounded-[16px] flex flex-row md:flex-col items-center justify-center shrink-0 min-w-[64px] gap-2 md:gap-0">
                          <span className="text-[1.8rem] font-black text-[#A855F7] leading-none">{day}</span>
                          <span className="text-[0.75rem] font-bold text-slate-400 tracking-wider uppercase">{month}</span>
                        </div>

                        {/* Details Block */}
                        <div className="flex-1">
                          <h3 className="text-[1.1rem] font-bold text-slate-800 mb-1.5">{ev.title}</h3>
                          <p className="text-slate-500 text-[0.9rem] leading-[1.6] mb-2.5">{ev.desc}</p>
                          <div className="flex flex-wrap gap-4 text-[0.8rem] text-slate-400">
                            <span className="flex items-center gap-1">📍 {ev.loc}</span>
                            <span className="flex items-center gap-1">🕐 {formatTime12hr(ev.time)}</span>
                          </div>
                          {ev.featured && (
                            <span className="inline-block mt-3 px-3.5 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white rounded-full text-[0.75rem] font-bold shadow-sm">
                              Featured Event
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>

          {/* Calendar Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="sticky top-[100px]"
          >
            <div
              className="bg-white p-7 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              style={{
                border: '2px solid transparent',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #FF6B6B22, #A855F722, #3B82F622)',
              }}
            >
              <div className="text-center font-bold text-[1.1rem] mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#A855F7]">
                {currentMonthName} {currentYear}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[0.8rem]">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                  <span key={d} className="font-bold p-2 text-slate-800 text-[0.7rem]">{d}</span>
                ))}

                {/* Dynamically render empty slots for the current month */}
                {[...Array(startDayOfMonth)].map((_, i) => <span key={`empty-${i}`} />)}

                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;

                  // Construct calendar date string "YYYY-MM-DD" to compare with DB
                  const calendarDateStr = `${currentYear}-${String(currentMonthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                  // Filter events falling exactly on this date string
                  const dayEvents = Array.isArray(eventsData)
                    ? eventsData.filter(ev => ev.date === calendarDateStr)
                    : [];
                  const hasEvent = dayEvents.length > 0;
                  const isFeatured = hasEvent && dayEvents.some(ev => ev.featured);

                  // Time-based checks
                  const isToday = day === todayDay;
                  const isPast = day < todayDay;
                  const isFuture = day > todayDay;

                  // Define Dynamic Colors and Interactivity Based on Rules
                  let colorClass = 'text-slate-500 hover:bg-slate-50 cursor-default';

                  if (hasEvent) {
                    
                    if (isPast) {
                      colorClass = 'bg-slate-200 text-slate-500 opacity-75 cursor-pointer hover:bg-slate-300 transition-colors shadow-inner';
                    } else if (isToday) {
                      colorClass = 'bg-[#3B82F6] text-white font-bold cursor-pointer shadow-md animate-pulse ring-2 ring-blue-200';
                    } else if (isFuture) {
                      colorClass = isFeatured
                        ? 'bg-gradient-to-br from-[#FF6B6B] to-[#A855F7] text-white font-bold shadow-md cursor-pointer hover:scale-110 transform transition-all'
                        : 'bg-purple-100 text-[#A855F7] font-bold cursor-pointer hover:bg-purple-200 transition-colors';
                    }
                  } else if (isToday) {
                    colorClass = 'text-slate-800 font-bold border border-slate-300 bg-slate-50';
                  }

                  const hoverTitle = hasEvent
                    ? dayEvents.map(ev => ev.title).join(' | ')
                    : isToday
                      ? "Today"
                      : "";

                  return (
                    <span
                      key={day}
                      onClick={() => {
                        if (hasEvent) {
                          // Show ALL events for this clicked date
                          setVisibleEvents(dayEvents);
                          setIsFiltered(true);

                          setTimeout(() => {
                            const targetElement = document.getElementById(`event-${calendarDateStr}`);
                            if (targetElement) {
                              targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }, 100);
                        }
                      }}
                      className={`relative group p-2 rounded-lg transition-all ${colorClass}`}
                    >
                      {day}

                      {/* --- Custom Tooltip Design --- */}
                      {hoverTitle && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-2 bg-slate-800 text-white text-[0.7rem] font-medium leading-tight rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] pointer-events-none text-center">
                          {hoverTitle}
                          {/* Tooltip Arrow */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-800"></div>
                        </div>
                      )}
                    </span>
                  );
                })}
              </div>

              {isFiltered && (
                <div className="mt-5 text-center">
                  <button
                    onClick={handleClearSelection}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[0.8rem] font-bold rounded-lg transition-colors duration-300"
                  >
                    Clear Selection
                  </button>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}