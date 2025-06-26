import { useNavigate } from "react-router-dom";

export default function DashboardLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: localStorage.clear();
    navigate("/auth");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 w-full py-2 border border-red-500 text-red-600 rounded-xl hover:pointer"
    >
      Logout
    </button>
  );
}
