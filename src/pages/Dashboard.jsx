import React, { useState } from "react";
import RequestForm from "@/components/RequestForm";
import DashboardHome from "@/components/ui/DashboardHome";
import DashboardLogout from "@/components/ui/DashboardLogout";
import DashboardTabs from "@/components/ui/DashboardTabs";
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const bookings = [
    {
      id: 1,
      service: "Premium",
      pickupDate: "2025-06-26",
      deliveryDate: "2025-06-29",
      status: "Processing",
    },
    {
      id: 2,
      service: "Wash & Fold",
      pickupDate: "2025-06-21",
      deliveryDate: "2025-06-24",
      status: "Delivered",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto pt-20 p-4 font-poppins">
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "home" && (
        <>
          <DashboardHome bookings={bookings} />
          <DashboardLogout />
        </>
      )}

      {activeTab === "book" && <RequestForm />}
    </div>
  );
}
