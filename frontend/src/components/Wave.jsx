import React from 'react';

export default function Wave() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
      <svg
        // Height को 100-140px के बीच रखा है ताकि कर्व एकदम स्पष्ट और गहरा दिखे
        className="block relative w-full h-[20px] md:h-[120px] lg:h-[140px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          // यह कस्टम Path विशेष रूप से 4-कार्ड ग्रिड के लिए डिज़ाइन किया गया है
          d="M0,60 C150,120 300,120 450,60 C600,10 840,10 990,60 C1140,120 1290,120 1440,60 V130 H0 Z"
          className="fill-[#F8F9FC]" 
        ></path>
      </svg>
    </div>
  );
}