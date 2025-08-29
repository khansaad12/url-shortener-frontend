export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} ShrtNinja. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</p>
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</p>
          <p className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</p>
        </div>
      </div>
    </footer>
  );
}
