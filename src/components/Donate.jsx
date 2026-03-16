import { useState } from 'react';

const IMPACT_TAGS = [
  { emoji: '🏠', label: '$25 — One safe space session' },
  { emoji: '🎨', label: '$50 — Workshop materials' },
  { emoji: '🎉', label: '$100 — Community event' },
  { emoji: '💜', label: '$250 — Monthly program sponsor' },
];

const AMOUNTS = [10, 25, 50, 100, 250];

const RAISED   = 14645;
const GOAL     = 26000;
const PROGRESS = Math.round((RAISED / GOAL) * 100);

export default function Donate() {
  const [frequency, setFrequency]   = useState('one-time');
  const [selected,  setSelected]    = useState(25);
  const [custom,    setCustom]      = useState('');

  return (
    <section id="donate" className="bg-pride-sand py-24 px-6">
      {/* Section header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy mb-4">
          Support Our Mission
        </h2>
        <p className="text-pride-muted text-lg">
          Every dollar helps us build a more inclusive community
        </p>
      </div>

      {/* Impact pill tags */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {IMPACT_TAGS.map(({ emoji, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium text-pride-navy shadow-sm"
          >
            {emoji} {label}
          </span>
        ))}
      </div>

      {/* Donation card */}
      <div className="max-w-lg mx-auto">
        {/* Gradient border wrapper */}
        <div
          className="rounded-3xl p-0.5 shadow-xl"
          style={{ background: 'linear-gradient(135deg, #b8a7e0, #7dcbb8)' }}
        >
          <div className="bg-white rounded-[calc(1.5rem-2px)] p-8 space-y-6">

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-pride-purple font-semibold">
                  ${RAISED.toLocaleString()} raised
                </span>
                <span className="text-pride-muted">of ${GOAL.toLocaleString()} goal</span>
              </div>

              {/* Track */}
              <div className="h-2.5 rounded-full overflow-hidden bg-gray-100">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${PROGRESS}%`,
                    background: 'linear-gradient(90deg, #8b5ecf, #e888a8)',
                  }}
                />
              </div>
              <p className="text-center text-xs text-pride-muted">
                {PROGRESS}% funded — Help us reach our goal!
              </p>
            </div>

            {/* Frequency toggle */}
            <div className="flex bg-gray-100 rounded-full p-1">
              {['one-time', 'monthly'].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setFrequency(freq)}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-full capitalize transition-all duration-200
                    ${frequency === freq
                      ? 'bg-white text-pride-purple shadow-sm'
                      : 'text-gray-500 hover:text-pride-navy'
                    }`}
                >
                  {freq === 'one-time' ? 'One-Time' : 'Monthly'}
                </button>
              ))}
            </div>

            {/* Amount selector */}
            <div className="flex flex-wrap gap-3">
              {AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setSelected(amt); setCustom(''); }}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm border-2 transition-all duration-200
                    ${selected === amt && !custom
                      ? 'border-pride-purple bg-purple-50 text-pride-purple'
                      : 'border-gray-200 text-pride-navy hover:border-pride-lavender'
                    }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            {/* Custom amount input */}
            <div className="flex items-center gap-2 border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-pride-lavender transition-colors">
              <span className="text-pride-muted font-medium">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                className="flex-1 outline-none text-sm text-pride-navy placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Donate button */}
            <button className="w-full bg-gradient-cta text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Donate Now 💜
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
