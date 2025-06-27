export default function DashboardHome({ bookings }) {
  return (
    <>
      <h2 className="text-xl font-bold text-[#03170a] mb-4">Welcome back 👋</h2>

      <div className="bg-white rounded-xl p-4 shadow">
        <h3 className="font-semibold mb-2">Recent Bookings</h3>
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border-b py-2 text-sm flex flex-col sm:flex-row sm:justify-between"
          >
            <div>
              <span className="block font-semibold">{booking.service}</span>
              <span className="text-gray-500 text-xs">
                Pickup: {booking.pickupDate} • Delivery: {booking.deliveryDate}
              </span>
            </div>
            <span
              className={`font-semibold mt-1 sm:mt-0 ${
                booking.status === "Delivered"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {booking.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
