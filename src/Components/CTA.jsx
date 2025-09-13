import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function CTA() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <section className="py-12 sm:py-16 bg-indigo-600 dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-indigo-200 mb-3 sm:mb-4">
          Start Shortening Your Links Today
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base lg:text-lg text-indigo-100 dark:text-gray-400 mb-6 sm:mb-8 px-2">
          Join thousands of users who trust <span className="font-semibold">ShrtNinja</span> for fast and secure link shortening.
        </p>

        {/* Button */}
        {isAuthenticated ? (
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-medium bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 rounded-xl shadow hover:bg-indigo-50 transition"
          >
            Go to Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-medium bg-white text-indigo-600 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-500 rounded-xl shadow hover:bg-indigo-50 transition"
          >
            Get Started
          </button>
        )}
      </div>
    </section>
  );
}
