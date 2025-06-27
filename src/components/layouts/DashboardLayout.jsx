import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <header className="bg-white shadow px-4 py-4 fixed top-0 w-full z-50">
        <h1 className="text-lg font-semibold text-[#127733]">
          LaundryAid Dashboard
        </h1>
      </header>

      <main className="pt-20 px-4 pb-10 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
