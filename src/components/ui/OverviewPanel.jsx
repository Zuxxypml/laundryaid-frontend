export default function OverviewPanel({ bookings }) {
  const totalBookings = bookings.length;
  const revenue = bookings.reduce((sum, b) => {
    const prices = { "Wash & Fold": 6000, Deluxe: 10000, Premium: 25000 };
    return sum + (prices[b.service] || 0);
  }, 0);
  const totalUsers = new Set(bookings.map((b) => b.name)).size;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <p>
        📦 Total Bookings: <strong>{totalBookings}</strong>
      </p>
      <p>
        💰 Total Revenue: <strong>₦{revenue.toLocaleString()}</strong>
      </p>
      <p>
        👥 Total Users: <strong>{totalUsers}</strong>
      </p>
    </div>
  );
}
