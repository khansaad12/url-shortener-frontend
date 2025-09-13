import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck, FaCopy, FaQrcode, FaUserShield } from "react-icons/fa";

export default function UrlShortener({
  url,
  setUrl,
  handleSubmit,
  shortUrl,
  copyToClipboard,
  copied,
  qrCode,
  downloadQrCode,
  activeTab,
  setActiveTab,
  loading,
}) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 text-sm sm:text-base">
          <button
            onClick={() => setActiveTab("shorten")}
            className={`flex-1 py-3 sm:py-4 px-3 sm:px-6 transition ${
              activeTab === "shorten"
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium"
                : "text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            }`}
          >
            Shorten URL
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`flex-1 py-3 sm:py-4 px-3 sm:px-6 transition ${
              activeTab === "qr"
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 font-medium"
                : "text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            }`}
          >
            QR Code
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8">
          {activeTab === "shorten" ? (
            <>
              {/* Input + Button */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste your long URL here"
                    className="flex-1 px-4 sm:px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 text-sm sm:text-base"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="flex-shrink-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 sm:px-6 py-3 rounded-lg flex items-center justify-center font-medium text-sm sm:text-base"
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
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <FaUserShield className="text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                  <span>All links are encrypted and secure</span>
                </div>
              </form>

              {/* Shortened URL output */}
              <AnimatePresence>
                {shortUrl && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6"
                  >
                    <div className="p-4 sm:p-5 bg-indigo-50 dark:bg-indigo-900/40 rounded-lg flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                      <a
                        href={shortUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 font-medium truncate max-w-full text-sm sm:text-base"
                      >
                        {shortUrl}
                      </a>
                      <motion.button
                        onClick={copyToClipboard}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 rounded-lg text-indigo-700 dark:text-indigo-400 flex items-center text-sm sm:text-base"
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
                  <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <FaQrcode className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-indigo-500 dark:text-indigo-400">
                    Please Generate Short URL First.
                  </p>
                </>
              ) : (
                <div>
                  <img
                    src={qrCode}
                    alt="QR Code"
                    className="w-40 h-40 sm:w-48 sm:h-48 mx-auto border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-white dark:bg-gray-800"
                  />
                  <button
                    onClick={downloadQrCode}
                    className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-500 text-sm sm:text-base"
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
