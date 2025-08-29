import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="relative overflow-hidden">
  <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
        <span className="block text-gray-900 dark:text-white">
          Supercharge Your Links with
        </span>
        <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          ShrtNinja
        </span>
      </h1>
      <p className="mt-6 max-w-lg mx-auto text-xl text-gray-600 dark:text-gray-300">
        The most powerful URL shortener with advanced analytics, custom domains, and
        enterprise-grade security.
      </p>
    </motion.div>
  </div>
</section>

  );
}
