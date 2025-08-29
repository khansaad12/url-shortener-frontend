import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PieChart, Pie, Cell,
   Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const COLORS_LIGHT = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
const COLORS_DARK = ["#60A5FA", "#34D399", "#FBBF24", "#F87171", "#A78BFA"];

const Analytics = () => {
  const { short_url } = useParams();
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalClicks, setTotalClicks] = useState(0);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const isDark = document.documentElement.classList.contains("dark");
  const COLORS = isDark ? COLORS_DARK : COLORS_LIGHT;

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/analytics/${short_url}`, {
          withCredentials: true,
        });
        if (res.data.status === "success") {
          setAnalytics(res.data.data);
          setTotalClicks(res.data.clicks); // ✅ use backend clicks directly
        }
      } catch (error) {
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, [short_url]);

  // ✅ Unique Devices
  const deviceData = useMemo(() => Object.values(
    analytics.reduce((acc, a) => {
      const device = a.device || "Unknown";
      acc[device] = { name: device, value: 1 }; // always 1 for unique
      return acc;
    }, {})
  ), [analytics]);

  // ✅ Unique Browsers
  const browserData = useMemo(() => Object.values(
    analytics.reduce((acc, a) => {
      const browser = a.browser || "Unknown";
      acc[browser] = { name: browser, value: 1 };
      return acc;
    }, {})
  ), [analytics]);

  // ✅ Unique OS
  const osData = useMemo(() => Object.values(
    analytics.reduce((acc, a) => {
      const os = a.os || "Unknown";
      acc[os] = { name: os, value: 1 };
      return acc;
    }, {})
  ), [analytics]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 dark:border-blue-400" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 dark:text-gray-200 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Analytics for {short_url}</h1>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">Total Clicks</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalClicks}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">Unique Devices</h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{deviceData.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">Browsers</h3>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{browserData.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold">Operating Systems</h3>
          <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{osData.length}</p>
        </div>
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Devices */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Devices</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={deviceData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {deviceData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Browsers */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Browsers</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={browserData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {browserData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Operating Systems */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Operating Systems</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={osData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                {osData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
