import React from 'react';
import aboutImage from '../../../src/assets/About3.png'; 

export default function AboutLeadership() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-4xl mb-4 block">✊</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pride-navy">Leadership & Growth</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title & Image Area */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-pride-navy mb-2">Our Foundation</h3>
              <p className="text-pride-muted leading-relaxed">
                United in Pride is Founded by Stella Nakitende, a Ugandan Lesbian dedicated to empowering 2SLGBTQ+ newcomers, immigrants, and refugees fleeing persecution.
              </p>
            </div>

            {/* Actual Image Area */}
            <div className="w-full aspect-[4/5] rounded-[2.5rem] shadow-lg relative overflow-hidden group">
              <img 
                src={aboutImage} 
                alt="Stella and Hudson" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
              <h4 className="font-bold text-pride-navy mb-2">Scaling Our Impact</h4>
              <p className="text-sm text-pride-muted">
                As her impact grows, she is preparing to scale: expanding peer circles, launching new wellness initiatives, and building a dedicated Advisory Board to steward our growth.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <h2 className="font-display font-bold text-4xl text-pride-navy mb-1">Stella Nakitende</h2>
              <p className="text-pride-purple font-semibold text-xl">Founder & Executive Director</p>
            </div>
            
            <div className="space-y-5 text-pride-muted text-lg leading-relaxed">
              <p>
                After escaping anti-LGBTQ+ persecution in Uganda, Stella founded United in Pride with a deep commitment to empowering and supporting 2SLGBTQ+ newcomers, immigrants, and refugees.
              </p>
              <p>
                Driven by her own experience of survival, her leadership is also informed by the personal challenges faced by her partner, Hudson, a trans man who has encountered transphobia, discrimination, and fear both before and after fleeing his home. 
              </p>
              <p>
                Stella's firsthand understanding of these struggles fuels her advocacy for the trans community and her passion for creating safe, inclusive, and culturally affirming spaces where all queer and trans individuals can heal, connect, and thrive.
              </p>
              <p>
                As the sole founder, Stella leads the organization's strategic vision and advocacy efforts, ensuring that every voice is heard, valued, and empowered. Her work continues to break down barriers, creating a world where 2SLGBTQ+ newcomers and refugees can live authentically, proudly, and without fear.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}