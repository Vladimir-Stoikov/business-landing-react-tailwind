import React from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10'>
          {/* brand column */}
          <div className=''>
            <div className='flex gap-1 items-center mb-4'>
              <div className='flex items-center gap-1 cursor-pointer'>
                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
              </div>
              <span className='text-xl font-medium ml-1'>The Next Design</span>
            </div>
            <p className='text-gray-600 mb-6'>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times</p>

            <div className='flex gap-3'>
              <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaFacebookF className='size-5' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaTwitter className='size-5' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200'>
                <FaLinkedin className='size-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
