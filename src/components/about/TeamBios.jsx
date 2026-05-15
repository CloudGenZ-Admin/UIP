import React, { useState } from 'react';

import marshaImg from '../../assets/Marsha.jpeg';
import winifredImg from '../../assets/Winifred (1).jpeg';
import raymondImg from '../../assets/Raymond.jpeg';
import khaledImg from '../../assets/Khaled.jpeg';
import saddicImg from '../../assets/Saddic.jpeg';

const TEAM_MEMBERS = [
  {
    id: 'winifred',
    name: 'Winifred Ikilai',
    role: 'Public Health Professional',
    image: winifredImg,
    bgColor: 'bg-indigo-50/60',
    accent: 'text-indigo-600',
    bio: `Winifred Ikilai is a Canada-based Public Health Proffessional, Social Worker, HIV Activist, and Women and Girls’ Rights Advocate with over 10 years of experience leading community-centered programs in HIV, sexual and reproductive health, mental health, gender equity, housing support, and community development. She holds a Bachelor’s degree in Development Studies from Makerere University, a Postgraduate qualification in International Gender Equality Studies from the University of Iceland and a Master of Public Health specializing in Maternal and Adolescent Health. Currently, Winifred serves as the Project Coordinator for the City of Toronto Urban Health Sexual Health Fund under the National Network for Immigrant and Refugee Rights, where she supports initiatives focused on advancing sexual health education, equitable healthcare access, and community empowerment among immigrant and refugee populations. She also works with Neighbours Community Homes, supporting vulnerable and marginalized communities in navigating housing challenges, accessing stable housing, mental health support, and tenant eviction prevention services. In addition, she is the Founder and Executive Director of Healthy Empowered and Resilient Initiative (HER-Initiative), an organization empowering immigrant and refugee communities in Canada through settlement support, mental health advocacy, economic empowerment, HIV awareness, and gender-based violence prevention initiatives. Winifred currently serves as a Champion to End Gender-Based Violence among immigrant and refugee communities through the Ontario Council of Agencies Serving Immigrants initiative. Her work focuses on creating safe spaces, strengthening community resilience, and improving access to equitable health and social services for underserved populations. Globally, Winifred is recognized as an HIV and SRHR advocate who has contributed to policy advocacy, HIV prevention research, and community mobilization efforts across Africa and internationally. As an AVAC (AIDS Vaccine Advocacy Coalition) Alumni Fellow and International AIDS Society HIV Cure Research Fellow, she has championed community engagement in HIV prevention, treatment literacy, HIV cure research, and women-centered HIV prevention technologies including the HIV Vaginal Dapivirine Ring and long-acting PrEP. Through advocacy, research, mentorship, and community empowerment, Winifred continues to advance health equity, gender justice, and social inclusion for women, girls, immigrants, refugees, and people living with HIV.`
  },
  {
    id: 'khaled',
    name: 'Khaled Salam',
    role: 'Executive Director',
    image: khaledImg,
    bgColor: 'bg-rose-50/60',
    accent: 'text-rose-600',
    bio: `Khaled Salam is the Executive Director of the AIDS Committee of Ottawa (ACO).\n\nKhaled has been with ACO for 23 years in various capacities. He has previously provided direct support to people living with HIV, in his capacity as support worker from 2004 to 2007, after which he became Manager of ACO’s support services team from 2007 to 2011. Khaled was hired as the interim Executive Director of ACO in 2011, then as the permanent Executive Director in 2013. \n\nKhaled graduated from Algonquin College in 2003 from the SSW Program and identifies as a member of the BIPOC community.`
  },
  {
    id: 'saddic',
    name: 'Saddic Lubega',
    role: 'Teaching Assistant',
    image: saddicImg,
    bgColor: 'bg-teal-50/60',
    accent: 'text-teal-600',
    bio: `Saddic Lubega is a Teaching Assistant with Youth Empowering Parents (YEP), a partner organization with Toronto District School Board (tdsb). My passion lies in helping students/learners achieving their goals. \n\nI'm an African Immigrant with a strong bond for the 2SLGBTIQA+ community where I participate in activities that include supporting newcomers with access to information and resources in starting their new life in Canada 🇨🇦`
  },
  {
    id: 'marsha',
    name: 'Marsha Clyne',
    role: 'Nonprofit Leader',
    image: marshaImg,
    bgColor: 'bg-amber-50/60',
    accent: 'text-amber-600',
    bio: `Marsha Clyne is a nonprofit leader, fundraising strategist, and Founder of True Impact Philanthropy, where she supports charities and grassroots organizations across Canada with fundraising strategy, partnerships, and organizational growth.\n\nWith over 10 years of experience in the nonprofit sector, she has worked with organizations focused on community development, youth empowerment, health, women’s leadership, and equity driven initiatives. Marsha holds a Master’s degree in Philanthropy and Nonprofit Leadership, a Bachelor’s degree in Peace and Conflict Studies, and an Associate degree in Social Communications.\n\nAs a Board Member of United in Pride, she hopes to bring strategic leadership, fundraising expertise, and a strong commitment to building inclusive, empowering, and sustainable support systems for the LGBTQ+ community.`
  },
  {
    id: 'raymond',
    name: 'Raymond Gukiina',
    role: 'Community Leader',
    image: raymondImg,
    bgColor: 'bg-emerald-50/60',
    accent: 'text-emerald-600',
    bio: `Raymond Gukiina is a refugee community leader, youth advocate and the Executive Director of the National Network for Immigrants and Refugees– Canada (NNIR-Canada). Work focuses on supporting Black immigrants, refugees and LGBTQI+ communities through culturally responsive programming centered on health equity, youth empowerment, leadership and community engagement. Passionate about creating safe and inclusive spaces that uplift underserved communities and amplify lived experiences through advocacy, dialogue and collaboration.`
  }
];

export default function TeamBios() {
  // Track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});

  // Max characters to show before truncating
  const MAX_LENGTH = 280;

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Grid: items-start removed so cards naturally stretch to equal heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((person) => {
            const isLongText = person.bio.length > MAX_LENGTH;
            const isExpanded = expandedCards[person.id];
            
            // Truncate at the nearest space to avoid cutting words in half
            const truncatedBio = isLongText 
              ? person.bio.slice(0, MAX_LENGTH).trim() + '...'
              : person.bio;

            return (
              <div 
                key={person.id} 
                className={`h-full p-10 md:p-12 rounded-[3rem] ${person.bgColor} border border-transparent hover:border-slate-100 transition-all shadow-sm flex flex-col relative overflow-hidden`}
              >
                {/* Decorative Gradient Bar at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#3B82F6]"></div>

                {/* Header: Profile Image & Role Badge */}
                <div className="flex items-center justify-between mb-8">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-3xl object-cover shadow-sm border-4 border-white"
                  />
                  <span className="bg-white px-4 py-1.5 rounded-full font-black text-[0.6rem] md:text-xs text-slate-900 uppercase tracking-[0.2em] shadow-sm text-center">
                    {person.role}
                  </span>
                </div>

                {/* Title (Name) & Description (Bio) */}
                {/* flex-grow pushes the button down if the card is stretched by an adjacent taller card */}
                <div className="flex-grow flex flex-col">
                  <h3 className={`text-3xl md:text-4xl font-black text-slate-900 leading-tight italic mb-4 ${person.accent}`}>
                    {person.name}
                  </h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line mb-4">
                    {isExpanded ? person.bio : truncatedBio}
                  </p>
                  
                  {/* Read More / Read Less Button */}
                  {isLongText && (
                    <button 
                      onClick={() => toggleExpand(person.id)}
                      className={`mt-auto self-start font-black text-sm uppercase tracking-widest hover:opacity-70 transition-opacity ${person.accent}`}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}