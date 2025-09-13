import React, { useState } from "react";

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the URL shortener work?",
      answer:
        "Our URL shortener takes long web addresses and converts them into shorter, more manageable links. When someone clicks the shortened link, they're redirected to the original URL through our service.",
    },
    {
      question: "Is there a limit to how many URLs I can shorten?",
      answer:
        "No, there's no limit! You can shorten as many URLs as you need. Our free plan allows unlimited link shortening with basic analytics.",
    },
    {
      question: "Can I track clicks on my shortened URLs?",
      answer:
        "Yes! Our service provides basic analytics that show you how many times each shortened link has been clicked.",
    },
    {
      question: "How long do shortened URLs remain active?",
      answer:
        "Shortened URLs created with our service remain active indefinitely. We've never deleted a link due to inactivity and have no plans to do so.",
    },
    {
      question: "Can I customize the shortened URLs?",
      answer:
        "Yes, we offer custom aliases. To create custom URLs, you need to create an account first, then you can generate branded links.",
    },
    {
      question: "Can I generate QR codes for my links?",
      answer:
        "Absolutely! Each shortened URL automatically comes with a downloadable QR code.",
    },
  ];

  return (
    <div className="py-4  px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            URL Shortener FAQ
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Find answers to common questions about our URL shortening service.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="flex justify-between items-center w-full px-4 sm:px-6 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-base sm:text-lg font-semibold pr-2 sm:pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 dark:bg-gray-700 ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 py-4">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
