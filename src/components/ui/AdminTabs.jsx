export default function AdminTabs({ activeTab, setActiveTab }) {
  const tabs = ["overview", "bookings", "settings"];

  return (
    <div className="flex justify-center gap-3 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize px-4 py-2 rounded-full font-medium ${
            activeTab === tab
              ? "bg-[#c85f0b] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
