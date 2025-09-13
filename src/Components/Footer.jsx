export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400 space-y-4 md:space-y-0">
        
        {/* Left side - Copyright + Logo */}
        <p className="flex flex-col sm:flex-row items-center sm:space-x-2 text-sm sm:text-base text-center sm:text-left">
          <span>© {new Date().getFullYear()}</span>
          <span className="inline-block h-8 sm:h-10 my-2 sm:my-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 100"
              className="h-full w-auto"
            >
              <defs>
                <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4facfe" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00f2fe" stopOpacity="1" />
                </linearGradient>
              </defs>

              <text
                x="10"
                y="65"
                fontFamily="Segoe UI, Helvetica, Arial, sans-serif"
                fontSize="40"
                fontWeight="700"
                fill="url(#gradText)"
              >
                Bitlink
              </text>
            </svg>
          </span>
          <span>All rights reserved.</span>
        </p>

        {/* Right side - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm sm:text-base">
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition">
            Privacy Policy
          </p>
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition">
            Terms
          </p>
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition">
            Contact
          </p>
        </div>
      </div>
    </footer>
  );
}
