import { useState, useEffect } from "react";
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
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('shorten');
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    setLoading(true);
    const data = await axios.post(`/api/url`, { url }, { withCredentials: true });
     console.log(data)
    if (data.data.status === "success") {
      console.log("hello")
      setShortUrl(data.data.short_url);
      setQrCode(data.data.qr_code);
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQrCode = () => {
    if (!qrCode) return;
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
  <Navbar />
  <Hero />
  <UrlShortener 
    url={url} setUrl={setUrl} handleSubmit={handleSubmit} 
    shortUrl={shortUrl} copied={copied} copyToClipboard={copyToClipboard}
    qrCode={qrCode} downloadQrCode={downloadQrCode}
    activeTab={activeTab} setActiveTab={setActiveTab} loading={loading}
  />
 <section name="features">
        <Features />
    </section>
  <CTA />
  <section name="contact">
        <ContactSupport />
    </section>
  <section name="faq">
        <FAQComponent />
    </section>
  <Footer />
</div>

  );
}
