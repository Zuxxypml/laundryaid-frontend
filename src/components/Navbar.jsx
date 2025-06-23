// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/laundryaid-logo.svg";

const primary = "127733";
const secondary = "fb8c3b";
const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [];

  return (
    <nav
      className={`font-poppins fixed w-full z-100 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm"
          : " md:bg-gradient-to-r sm:bg-gradient-to-r from-[#CFE3D6] via-[#a7cdb7] to-[#7cbf9e]"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 py-6 flex justify-center items-center">
        <div className="flex gap-8 justify-center items-center">
          <Link to="/" className="text-xl font-bold text-indigo-700">
            <img src={Logo} alt="laundry-aid-logo" width={180} />
          </Link>

          {/* Desktop Links */}
          {/* <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-primary text-base font-medium hover:font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div> */}
        </div>

        {/* Mobile Menu Button
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
