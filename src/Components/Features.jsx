import { FaLink, FaChartBar, FaLock, FaQrcode, FaGlobe, FaUserShield } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaLink className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Shorten Links",
      desc: "Easily shorten long URLs into clean, shareable links.",
    },
    {
      icon: <FaChartBar className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Analytics",
      desc: "Track clicks, traffic sources, and user engagement.",
    },
    {
      icon: <FaLock className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Secure Links",
      desc: "Protect your links with password encryption.",
    },
    {
      icon: <FaQrcode className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "QR Codes",
      desc: "Generate QR codes instantly for your short links.",
    },
    {
      icon: <FaGlobe className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Custom Domains",
      desc: "Brand your links with your own custom domain.",
    },
    {
      icon: <FaUserShield className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />,
      title: "Privacy",
      desc: "Control who accesses your shortened links.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 dark:text-white">
          Features
        </h2>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
                {f.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
