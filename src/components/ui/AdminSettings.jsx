import { useNavigate } from "react-router-dom";

export default function AdminSettings() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: clear any localStorage or tokens here
    navigate("/auth"); // Redirect to login/auth page
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <p className="text-sm text-gray-600">
        🔒 Change admin password (coming soon)
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
