import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCheck, FaCopy } from 'react-icons/fa';

const UrlShortenerForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const validateForm = () => {
    const newErrors = {};
    
    if (!originalUrl) {
      newErrors.originalUrl = 'URL is required';
    } else if (!isValidUrl(originalUrl)) {
      newErrors.originalUrl = 'Please enter a valid URL';
    }
    
    if (customUrl && !isValidCustomUrl(customUrl)) {
      newErrors.customUrl = 'Custom URL can only contain letters, numbers, and hyphens';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isValidCustomUrl = (url) => {
    const regex = /^[a-zA-Z0-9-]*$/;
    return regex.test(url);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
      setIsLoading(true);
      const data = await axios.post(`${API_BASE_URL}/api/url/create-url`,{
        url:originalUrl,
        customSlug:customUrl
      },{withCredentials: true})
      if (data.data.status === "success") {
        setShortenedUrl(data.data.short_url)
        setIsLoading(false)
      }
    }
    } catch (error) {
      setErrors(error.response.data)
      console.log(error)
      setIsLoading(false)
    }
    
  };

   const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            URL Shortener
          </h2>
          {errors.error && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/40 text-red-600 dark:text-red-400 rounded-lg text-sm">
        {errors.error}
        </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label 
                htmlFor="originalUrl" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Original URL *
              </label>
              <input
                id="originalUrl"
                type="text"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="https://example.com/very-long-url"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-colors duration-200 ${
                  errors.originalUrl 
                    ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
                    : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              />
              {errors.originalUrl && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.originalUrl}</p>
              )}
            </div>
            
            <div>
              <label 
                htmlFor="customUrl" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Custom URL (optional)
              </label>
              <div className="flex items-center">
                <span className="px-3 py-3 bg-gray-100 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-lg text-gray-500 dark:text-gray-400">
                  short.url/
                </span>
                <input
                  id="customUrl"
                  type="text"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="custom-alias"
                  className={`flex-1 px-4 py-3 rounded-r-lg border focus:ring-2 focus:outline-none transition-colors duration-200 ${
                    errors.customUrl 
                      ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-800' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-blue-200 dark:focus:ring-blue-800'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                />
              </div>
              {errors.customUrl && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.customUrl}</p>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Shortening...
                </div>
              ) : (
                'Shorten URL'
              )}
            </motion.button>
          </form>
          
          {shortenedUrl && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-colors duration-200"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Your shortened URL:</p>
              <div className="flex items-center">
                <input
                  type="text"
                  readOnly
                  value={shortenedUrl}
                  className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg text-blue-600 dark:text-blue-400 text-sm"
                />
                <motion.button
                                    onClick={copyToClipboard}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.75 }}
                                    className="ml-3 px-4 py-2 bg-white text-sm dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-lg text-indigo-700 dark:text-indigo-400"
                                  >
                                    {copied ? (
                                      <>
                                        <FaCheck className="mr-2 text-green-500" /> Copied!
                                      </>
                                    ) : (
                                      <>
                                        <FaCopy className="mr-2" /> Copy
                                      </>
                                    )}
                                  </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UrlShortenerForm;