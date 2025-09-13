import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  FaCopy,
  FaTrash,
  FaQrcode,
  FaExternalLinkAlt,
  FaPlus,
  FaChartPie,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Transition from '../utils/Transition';
import { toast } from 'react-toastify';

const UrlDashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState(0);
  const [qrDialog, setQrDialog] = useState({ open: false, url: null });
  
  // Inline feedback for "Copied!"
  const [copiedId, setCopiedId] = useState(null);

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/url/my-urls`, {
          withCredentials: true,
        });

        if (res.data.status === 'success') {
          setUrls(res.data.data);
          setLinks(res.data.pagination);
        }
      } catch (error) {
        console.error('Error fetching URLs:', error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
   
    fetchData();
  }, []);

  const handleDelete = async (short_url) => {
    try {
     const data = await axios.delete(`${API_BASE_URL}/api/url/delete-url/${short_url}`,
      {
        withCredentials: true
      }
     )
     if (data.data.status === "success") {
        toast.success(data.data.message)
        fetchData()
     }
    } catch (error) {
      console.error('Error deleting URL:', error);
      toast.error(error.error)
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1200);
  };

  const downloadQrCode = (qrCode) => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 dark:text-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          My Shortened URLs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage all your shortened links in one place
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition hover:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Total Links
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{links.total}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition hover:shadow-lg">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Total Clicks
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {urls.reduce((total, url) => total + url.clicks, 0)}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <button
          onClick={() => navigate('/dashboard/create-url')}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow"
        >
          <FaPlus className="mr-2" />
          Create New
        </button>
      </div>

      {/* URLs Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {['Original URL', 'Short URL', 'Clicks', 'Actions'].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {urls.map((url) => {
                const shortLink = `https://${url.short_url}`;
                const copied = copiedId === url._id;

                return (
                  <tr
                    key={url._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-6 py-4 max-w-xs truncate" title={url.full_url}>
                      {url.full_url}
                    </td>

                    <td className="px-6 py-4">
                      <div className="relative flex items-center space-x-2">
                        <span className="text-sm text-blue-600 font-medium truncate" title={shortLink}>
                          {shortLink}
                        </span>
                        <button
                          onClick={() => copyToClipboard(shortLink, url._id)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          title="Copy to clipboard"
                        >
                          <FaCopy />
                        </button>

                        {/* Inline "Copied!" bubble */}
                        <Transition
                          show={copied} 
                          enterStart="opacity-0 translate-y-1"
                          enterEnd="opacity-100 translate-y-0"
                          leaveStart="opacity-100 translate-y-0"
                          leaveEnd="opacity-0 translate-y-1"
                        >
                          <span className=" px-2 py-1 text-xs rounded shadow bg-gray-700 text-white dark:bg-gray-100 dark:text-gray-900">
                            Copied!
                          </span>
                        </Transition>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {url.clicks}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">

{/* QR Code Button */}
<button
  onClick={() => setQrDialog({ open: true, url })}
  className="flex items-center justify-center w-10 h-10 
             rounded-full bg-gray-100 dark:bg-gray-700 
             text-gray-600 dark:text-gray-300 
             hover:bg-blue-100 dark:hover:bg-blue-800 
             hover:text-blue-600 dark:hover:text-blue-400 
             transition-all duration-200 transform hover:scale-110 shadow-sm"
  title="View QR Code"
>
  <FaQrcode className="text-lg" />
</button>

{/* Open URL Button */}
<button
  onClick={() => window.open(shortLink, "_blank")}
  className="flex items-center justify-center w-10 h-10 
             rounded-full bg-gray-100 dark:bg-gray-700 
             text-gray-600 dark:text-gray-300 
             hover:bg-green-100 dark:hover:bg-green-800 
             hover:text-green-600 dark:hover:text-green-400 
             transition-all duration-200 transform hover:scale-110 shadow-sm"
  title="Open URL"
>
  <FaExternalLinkAlt className="text-lg" />
</button>

{/* Delete Button */}
<button
  onClick={() => handleDelete(url.short_url)}
  className="flex items-center justify-center w-10 h-10 
             rounded-full bg-gray-100 dark:bg-gray-700 
             text-gray-600 dark:text-gray-300 
             hover:bg-red-100 dark:hover:bg-red-800 
             hover:text-red-600 dark:hover:text-red-400 
             transition-all duration-200 transform hover:scale-110 shadow-sm"
  title="Delete URL"
>
  <FaTrash className="text-lg" />
</button>

{/* Analytics Button (to keep consistent with others) */}
<button
  onClick={() => navigate(`/dashboard/analytics/${url.short_url}`)}
  className="flex items-center justify-center w-10 h-10 
             rounded-full bg-gray-100 dark:bg-gray-700 
             text-gray-600 dark:text-gray-300 
             hover:bg-purple-100 dark:hover:bg-purple-800 
             hover:text-purple-600 dark:hover:text-purple-400 
             transition-all duration-200 transform hover:scale-110 shadow-sm"
  title="View Analytics"
>
  <FaChartPie className="text-lg" />
</button>

                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* QR Code Modal */}
      <Transition
        show={qrDialog.open && !!qrDialog.url}
        enter="transition-opacity ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition-opacity ease-in duration-150"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setQrDialog({ open: false, url: null })}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg max-w-sm w-full p-6 shadow-xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4 text-center">
              QR Code
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src={qrDialog.url?.qr_code}
                alt="QR Code"
                className="w-48 h-48 rounded-md shadow"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-6">
              Scan this QR code to visit:
              <br />
              <span className="font-medium break-all">{qrDialog.url?.full_url}</span>
            </p>
            <div className="flex justify-evenly">
              <button
                onClick={() => setQrDialog({ open: false, url: null })}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
              <button
                onClick={()=>downloadQrCode(qrDialog.url?.qr_code)}
                className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 dark:hover:bg-emerald-600"
              >
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default UrlDashboard;
