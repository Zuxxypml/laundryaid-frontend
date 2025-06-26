import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/laundryaid-logo.svg";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" }, // Optional: render conditionally if logged in
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`font-poppins fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-green-800">
          <img src={Logo} alt="LaundryAid Logo" className="w-44 sm:w-52" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-medium hover:text-[#127733] transition ${
                isActive(link.path) ? "text-[#127733] font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b border-gray-200 ${
                isActive(link.path)
                  ? "text-[#127733] font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
