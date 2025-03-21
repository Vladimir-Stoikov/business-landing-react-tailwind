import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  function linksHandler(event, navItem) {
    event.preventDefault();
    console.log(activeLink, navItem.href, navItem.href.slice(1));
    const section = document.getElementById(navItem.href.slice(1));
    section ? section.scrollIntoView() : '';
    if (activeLink === navItem.href) return;
    setActiveLink(navItem.href);
  }

  function menuHandler() {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        {/* logo */}
        <div className='flex items-center gap-1 cursor-pointer'>
          <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
          <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
        </div>

        {/* mobile burger menu */}
        <button className='md:hidden p-2' onClick={menuHandler}>
          {isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />}
        </button>

        {/* navitems */}
        <ul className='hidden md:flex items-center gap-10'>
          {navLinks.map((navItem, index) => {
            return (
              <li
                key={index}
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === navItem.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <a href={navItem.href} onClick={e => linksHandler(e, navItem)}>
                  {navItem.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* news button */}
        <button className='hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-blue-100'>Get in touch</button>
      </div>

      {/* burger menu items */}
      {isMenuOpen && (
        <nav className='md:hidden bg-white border-t border-gray-100 py-4'>
          <ul className='container mx-auto px-4 space-y-3'>
            {navLinks.map((navItem, index) => {
              return (
                <li key={index} className={`block text-sm font-medium py-2 ${activeLink === navItem.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}>
                  <a
                    href={navItem.href}
                    onClick={e => {
                      linksHandler(e, navItem);
                      setIsMenuOpen(false);
                    }}
                  >
                    {navItem.label}
                  </a>
                </li>
              );
            })}
            <button className='w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-blue-100'>Get in touch</button>
          </ul>
        </nav>
      )}
    </nav>
  );
}
