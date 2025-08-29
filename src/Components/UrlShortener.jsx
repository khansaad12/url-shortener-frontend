import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck, FaCopy, FaQrcode, FaUserShield } from "react-icons/fa";

export default function UrlShortener({ url, setUrl, handleSubmit, shortUrl, copyToClipboard, copied, qrCode, downloadQrCode, activeTab, setActiveTab, loading }) {
  return (
   <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
  >
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setActiveTab("shorten")}
        className={`flex-1 py-4 px-6 ${
          activeTab === "shorten"
            ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        Shorten URL
      </button>
      <button
        onClick={() => setActiveTab("qr")}
        className={`flex-1 py-4 px-6 ${
          activeTab === "qr"
            ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        QR Code
      </button>
    </div>

    <div className="p-6 md:p-8">
      {activeTab === "shorten" ? (
        <>
          {/* Shorten URL form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long URL here"
                className="flex-1 px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center"
              >
                {loading ? (
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    Shorten <FaArrowRight className="ml-2" />
                  </>
                )}
              </motion.button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <FaUserShield className="text-indigo-500 dark:text-indigo-400" />{" "}
              <span>All links are encrypted and secure</span>
            </div>
          </form>

          {/* Short URL output */}
          <AnimatePresence>
            {shortUrl && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/40 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-medium truncate"
                  >
                    {shortUrl}
                  </a>
                  <motion.button
                    onClick={copyToClipboard}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-lg text-indigo-700 dark:text-indigo-400"
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
          </AnimatePresence>
        </>
      ) : (
        <div className="text-center">
          {!qrCode ? (
            <>
              <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <FaQrcode className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="mt-2 text-indigo-500 dark:text-indigo-400">
                Please Generate Short URL First.
              </p>
            </>
          ) : (
            <div>
              <img
                src={qrCode}
                alt="QR Code"
                className="w-48 h-48 mx-auto border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-800"
              />
              <button
                onClick={downloadQrCode}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-500"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  </motion.div>
</section>

  );
}
