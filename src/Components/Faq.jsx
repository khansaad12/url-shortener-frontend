import React, { useState } from 'react';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the URL shortener work?",
      answer: "Our URL shortener takes long web addresses and converts them into shorter, more manageable links. When someone clicks the shortened link, they're redirected to the original URL through our service."
    },
    {
      question: "Is there a limit to how many URLs I can shorten?",
      answer: "No, there's no limit! You can shorten as many URLs as you need. Our free plan allows unlimited link shortening with basic analytics."
    },
    {
      question: "Can I track clicks on my shortened URLs?",
      answer: "Yes! Our service provides basic analytics that show you how many times each shortened link has been clicked"
    },
    {
      question: "How long do shortened URLs remain active?",
      answer: "Shortened URLs created with our service remain active indefinitely. We've never deleted a link due to inactivity and have no plans to do so."
    },
    {
      question: "Can I customize the shortened URLs?",
      answer: "Yes, we offer custom aliases . To create custom Url, you have to create account first then you create custom Urls ."
    },
    {
    question: "Can I generate QR codes for my links?",
    answer:
      "Absolutely! Each shortened URL automatically comes with a downloadable QR code.",
  },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">URL Shortener FAQ</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Find answers to common questions about our URL shortening service</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 dark:bg-gray-700 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
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