import { FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';
import { Link } from "react-scroll";
export default function Navbar() {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();
  return (
   <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <motion.div
        onClick={() => navigate('/')} 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center hover:cursor-pointer"
      >
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="250"
      height="100"
      viewBox="0 0 250 100"
    >
      <defs>
        {/* Gradient for text */}
        <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4facfe" stopOpacity="1" />
          <stop offset="100%" stopColor="#00f2fe" stopOpacity="1" />
        </linearGradient>
        {/* Gradient for icon */}
        <linearGradient id="gradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#43e97b" stopOpacity="1" />
          <stop offset="100%" stopColor="#38f9d7" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Icon: two chain links */}
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

      {/* Text */}
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

      {/* Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="features" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Features</Link>
        <Link to="contact" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:cursor-pointer dark:hover:text-indigo-400 font-medium">Contact</Link>
        <Link to="faq" smooth={true} duration={500} className="text-gray-600 dark:text-gray-300 hover:cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">FAQ</Link>
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
        {isAuthenticated ?(
          <motion.button 
          onClick={() => navigate("/dashboard")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          Dashboard
        </motion.button>):(
          <motion.button 
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          Get Started
        </motion.button>)}
        
      </div>
    </div>
  </div>
</nav>

  );
}
