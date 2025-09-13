import { FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuth } from "../context/AuthContext"; 
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; 
import { useState } from 'react';
export default function Navbar() {
  const navigate = useNavigate();
  const {isAuthenticated , loading} = useAuth();
  const [isOpen, setIsOpen] = useState(false); 
  return (
   <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            onClick={() => navigate("/")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 sm:w-40 md:w-48 lg:w-56"
              viewBox="0 0 250 100"
            >
              <defs>
                <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4facfe" />
                  <stop offset="100%" stopColor="#00f2fe" />
                </linearGradient>
                <linearGradient id="gradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#43e97b" />
                  <stop offset="100%" stopColor="#38f9d7" />
                </linearGradient>
              </defs>
              <g transform="translate(20,33) scale(0.6)">
                <path
                  d="M30 40a15 15 0 0 1 0-30h25a15 15 0 0 1 0 30h-5"
                  fill="none"
                  stroke="url(#gradIcon)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M70 10a15 15 0 0 1 0 30H45a15 15 0 0 1 0-30h5"
                  fill="none"
                  stroke="url(#gradIcon)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </g>
              <text
                x="85"
                y="65"
                fontFamily="Segoe UI, Helvetica, Arial, sans-serif"
                fontSize="40"
                fontWeight="700"
                fill="url(#gradText)"
              >
                Bitlink
              </text>
            </svg>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
            >
              FAQ
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
            {loading ? null : isAuthenticated ? (
              <motion.button
                onClick={() => navigate("/dashboard")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-6 sm:py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 text-sm sm:text-base"
              >
                Dashboard
              </motion.button>
            ) : (
              <motion.button
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 sm:px-8 sm:py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 text-sm sm:text-base"
              >
                Get Started
              </motion.button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-3 shadow-md"
        >
          <Link
            to="features"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium cursor-pointer"
          >
            FAQ
          </Link>
        </motion.div>
      )}
    </nav>

  );
}
