import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscountButton from "../components/DiscountButton";

function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    const current = triggerRef.current;
    if (current) observer.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <div ref={triggerRef} className="flex-1 bg-[#e7f1ea]"></div>
      <Outlet />
      <Footer />
      {scrolled ? <DiscountButton /> : null}
    </div>
  );
}

export default Layout;

// className="h-1 w-full absolute top-0 pointer-events-none"
