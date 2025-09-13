import { useState } from "react";
import axios from "axios";
import Navbar from "../Components/MyNavbar";
import Hero from "../Components/Hero";
import UrlShortener from "../Components/UrlShortener";
import Features from "../Components/Features";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import FAQComponent from "../Components/Faq";
import ContactSupport from "../Components/Contact";

export default function LandingPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("shorten");
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/url/create`,
        { url },
        { withCredentials: true }
      );

      if (data.status === "success") {
        setShortUrl(data.short_url);
        setQrCode(data.qr_code);
      }
    } catch (error) {
      console.error("URL shortening failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQrCode = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Navbar always fixed at top for accessibility */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* URL Shortener Section */}
      <main className="flex-grow">
        <section id="shortener" className="px-4 sm:px-6 lg:px-8 py-12">
          <UrlShortener
            url={url}
            setUrl={setUrl}
            handleSubmit={handleSubmit}
            shortUrl={shortUrl}
            copied={copied}
            copyToClipboard={copyToClipboard}
            qrCode={qrCode}
            downloadQrCode={downloadQrCode}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            loading={loading}
          />
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 sm:px-6 lg:px-8 py-16">
          <Features />
        </section>

        {/* Call to Action */}
        <CTA />

       <section id="contact" className="py-8 sm:py-12 lg:py-16">
  <ContactSupport />
</section>

<section id="faq" className="py-8 sm:py-12 lg:py-16">
  <FAQComponent />
</section>
      </main>
<section id="footer">
  <Footer />
</section>
    </div>
  );
}
