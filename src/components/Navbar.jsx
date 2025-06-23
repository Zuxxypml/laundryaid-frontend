// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import Logo from '../assets/laundryaid-logo.svg'

const primary = '127733'
const secondary = 'fb8c3b'
const Navbar = ({scrolled}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    // { name: 'Home', path: '/' },
    { name: 'Service and Pricing', path: '/service' },
    { name: 'Locations', path: '/locations' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`font-poppins fixed w-full z-100 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 text-black" : "bg-white shadow-sm"
      }`}>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex gap-8 items-center'>
          <Link to='/' className='text-xl font-bold text-indigo-700'>
            <img src={Logo} alt='laundry-aid-logo' width={150} />
          </Link>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className='hover:text-primary text-base font-medium hover:font-semibold'>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <Link className='text-gray-700 hover:text-indigo-600 font-medium hidden md:block'>
          Login
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-gray-700'>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white px-4 pb-4'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className='block py-2 text-gray-700 hover:text-indigo-600'>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
