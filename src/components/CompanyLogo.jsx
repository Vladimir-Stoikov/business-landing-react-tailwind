import React from 'react';
import slack from '../assets/slack.png';
import amazon from '../assets/amazon.png';
import woocommerce from '../assets/woocommerce.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';

export default function CompanyLogo() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <div className='w-full overflow-hidden container mx-auto py-20 flex gap-8 sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-[300px] shrink-0 px-5 py-2 text-gray-600 border-l-4 border-blue-600 bg-white z-10'>
        Proud partner at <br /> Hubspot & Segment
      </div>

      <div className='flex whitespace-pre-wrap animate-marquee'>
        {logos.map((logo, index) => (
          <img src={logo} alt='company logo' key={index} className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
        ))}
      </div>
    </div>
  );
}
