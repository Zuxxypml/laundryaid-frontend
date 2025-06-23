import React from 'react';
import Logo from "../assets/laundryaid-logo.svg";
import {Link} from 'react-router-dom'


export default function Footer() {
  return (
    <footer className='bg-[#03170a] text-white py-10 px-6 md:px-20 font-poppins'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {/* Brand Info */}
        <div>
          {/* <h3 className="text-xl font-bold mb-3">CleanCare Laundry</h3> */}
          <div className='mb-3'>
            <Link to='/' className='text-xl font-bold text-indigo-700'>
              <img src={Logo} alt='laundry-aid-logo' width={150} />
            </Link>
          </div>
          <p className='text-sm text-gray-300'>
            Bringing freshness and care to every fabric. Fast, reliable, and
            affordable laundry services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='font-semibold mb-3'>Quick Links</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>
              <a href='#' className='hover:text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Locations
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className='font-semibold mb-3'>Services</h4>
          <ul className='space-y-2 text-sm text-gray-300'>
            <li>Wash & Fold</li>
            <li>Ironing</li>
            <li>Stain Removal</li>
            <li>Dry Cleaning</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='font-semibold mb-3'>Contact Us</h4>
          <p className='text-sm text-gray-300'>
            123 Oluyole, Ibadan, Nigeria
          </p>
          <p className='text-sm text-gray-300 mt-1'>Email: info@laundryaid.ng</p>
          <p className='text-sm text-gray-300 mt-1'>Phone: +2349048989787</p>
        </div>
      </div>

      {/* Bottom */}
      <div className='mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400'>
        &copy; {new Date().getFullYear()} LaundryAid. All rights reserved.
      </div>
    </footer>
  );
}
