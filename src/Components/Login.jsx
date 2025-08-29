import { useState } from 'react';
import { FaEnvelope, FaLock} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      const data = await axios.post(`${API_BASE_URL}/api/auth/login`,{
        email,
        password
      },
      {
        withCredentials : true
      }
    )
      if(data.data.status == "success"){
          console.log(data.data)
          navigate("/dashboard")
      }
    } catch (error) {
      console.log(error.response.data.message)
      setErrors(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToSignup = ()=>{
    navigate("/signup")
  }

  const SwitchToHome =()=>{
    navigate("/")
  } 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  className="w-full max-w-md"
>
  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 transition-colors duration-300">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account</p>
    </div>

    {/* Error Message */}
    {errors.message && (
      <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-lg text-sm">
        {errors.message}
      </div>
    )}

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaEnvelope className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${
              errors.email ? 'border-red-300 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="you@example.com"
          />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaLock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${
              errors.password ? 'border-red-300 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500`}
            placeholder="••••••••"
          />
        </div>
        {errors.password && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex justify-center items-center"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing In...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </div>
    </form>

    {/* Divider */}
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        
      </div>
    </div>

    {/* Footer Links */}
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{' '}
        <button
          onClick={handleToSignup}
          className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
        >
          Sign up
        </button>
      </p>
    </div>
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Go Back to Home?{' '}
        <button
          onClick={SwitchToHome}
          className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
        >
          Home
        </button>
      </p>
    </div>
  </div>
</motion.div>
</div>
  );
}