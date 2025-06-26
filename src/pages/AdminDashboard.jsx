import AdminSettings from "@/components/ui/AdminSettings";
import AdminTabs from "@/components/ui/AdminTabs";
import BookingTable from "@/components/ui/BookingTable";
import OverviewPanel from "@/components/ui/OverviewPanel";
import { useState } from "react";
const dummyBookings = [
  {
    id: 1,
    name: "Basit Adebisi",
    service: "Premium",
    pickupDate: "2025-06-26",
    address: "123 Oluyole, Ibadan",
    status: "new",
    paymentRef: "PSK123456789",
  },
  {
    id: 2,
    name: "Zainab K.",
    service: "Wash & Fold",
    pickupDate: "2025-06-27",
    address: "456 Challenge, Ibadan",
    status: "processing",
    paymentRef: "PSK987654321",
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [bookings, setBookings] = useState(dummyBookings);

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );
    setBookings(updated);
  };

  return (
    <div className="pt-24 px-4 md:px-8 max-w-6xl mx-auto font-poppins">
      <h2 className="text-2xl font-bold mb-6 text-[#03170a] text-center">
        Admin Dashboard
      </h2>

      <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && <OverviewPanel bookings={bookings} />}
      {activeTab === "bookings" && (
        <BookingTable bookings={bookings} updateStatus={updateStatus} />
      )}
      {activeTab === "settings" && <AdminSettings />}
    </div>
  );
}
