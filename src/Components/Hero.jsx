import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:pt-20 sm:pb-16 sm:px-6 lg:pt-28 lg:pb-20 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Heading + Logo */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex flex-col items-center justify-center gap-4">
            <span className="block text-gray-900 dark:text-white">
              Supercharge Your Links with
            </span>

            {/* Responsive Bitlink logo */}
            <span className="block w-full max-w-[220px] sm:max-w-[280px] md:max-w-[360px] lg:max-w-[420px] mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 250 100"
                className="w-full h-auto"
              >
                <defs>
                  <linearGradient
                    id="gradText"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4facfe" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00f2fe" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="gradIcon"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#43e97b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38f9d7" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* Icon: two chain links */}
                <g transform="translate(20,33) scale(0.6)">
                  <path
                    d="M30 40a15 15 0 0 1 0-30h25a15 15 0 0 1 0 30h-5"
                    fill="none"
                    stroke="url(#gradIcon)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M70 10a15 15 0 0 1 0 30H45a15 15 0 0 1 0-30h5"
                    fill="none"
                    stroke="url(#gradIcon)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </g>

                {/* Text */}
                <text
                  x="85"
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
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg md:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The most powerful URL shortener with advanced analytics, custom
            domains, and enterprise-grade security.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
