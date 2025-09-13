import React from "react";

const ContactSupport = () => {
  return (
    <div className=" py-6  px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Contact Support
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            We're here to help you with any questions about our URL shortener
            service. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    support@urlshortener.com
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Typically responds within 1 hour
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    +92 317 6552463
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Mon-Fri, 9am-5pm GMT+5
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Shah Sikandar Road
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Dera Ghazi Khan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Support Hours
            </h2>

            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Monday - Friday
                </span>
                <span className="font-medium text-sm sm:text-base">
                  9:00 AM - 6:00 PM GMT+5
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Saturday
                </span>
                <span className="font-medium text-sm sm:text-base">
                  10:00 AM - 4:00 PM GMT+5
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between py-2 sm:py-3">
                <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  Sunday
                </span>
                <span className="font-medium text-sm sm:text-base">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
