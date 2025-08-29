import {  useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function CTA() {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();
  return (
   <section className="py-16 bg-indigo-600 dark:bg-gray-900 text-center transition-colors duration-300">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-white dark:text-indigo-200 mb-4">
      Start Shortening Your Links Today
    </h2>
    <p className="text-indigo-100 dark:text-gray-400 mb-6">
      Join thousands of users who trust ShrtNinja for fast and secure link shortening.
    </p>
    {isAuthenticated ? (
      <button
      onClick={()=>navigate("/login")}
      className="px-6 py-3 text-lg font-medium bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 rounded-xl shadow hover:bg-indigo-50 transition">
      Go to Dashboard
    </button>
    ):(
      <button
    onClick={()=>navigate("/login")}
    className="px-6 py-3 text-lg font-medium bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 rounded-xl shadow hover:bg-indigo-50 transition">
      Get Started
    </button>
    )}
    
  </div>
</section>

  );
}
