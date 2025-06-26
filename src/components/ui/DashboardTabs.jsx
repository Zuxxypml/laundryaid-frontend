export default function DashboardTabs({ activeTab, setActiveTab }) {
  return (
    <div className="mb-6 flex justify-between bg-gray-100 rounded-full overflow-hidden text-sm">
      <button
        className={`w-1/2 py-2 ${
          activeTab === "home" ? "bg-[#c85f0b] text-white" : "text-gray-600"
        }`}
        onClick={() => setActiveTab("home")}
      >
        Dashboard
      </button>
      <button
        className={`w-1/2 py-2 ${
          activeTab === "book" ? "bg-[#127733] text-white" : "text-gray-600"
        }`}
        onClick={() => setActiveTab("book")}
      >
        Book Laundry
      </button>
    </div>
  );
}
