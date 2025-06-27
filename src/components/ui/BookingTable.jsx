export default function BookingTable({ bookings, updateStatus }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
      <table className="min-w-full text-sm border">
        <thead className="bg-[#c85f0b] text-white">
          <tr>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Pickup Date</th>
            <th className="p-3 text-left">Address</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Payment Ref</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b hover:bg-green-50">
              <td className="p-3">{b.name}</td>
              <td className="p-3">{b.service}</td>
              <td className="p-3">{b.pickupDate}</td>
              <td className="p-3">{b.address}</td>
              <td className="p-3">
                <select
                  value={b.status}
                  onChange={(e) => updateStatus(b.id, e.target.value)}
                  className={`rounded px-2 py-1 text-sm ${
                    b.status === "new"
                      ? "bg-yellow-100 text-yellow-700"
                      : b.status === "processing"
                      ? "bg-blue-100 text-blue-700"
                      : b.status === "ready"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <option value="new">New</option>
                  <option value="processing">Processing</option>
                  <option value="ready">Ready</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
              <td className="p-3">{b.paymentRef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
