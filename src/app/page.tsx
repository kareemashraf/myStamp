"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import MaterialIcon from "@/components/MaterialIcon";
import StarRating from "@/components/StarRating";
import PricingCard, { type PricingPlan } from "@/components/PricingCard";

const features = [
  { icon: "loyalty", title: "Digital Loyalty", desc: "Punch cards that customers can't lose." },
  { icon: "confirmation_number", title: "Smart Coupons", desc: "Dynamic discounts based on behavior." },
  { icon: "card_giftcard", title: "Gift Cards", desc: "Physical & digital gift card solutions." },
  { icon: "query_stats", title: "Deep Analytics", desc: "Track ROI and customer lifetime value." },
  { icon: "sms", title: "SMS Marketing", desc: "Direct engagement via text alerts." },
  { icon: "groups", title: "CRM Tools", desc: "Know exactly who your regulars are." },
  { icon: "schedule", title: "Automations", desc: "Set it and forget it workflows." },
  { icon: "devices", title: "Multi-Channel", desc: "Works on web, app, and in-store." },
  { icon: "security", title: "Fraud Protection", desc: "Advanced security for every scan." },
  { icon: "api", title: "Open API", desc: "Integrate with your existing POS." },
];

const steps = [
  { num: 1, title: "Create", desc: "Set up your loyalty rules and rewards in seconds through our intuitive merchant portal." },
  { num: 2, title: "Scan", desc: "Customers scan a QR code at checkout or use their phone to identify themselves instantly." },
  { num: 3, title: "Earn", desc: "Points and rewards are automatically calculated and added to their digital wallet." },
  { num: 4, title: "Repeat", desc: "Send targeted notifications to bring them back for their next visit." },
];

const testimonials = [
  {
    quote: "Our customer retention jumped by 40% in just two months. The ease of scanning at checkout is a game changer for our baristas.",
    name: "Sarah Chen",
    title: "Owner, Brew & Bean",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgXx__txFOC7zPtArRlxMnnz-jrv6Ezqm6eglHoDZ9XoCC_5wHL7-mhfMEblkt0vk_LuZJ9qBga32AeDCxYaZmioi1GCA8FN8V6Jx47n5SDGs4eXIFeQ_0hMlAAlQh8gjaMPDwfOAKIorFtBb8O-LOjsS8PddZsWCNwn7HfTuw1TOWTucAhY1YRj31mdeRGzXvbkjMgwuvUy70W2lsXFolHD2fG8wSbSwDkRr0OjBmuIsFTGUiJpTQ",
  },
  {
    quote: "Finally, a digital loyalty solution that isn't clunky. The automated SMS coupons bring people back on our slowest days.",
    name: "Marcus Thorne",
    title: "Founder, Crust & Crumb",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkDwpzPWwmQkgNhE70USbeE_ueJUUNaJtMnU3kq0ac6Kw1URkpAyAoOFbqyGJU_S4y_Uw-NRGBPmz5bf9BD-VJ8qxbo1i1_uDc6fqrZ9KeNT3QLVmLuxNqQRzBNsZPbJ94LT7XaOW_x2qAF3gbuTxxNas3BE3CGNlxQXa8McQLSne_hofZMcSCvWA0pgfdg4QwKa1pp1mC93W-RDlYYeeLGQeLr5RFT5wr9-PHpRSXZBw0Sry5tFnl",
  },
  {
    quote: "The analytics dashboard is addictive. Seeing the direct ROI of our gift card campaigns has helped us scale to 3 locations.",
    name: "Elena Rodriguez",
    title: "CEO, Verde Lifestyle",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dMlLYJfDQtcNIYNu_W8ZSB-hUeC9pk82IFCydwq7SGtCd4cU6BkF01yzbU20UKjmgxfIzpDeSvEWSzjRai1HwA49_ZuA6iGa5FxP3Wwh5sFn4puKMcrIyhV72tQC1YB7sXpYZJtMw3gSL8GDbyTy8rAE_CeqI_M16sgmUP0PZJgN8p1TiB4GcM1UKGq_xpAJCKaSbPEEoxSSYssvoanpP-aqrHyEOyMcasKMh1LtzLjGqVrE_vF6",
  },
];

const pricingPlans: PricingPlan[] = [
  { name: "STARTER", price: "$49", period: "/mo", features: ["Up to 500 customers", "Basic Loyalty", "Standard Support"], cta: "Get Started", ctaHref: "/register", popular: false },
  { name: "PRO", price: "$99", period: "/mo", features: ["Unlimited customers", "Advanced Automation", "Priority SMS Support", "POS Integration"], cta: "Start 14-Day Trial", ctaHref: "/register", popular: true },
  { name: "ENTERPRISE", price: "Custom", period: "", features: ["Multi-location support", "Custom API access", "Dedicated Account Manager"], cta: "Contact Sales", ctaHref: "/contact", popular: false },
];

const faqs = [
  { q: "Do customers need to download an app?", a: "No! Customers can use our mobile-friendly web app or add their loyalty card to Apple/Google Wallet. Of course, a native app is also available for the best experience." },
  { q: "Does it integrate with my POS system?", a: "Yes! We integrate with major systems like Square, Toast, Clover, and Shopify. We also offer an API for custom solutions." },
  { q: "How long does setup take?", a: "You can be live in under 15 minutes. Just upload your logo, set your reward rules, and you're ready to start scanning." },
];

export default function XPage() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleParallax = useCallback(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    if (!hero || !bg) return;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const scrolled = -rect.top;
    const rate = scrolled * 0.4;
    bg.style.transform = `translate3d(0, ${rate}px, 0)`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();
    return () => window.removeEventListener("scroll", handleParallax);
  }, [handleParallax]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-[#0b1326] transition-colors duration-300">
      <Navbar />

      <main>
        {/* ─── Hero ─── */}
        <section
          ref={heroRef}
          className="relative flex items-center bg-surface dark:bg-[#0b1326] overflow-hidden"
          style={{ minHeight: "100vh" }}
        >
          {/* Subtle background pattern */}
          <div
            ref={bgRef}
            className="absolute z-0 will-change-transform opacity-30"
            style={{
              top: "-20%",
              left: "-5%",
              right: "-5%",
              bottom: "-20%",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/8 via-white/50 to-[#f8f9fb]/90 dark:from-[#0a0c14]/8 dark:via-[#0a0c14]/60 dark:to-[#0a0c14]/90" />

          <div className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10 py-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="text-[blue] dark:text-white animate-fade-in-up text-xs font-medium tracking-[0.08em] hover:text-blue-600 dark:hover:text-blue-400 bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full mb-8 inline-block border border-indigo-500 font-[family-name:var(--font-mono)]">
              THE NEXT GENERATION OF LOYALTY
            </span>
            <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#191b23] dark:text-white mb-6 max-w-4xl mx-auto tracking-tight leading-[1.08] font-[family-name:var(--font-heading)]">
              Turn Every Customer Into a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Regular.
              </span>
            </h1>
            <p className="text-[#646464] dark:text-white animate-fade-in-up-delay-2 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Power your growth with a digital loyalty ecosystem. Launch rewards,
              manage coupons, and engage customers with premium automation.
            </p>
              <div className="animate-fade-in-up-delay-2 flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white dark:bg-white/10 text-[#004ac6] dark:text-blue-400 border border-[#004ac6]/20 dark:border-blue-400/20 px-6 py-3 rounded-xl font-semibold hover:bg-[#f3f3fe] dark:hover:bg-white/20 transition-all"
                >
                  Book Demo
                </Link>
              </div>
              {/* Download Badges */}
              <div className="flex flex-wrap gap-3 pt-4">
              <a href="#" target="_blank" rel="noreferrer noopener" className="inline-flex">
                <svg width="1000" viewBox="0 0 180 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                  <path d="M179 46.0029C179 48.774 176.709 51.0187 173.874 51.0187H6.13243C3.2995 51.0187 1 48.774 1 46.0029V6.00333C1 3.23349 3.2995 0.980957 6.13243 0.980957H173.873C176.709 0.980957 178.999 3.23349 178.999 6.00333L179 46.0029Z" fill="black"></path>
                  <path d="M173.333 1.04162C176.42 1.04162 178.932 3.4905 178.932 6.5V45.5C178.932 48.5095 176.42 50.9584 173.333 50.9584H6.66667C3.58 50.9584 1.06833 48.5095 1.06833 45.5V6.5C1.06833 3.4905 3.58 1.04162 6.66667 1.04162H173.333ZM173.333 2.74817e-06H6.66667C3.00167 2.74817e-06 0 2.92663 0 6.5V45.5C0 49.0734 3.00167 52 6.66667 52H173.333C176.998 52 180 49.0734 180 45.5V6.5C180 2.92663 176.998 2.74817e-06 173.333 2.74817e-06Z" fill="#A6A6A6"></path>
                  <path d="M40.1714 25.7191C40.1328 21.5292 43.6901 19.4908 43.8528 19.3959C41.8381 16.532 38.7154 16.1407 37.6181 16.1095C34.9954 15.8404 32.4514 17.6396 31.1154 17.6396C29.7528 17.6396 27.6954 16.1355 25.4781 16.1797C22.6248 16.2226 19.9554 17.8333 18.4914 20.3345C15.4701 25.4344 17.7234 32.9289 20.6181 37.0512C22.0661 39.0701 23.7581 41.3243 25.9728 41.245C28.1394 41.1579 28.9488 39.8982 31.5634 39.8982C34.1541 39.8982 34.9141 41.245 37.1728 41.1943C39.4981 41.1579 40.9621 39.1663 42.3594 37.1292C44.0328 34.8152 44.7048 32.5363 44.7314 32.4193C44.6768 32.4011 40.2154 30.741 40.1714 25.7191Z" fill="white"></path>
                  <path d="M35.9048 13.3977C37.0701 11.9768 37.8674 10.0437 37.6461 8.08203C35.9594 8.15483 33.8501 9.21953 32.6354 10.6092C31.5608 11.8338 30.6008 13.841 30.8488 15.7286C32.7434 15.8664 34.6888 14.7965 35.9048 13.3977Z" fill="white"></path>
                  <path d="M71.5269 40.9552H68.4989L66.8402 35.8735H61.0749L59.4949 40.9552H56.5469L62.2589 23.6548H65.7869L71.5269 40.9552ZM66.3402 33.7415L64.8402 29.224C64.6815 28.7625 64.3842 27.6757 63.9455 25.9649H63.8922C63.7175 26.7007 63.4362 27.7875 63.0495 29.224L61.5762 33.7415H66.3402Z" fill="white"></path>
                  <path d="M86.2159 34.5647C86.2159 36.6863 85.6279 38.3633 84.4519 39.5944C83.3985 40.6903 82.0905 41.2376 80.5292 41.2376C78.8439 41.2376 77.6332 40.6474 76.8959 39.467H76.8425V46.0385H73.9999V32.5874C73.9999 31.2536 73.9639 29.8847 73.8945 28.4807H76.3945L76.5532 30.458H76.6065C77.5545 28.9682 78.9932 28.2246 80.9239 28.2246C82.4332 28.2246 83.6932 28.8057 84.7012 29.9692C85.7119 31.134 86.2159 32.6654 86.2159 34.5647ZM83.3199 34.6661C83.3199 33.4519 83.0399 32.4509 82.4772 31.6631C81.8625 30.8415 81.0372 30.4307 80.0025 30.4307C79.3012 30.4307 78.6639 30.6595 78.0945 31.1106C77.5239 31.5656 77.1505 32.1597 76.9759 32.8955C76.8879 33.2387 76.8439 33.5195 76.8439 33.7405V35.8205C76.8439 36.7279 77.1292 37.4936 77.6999 38.1189C78.2705 38.7442 79.0119 39.0562 79.9239 39.0562C80.9945 39.0562 81.8279 38.6532 82.4239 37.8498C83.0212 37.0451 83.3199 35.9843 83.3199 34.6661Z" fill="white"></path>
                  <path d="M100.931 34.5647C100.931 36.6863 100.343 38.3633 99.166 39.5944C98.114 40.6903 96.806 41.2376 95.2447 41.2376C93.5593 41.2376 92.3487 40.6474 91.6127 39.467H91.5593V46.0385H88.7167V32.5874C88.7167 31.2536 88.6807 29.8847 88.6113 28.4807H91.1113L91.27 30.458H91.3233C92.27 28.9682 93.7087 28.2246 95.6407 28.2246C97.1487 28.2246 98.4087 28.8057 99.4193 29.9692C100.426 31.134 100.931 32.6654 100.931 34.5647ZM98.0353 34.6661C98.0353 33.4519 97.754 32.4509 97.1913 31.6631C96.5767 30.8415 95.754 30.4307 94.718 30.4307C94.0153 30.4307 93.3793 30.6595 92.8087 31.1106C92.238 31.5656 91.866 32.1597 91.6913 32.8955C91.6047 33.2387 91.5593 33.5195 91.5593 33.7405V35.8205C91.5593 36.7279 91.8447 37.4936 92.4127 38.1189C92.9833 38.7429 93.7247 39.0562 94.6393 39.0562C95.71 39.0562 96.5433 38.6532 97.1393 37.8498C97.7367 37.0451 98.0353 35.9843 98.0353 34.6661Z" fill="white"></path>
                  <path d="M117.385 36.1037C117.385 37.5753 116.861 38.7726 115.809 39.6969C114.653 40.707 113.044 41.2114 110.976 41.2114C109.066 41.2114 107.536 40.8526 106.377 40.1337L107.036 37.8236C108.284 38.5594 109.653 38.9286 111.145 38.9286C112.216 38.9286 113.049 38.692 113.648 38.2214C114.244 37.7508 114.541 37.119 114.541 36.3312C114.541 35.6292 114.296 35.0377 113.804 34.558C113.314 34.0783 112.497 33.6324 111.356 33.2203C108.249 32.0906 106.697 30.4357 106.697 28.2595C106.697 26.8373 107.241 25.6712 108.33 24.7638C109.416 23.8551 110.864 23.4014 112.674 23.4014C114.289 23.4014 115.63 23.6757 116.701 24.223L115.99 26.4824C114.99 25.952 113.86 25.6868 112.594 25.6868C111.594 25.6868 110.813 25.9273 110.253 26.4057C109.78 26.8334 109.542 27.3547 109.542 27.9722C109.542 28.656 109.813 29.2215 110.357 29.6661C110.83 30.0769 111.69 30.5215 112.938 31.0012C114.465 31.6005 115.586 32.3012 116.308 33.1046C117.026 33.9054 117.385 34.9077 117.385 36.1037Z" fill="white"></path>
                  <path d="M126.784 30.5604H123.651V36.6171C123.651 38.1576 124.203 38.9272 125.31 38.9272C125.818 38.9272 126.239 38.8843 126.572 38.7985L126.651 40.9032C126.091 41.1073 125.354 41.21 124.44 41.21C123.318 41.21 122.44 40.8759 121.807 40.209C121.176 39.5408 120.859 38.4202 120.859 36.8459V30.5578H118.992V28.4778H120.859V26.1937L123.651 25.3721V28.4778H126.784V30.5604Z" fill="white"></path>
                  <path d="M140.921 34.6151C140.921 36.5326 140.358 38.1069 139.235 39.338C138.058 40.6055 136.495 41.2373 134.547 41.2373C132.67 41.2373 131.175 40.6302 130.061 39.416C128.946 38.2018 128.389 36.6691 128.389 34.8218C128.389 32.8887 128.962 31.3053 130.113 30.0742C131.261 28.8418 132.81 28.2256 134.758 28.2256C136.635 28.2256 138.146 28.8327 139.286 30.0482C140.377 31.2273 140.921 32.7496 140.921 34.6151ZM137.971 34.7048C137.971 33.5543 137.719 32.5676 137.209 31.7447C136.613 30.7489 135.761 30.2523 134.657 30.2523C133.514 30.2523 132.646 30.7502 132.05 31.7447C131.539 32.5689 131.287 33.5712 131.287 34.7568C131.287 35.9073 131.539 36.894 132.05 37.7156C132.665 38.7114 133.523 39.208 134.631 39.208C135.717 39.208 136.569 38.701 137.183 37.6896C137.707 36.8511 137.971 35.854 137.971 34.7048Z" fill="white"></path>
                  <path d="M150.162 30.9182C149.88 30.8675 149.58 30.8415 149.266 30.8415C148.266 30.8415 147.492 31.2094 146.948 31.9465C146.475 32.5965 146.238 33.4181 146.238 34.41V40.9555H143.396L143.423 32.4093C143.423 30.9715 143.387 29.6624 143.316 28.482H145.792L145.896 30.8688H145.975C146.275 30.0485 146.748 29.3881 147.396 28.8928C148.03 28.4469 148.714 28.2246 149.451 28.2246C149.714 28.2246 149.951 28.2428 150.162 28.2753V30.9182Z" fill="white"></path>
                  <path d="M162.875 34.1274C162.875 34.624 162.841 35.0426 162.771 35.3845H154.243C154.276 36.6169 154.688 37.5594 155.48 38.2094C156.199 38.7905 157.128 39.0817 158.269 39.0817C159.532 39.0817 160.684 38.8854 161.72 38.4915L162.165 40.4155C160.955 40.9303 159.525 41.1864 157.876 41.1864C155.892 41.1864 154.335 40.617 153.201 39.4795C152.071 38.342 151.504 36.8145 151.504 34.8983C151.504 33.0172 152.031 31.4507 153.085 30.2014C154.189 28.8676 155.681 28.2007 157.559 28.2007C159.403 28.2007 160.799 28.8676 161.747 30.2014C162.497 31.2609 162.875 32.5713 162.875 34.1274ZM160.164 33.4085C160.183 32.5869 159.997 31.8771 159.612 31.2778C159.12 30.5069 158.364 30.1221 157.347 30.1221C156.417 30.1221 155.661 30.4978 155.084 31.2518C154.611 31.8511 154.329 32.57 154.243 33.4072H160.164V33.4085Z" fill="white"></path>
                  <path d="M65.3997 13.0118C65.3997 14.5419 64.9291 15.6937 63.989 16.4672C63.1184 17.1809 61.881 17.5384 60.2784 17.5384C59.4837 17.5384 58.8037 17.5046 58.2344 17.437V9.0767C58.977 8.9597 59.777 8.8999 60.641 8.8999C62.1677 8.8999 63.3184 9.2236 64.0944 9.871C64.9637 10.6029 65.3997 11.6494 65.3997 13.0118ZM63.9264 13.0495C63.9264 12.0576 63.657 11.2971 63.1184 10.7667C62.5797 10.2376 61.793 9.9724 60.757 9.9724C60.317 9.9724 59.9424 10.001 59.6317 10.0608V16.4165C59.8037 16.4425 60.1184 16.4542 60.5757 16.4542C61.645 16.4542 62.4704 16.1643 63.0517 15.5845C63.6331 15.0047 63.9264 14.1597 63.9264 13.0495Z" fill="white"></path>
                  <path d="M73.2126 14.3482C73.2126 15.2907 72.9366 16.0629 72.3846 16.6687C71.806 17.2914 71.0393 17.6021 70.082 17.6021C69.1593 17.6021 68.4246 17.3044 67.8766 16.7064C67.33 16.1097 67.0566 15.357 67.0566 14.4496C67.0566 13.5006 67.338 12.7219 67.9033 12.1174C68.4686 11.5129 69.2286 11.21 70.186 11.21C71.1086 11.21 71.85 11.5077 72.4113 12.1044C72.9446 12.6842 73.2126 13.433 73.2126 14.3482ZM71.7633 14.3924C71.7633 13.8269 71.638 13.342 71.3886 12.9377C71.0953 12.4489 70.678 12.2045 70.1353 12.2045C69.574 12.2045 69.1473 12.4489 68.854 12.9377C68.6033 13.342 68.4793 13.8347 68.4793 14.4171C68.4793 14.9826 68.6046 15.4675 68.854 15.8718C69.1566 16.3606 69.578 16.605 70.122 16.605C70.6553 16.605 71.074 16.3567 71.3753 15.8588C71.634 15.4467 71.7633 14.9579 71.7633 14.3924Z" fill="white"></path>
                  <path d="M83.6867 11.3345L81.7201 17.4627H80.4401L79.6254 14.8016C79.4187 14.1373 79.2507 13.4769 79.1201 12.8217H79.0947C78.9734 13.4951 78.8054 14.1542 78.5894 14.8016L77.7241 17.4627H76.4294L74.5801 11.3345H76.0161L76.7267 14.2478C76.8987 14.9368 77.0401 15.5933 77.1534 16.2147H77.1787C77.2827 15.7025 77.4547 15.0499 77.6974 14.2608L78.5894 11.3358H79.7281L80.5827 14.1984C80.7894 14.8965 80.9574 15.5686 81.0867 16.216H81.1254C81.2201 15.5855 81.3627 14.9134 81.5521 14.1984L82.3147 11.3358H83.6867V11.3345Z" fill="white"></path>
                  <path d="M90.9312 17.463H89.5339V13.953C89.5339 12.8714 89.1125 12.3306 88.2672 12.3306C87.8525 12.3306 87.5179 12.4788 87.2579 12.7765C87.0005 13.0742 86.8699 13.4252 86.8699 13.8269V17.4617H85.4725V13.0859C85.4725 12.5477 85.4552 11.964 85.4219 11.3322H86.6499L86.7152 12.2903H86.7539C86.9165 11.9926 87.1592 11.7469 87.4779 11.5506C87.8565 11.3218 88.2805 11.2061 88.7445 11.2061C89.3312 11.2061 89.8192 11.3907 90.2072 11.7612C90.6899 12.2149 90.9312 12.8922 90.9312 13.7918V17.463Z" fill="white"></path>
                  <path d="M94.7847 17.463H93.3887V8.52295H94.7847V17.463Z" fill="white"></path>
                  <path d="M103.01 14.3482C103.01 15.2907 102.734 16.0629 102.182 16.6687C101.603 17.2914 100.835 17.6021 99.8789 17.6021C98.9549 17.6021 98.2202 17.3044 97.6735 16.7064C97.1268 16.1097 96.8535 15.357 96.8535 14.4496C96.8535 13.5006 97.1349 12.7219 97.7002 12.1174C98.2655 11.5129 99.0255 11.21 99.9815 11.21C100.906 11.21 101.646 11.5077 102.208 12.1044C102.742 12.6842 103.01 13.433 103.01 14.3482ZM101.559 14.3924C101.559 13.8269 101.434 13.342 101.184 12.9377C100.892 12.4489 100.474 12.2045 99.9322 12.2045C99.3695 12.2045 98.9428 12.4489 98.6508 12.9377C98.4002 13.342 98.2762 13.8347 98.2762 14.4171C98.2762 14.9826 98.4015 15.4675 98.6508 15.8718C98.9535 16.3606 99.3749 16.605 99.9189 16.605C100.452 16.605 100.87 16.3567 101.171 15.8588C101.431 15.4467 101.559 14.9579 101.559 14.3924Z" fill="white"></path>
                  <path d="M109.773 17.463H108.519L108.415 16.7571H108.376C107.947 17.32 107.335 17.6021 106.54 17.6021C105.947 17.6021 105.467 17.4162 105.105 17.047C104.777 16.7116 104.613 16.2943 104.613 15.799C104.613 15.0502 104.933 14.4795 105.577 14.0843C106.22 13.6891 107.124 13.4954 108.288 13.5045V13.3901C108.288 12.5828 107.853 12.1798 106.983 12.1798C106.363 12.1798 105.816 12.3319 105.344 12.6335L105.06 11.7391C105.644 11.3868 106.365 11.21 107.216 11.21C108.859 11.21 109.683 12.055 109.683 13.745V16.0018C109.683 16.6141 109.713 17.1016 109.773 17.463ZM108.323 15.357V14.4119C106.781 14.3859 106.011 14.798 106.011 15.6469C106.011 15.9667 106.099 16.2059 106.279 16.3658C106.459 16.5257 106.688 16.605 106.961 16.605C107.268 16.605 107.555 16.5101 107.816 16.3216C108.079 16.1318 108.24 15.8913 108.3 15.5962C108.315 15.5299 108.323 15.4493 108.323 15.357Z" fill="white"></path>
                  <path d="M117.713 17.463H116.473L116.408 16.4789H116.369C115.973 17.2277 115.298 17.6021 114.35 17.6021C113.593 17.6021 112.962 17.3123 112.462 16.7324C111.962 16.1526 111.713 15.3999 111.713 14.4756C111.713 13.4837 111.984 12.6803 112.528 12.0667C113.054 11.4947 113.7 11.2087 114.468 11.2087C115.312 11.2087 115.902 11.4856 116.238 12.0407H116.265V8.52295H117.664V15.812C117.664 16.4087 117.68 16.9586 117.713 17.463ZM116.265 14.8786V13.8568C116.265 13.68 116.252 13.537 116.226 13.4278C116.148 13.1002 115.978 12.8246 115.721 12.6023C115.461 12.38 115.148 12.2682 114.786 12.2682C114.265 12.2682 113.857 12.4697 113.557 12.874C113.26 13.2783 113.109 13.7944 113.109 14.4249C113.109 15.0307 113.252 15.5221 113.538 15.9004C113.841 16.3034 114.249 16.5049 114.76 16.5049C115.218 16.5049 115.585 16.3372 115.864 16.0005C116.133 15.6898 116.265 15.3154 116.265 14.8786Z" fill="white"></path>
                  <path d="M129.664 14.3482C129.664 15.2907 129.388 16.0629 128.836 16.6687C128.257 17.2914 127.492 17.6021 126.533 17.6021C125.612 17.6021 124.877 17.3044 124.328 16.7064C123.781 16.1097 123.508 15.357 123.508 14.4496C123.508 13.5006 123.789 12.7219 124.354 12.1174C124.92 11.5129 125.68 11.21 126.638 11.21C127.56 11.21 128.302 11.5077 128.862 12.1044C129.396 12.6842 129.664 13.433 129.664 14.3482ZM128.216 14.3924C128.216 13.8269 128.09 13.342 127.841 12.9377C127.546 12.4489 127.13 12.2045 126.586 12.2045C126.026 12.2045 125.6 12.4489 125.305 12.9377C125.054 13.342 124.93 13.8347 124.93 14.4171C124.93 14.9826 125.056 15.4675 125.305 15.8718C125.608 16.3606 126.029 16.605 126.573 16.605C127.106 16.605 127.526 16.3567 127.828 15.8588C128.085 15.4467 128.216 14.9579 128.216 14.3924Z" fill="white"></path>
                  <path d="M137.178 17.463H135.782V13.953C135.782 12.8714 135.361 12.3306 134.514 12.3306C134.099 12.3306 133.765 12.4788 133.506 12.7765C133.247 13.0742 133.118 13.4252 133.118 13.8269V17.4617H131.719V13.0859C131.719 12.5477 131.703 11.964 131.67 11.3322H132.897L132.962 12.2903H133.001C133.165 11.9926 133.407 11.7469 133.725 11.5506C134.105 11.3218 134.527 11.2061 134.993 11.2061C135.578 11.2061 136.066 11.3907 136.454 11.7612C136.938 12.2149 137.178 12.8922 137.178 13.7918V17.463Z" fill="white"></path>
                  <path d="M146.582 12.3553H145.043V15.3323C145.043 16.0889 145.317 16.4672 145.858 16.4672C146.109 16.4672 146.317 16.4464 146.481 16.4035L146.517 17.437C146.241 17.5384 145.878 17.5891 145.431 17.5891C144.879 17.5891 144.45 17.4253 144.139 17.0977C143.827 16.7701 143.673 16.2189 143.673 15.4454V12.3553H142.754V11.3348H143.673V10.2116L145.042 9.80859V11.3335H146.581V12.3553H146.582Z" fill="white"></path>
                  <path d="M153.978 17.463H152.58V13.979C152.58 12.8805 152.158 12.3306 151.314 12.3306C150.666 12.3306 150.224 12.6491 149.981 13.2861C149.94 13.42 149.916 13.5838 149.916 13.7762V17.4618H148.52V8.52295H149.916V12.2162H149.942C150.382 11.5441 151.013 11.2087 151.83 11.2087C152.409 11.2087 152.888 11.3933 153.268 11.7638C153.741 12.2253 153.978 12.9117 153.978 13.8191V17.463Z" fill="white"></path>
                  <path d="M161.609 14.1089C161.609 14.3533 161.591 14.5587 161.557 14.7264H157.367C157.385 15.3322 157.585 15.7937 157.973 16.1135C158.328 16.3995 158.785 16.5425 159.345 16.5425C159.965 16.5425 160.531 16.4463 161.04 16.2526L161.259 17.199C160.663 17.4512 159.961 17.5773 159.149 17.5773C158.176 17.5773 157.409 17.2978 156.855 16.7388C156.297 16.1798 156.021 15.4297 156.021 14.4885C156.021 13.5642 156.279 12.7946 156.797 12.181C157.339 11.5258 158.071 11.1982 158.995 11.1982C159.899 11.1982 160.585 11.5258 161.049 12.181C161.424 12.701 161.609 13.3445 161.609 14.1089ZM160.276 13.7566C160.287 13.3523 160.195 13.0039 160.005 12.7101C159.763 12.3318 159.393 12.142 158.893 12.142C158.437 12.142 158.065 12.3266 157.781 12.6971C157.549 12.9922 157.412 13.3445 157.367 13.7566H160.276Z" fill="white"></path>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer noopener" className="inline-flex">
                <svg width="1000" viewBox="0 0 180 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                  <path d="M173.095 52H6.6575C2.99754 52 0 49.0734 0 45.5V6.5C0 2.92663 2.99754 2.74817e-06 6.6575 2.74817e-06H173.095C176.755 2.74817e-06 179.753 2.92663 179.753 6.5V45.5C179.753 49.0734 176.755 52 173.095 52Z" fill="black"></path>
                  <path d="M173.095 1.04163C176.177 1.04163 178.686 3.4905 178.686 6.5V45.5C178.686 48.5095 176.177 50.9584 173.095 50.9584H6.6575C3.57508 50.9584 1.06686 48.5095 1.06686 45.5V6.5C1.06686 3.4905 3.57508 1.04163 6.6575 1.04163H173.095ZM173.095 2.74817e-06H6.6575C2.99754 2.74817e-06 0 2.92663 0 6.5V45.5C0 49.0734 2.99754 52 6.6575 52H173.095C176.755 52 179.753 49.0734 179.753 45.5V6.5C179.753 2.92663 176.755 2.74817e-06 173.095 2.74817e-06Z" fill="#A6A6A6"></path>
                  <path d="M63.1361 13.3167C63.1361 14.4022 62.8032 15.2716 62.1475 15.9199C61.3935 16.6886 60.4115 17.0753 59.2082 17.0753C58.0581 17.0753 57.0761 16.6821 56.2705 15.9069C55.4633 15.1204 55.0605 14.1552 55.0605 12.9998C55.0605 11.8444 55.4633 10.8792 56.2705 10.0992C57.0761 9.31757 58.0581 8.92432 59.2082 8.92432C59.7807 8.92432 60.3266 9.03969 60.8476 9.25419C61.3669 9.47032 61.7896 9.76282 62.0959 10.1236L61.4002 10.8093C60.8659 10.1934 60.1386 9.88957 59.2082 9.88957C58.3693 9.88957 57.642 10.1756 57.0245 10.7524C56.4137 11.3309 56.1074 12.0801 56.1074 12.9998C56.1074 13.9196 56.4137 14.6752 57.0245 15.2537C57.642 15.8241 58.3693 16.1166 59.2082 16.1166C60.0986 16.1166 60.8476 15.8241 61.4384 15.2472C61.8279 14.8653 62.0493 14.3388 62.1075 13.6661H59.2082V12.7268H63.0762C63.1228 12.9299 63.1361 13.1266 63.1361 13.3167V13.3167Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M69.2732 10.0602H65.6399V12.5302H68.9154V13.4694H65.6399V15.9394H69.2732V16.8965H64.6113V9.10303H69.2732V10.0602Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M73.6029 16.8965H72.5743V10.0602H70.3457V9.10303H75.8331V10.0602H73.6029V16.8965V16.8965Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M79.8047 16.8965V9.10303H80.8316V16.8965H79.8047Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M85.3841 16.8965H84.3639V10.0602H82.127V9.10303H87.621V10.0602H85.3841V16.8965Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M98.0099 15.8939C97.2227 16.6821 96.2474 17.0753 95.084 17.0753C93.9139 17.0753 92.9386 16.6821 92.1513 15.8939C91.3657 15.1074 90.9746 14.1422 90.9746 12.9998C90.9746 11.8574 91.3657 10.8922 92.1513 10.1057C92.9386 9.31757 93.9139 8.92432 95.084 8.92432C96.2407 8.92432 97.216 9.31757 98.0033 10.1122C98.7955 10.9052 99.1866 11.8639 99.1866 12.9998C99.1866 14.1422 98.7955 15.1074 98.0099 15.8939ZM92.9119 15.2407C93.5045 15.8241 94.2251 16.1166 95.084 16.1166C95.9361 16.1166 96.6634 15.8241 97.2493 15.2407C97.8402 14.6573 98.1397 13.9082 98.1397 12.9998C98.1397 12.0914 97.8402 11.3423 97.2493 10.7589C96.6634 10.1756 95.9361 9.88307 95.084 9.88307C94.2251 9.88307 93.5045 10.1756 92.9119 10.7589C92.3211 11.3423 92.0215 12.0914 92.0215 12.9998C92.0215 13.9082 92.3211 14.6573 92.9119 15.2407V15.2407Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M100.629 16.8965V9.10303H101.877L105.759 15.1643H105.803L105.759 13.666V9.10303H106.785V16.8965H105.714L101.649 10.5363H101.604L101.649 12.041V16.8965H100.629V16.8965Z" fill="white" stroke="white" strokeWidth="0.16" strokeMiterlimit="10"></path>
                  <path d="M90.7215 28.2783C87.5942 28.2783 85.0394 30.602 85.0394 33.8082C85.0394 36.9883 87.5942 39.3364 90.7215 39.3364C93.8555 39.3364 96.4104 36.9883 96.4104 33.8082C96.4104 30.602 93.8555 28.2783 90.7215 28.2783ZM90.7215 37.1589C89.0056 37.1589 87.5293 35.776 87.5293 33.8082C87.5293 31.8143 89.0056 30.4558 90.7215 30.4558C92.4375 30.4558 93.9205 31.8143 93.9205 33.8082C93.9205 35.776 92.4375 37.1589 90.7215 37.1589V37.1589ZM78.3236 28.2783C75.1896 28.2783 72.6414 30.602 72.6414 33.8082C72.6414 36.9883 75.1896 39.3364 78.3236 39.3364C81.4559 39.3364 84.0058 36.9883 84.0058 33.8082C84.0058 30.602 81.4559 28.2783 78.3236 28.2783ZM78.3236 37.1589C76.606 37.1589 75.1247 35.776 75.1247 33.8082C75.1247 31.8143 76.606 30.4558 78.3236 30.4558C80.0396 30.4558 81.5159 31.8143 81.5159 33.8082C81.5159 35.776 80.0396 37.1589 78.3236 37.1589ZM63.5706 29.9732V32.3229H69.3177C69.1496 33.6359 68.7002 34.6012 68.0111 35.2739C67.1723 36.0864 65.8657 36.9883 63.5706 36.9883C60.0338 36.9883 57.2643 34.2014 57.2643 30.7483C57.2643 27.2952 60.0338 24.5083 63.5706 24.5083C65.4829 24.5083 66.8744 25.2379 67.9013 26.1837L69.5973 24.5278C68.1609 23.1888 66.2502 22.1602 63.5706 22.1602C58.7206 22.1602 54.6445 26.013 54.6445 30.7483C54.6445 35.4835 58.7206 39.3364 63.5706 39.3364C66.192 39.3364 68.1609 38.4979 69.7088 36.9249C71.2949 35.3763 71.7893 33.1988 71.7893 31.4405C71.7893 30.8945 71.7427 30.3924 71.6594 29.9732H63.5706ZM123.898 31.7948C123.43 30.5582 121.987 28.2783 119.048 28.2783C116.135 28.2783 113.71 30.5192 113.71 33.8082C113.71 36.9054 116.11 39.3364 119.327 39.3364C121.929 39.3364 123.43 37.7878 124.047 36.8859L122.117 35.6298C121.473 36.5495 120.595 37.1589 119.327 37.1589C118.067 37.1589 117.163 36.595 116.584 35.4835L124.159 32.4237L123.898 31.7948V31.7948ZM116.175 33.6359C116.11 31.5039 117.871 30.4119 119.132 30.4119C120.121 30.4119 120.96 30.8945 121.24 31.5852L116.175 33.6359V33.6359ZM110.018 39H112.508V22.75H110.018V39ZM105.941 29.51H105.857C105.298 28.8633 104.231 28.2783 102.88 28.2783C100.044 28.2783 97.4506 30.7093 97.4506 33.826C97.4506 36.9249 100.044 39.3364 102.88 39.3364C104.231 39.3364 105.298 38.7465 105.857 38.0803H105.941V38.8733C105.941 40.9874 104.784 42.1233 102.918 42.1233C101.397 42.1233 100.453 41.0508 100.064 40.1489L97.8983 41.0313C98.5225 42.497 100.175 44.3008 102.918 44.3008C105.837 44.3008 108.301 42.6238 108.301 38.5434V28.6147H105.941V29.51V29.51ZM103.093 37.1589C101.377 37.1589 99.9405 35.7565 99.9405 33.826C99.9405 31.8777 101.377 30.4558 103.093 30.4558C104.784 30.4558 106.117 31.8777 106.117 33.826C106.117 35.7565 104.784 37.1589 103.093 37.1589V37.1589ZM135.555 22.75H129.6V39H132.083V32.8429H135.555C138.313 32.8429 141.017 30.8945 141.017 27.7957C141.017 24.6984 138.306 22.75 135.555 22.75V22.75ZM135.62 30.5825H132.083V25.0104H135.62C137.474 25.0104 138.532 26.5135 138.532 27.7957C138.532 29.0534 137.474 30.5825 135.62 30.5825ZM150.97 28.2474C149.176 28.2474 147.31 29.0209 146.543 30.7353L148.747 31.6372C149.221 30.7353 150.093 30.4428 151.015 30.4428C152.303 30.4428 153.61 31.1984 153.63 32.5325V32.7032C153.181 32.4497 152.219 32.0743 151.035 32.0743C148.662 32.0743 146.243 33.3499 146.243 35.7305C146.243 37.908 148.187 39.3104 150.373 39.3104C152.044 39.3104 152.966 38.5743 153.545 37.7179H153.63V38.974H156.028V32.7405C156.028 29.8594 153.825 28.2474 150.97 28.2474ZM150.671 37.1524C149.858 37.1524 148.727 36.7592 148.727 35.776C148.727 34.5183 150.138 34.0357 151.36 34.0357C152.453 34.0357 152.966 34.2713 153.63 34.5817C153.435 36.0864 152.109 37.1524 150.671 37.1524V37.1524ZM164.766 28.6033L161.912 35.6477H161.827L158.876 28.6033H156.198L160.632 38.4475L158.102 43.9254H160.697L167.529 28.6033H164.766V28.6033ZM142.382 39H144.872V22.75H142.382V39Z" fill="white"></path>
                  <path d="M13.8948 9.80044C13.5037 10.2002 13.2773 10.8226 13.2773 11.6286V40.3781C13.2773 41.1841 13.5037 41.8064 13.8948 42.2062L13.9914 42.2939L30.492 26.1902V25.8099L13.9914 9.7062L13.8948 9.80044Z" fill="url(#paint0_linear)"></path>
                  <path d="M35.9863 31.5605L30.4922 26.1899V25.8097L35.9929 20.439L36.1161 20.5089L42.6305 24.1278C44.4896 25.1548 44.4896 26.8448 42.6305 27.8783L36.1161 31.4907L35.9863 31.5605V31.5605Z" fill="url(#paint1_linear)"></path>
                  <path d="M36.1156 31.4907L30.4917 25.9998L13.8945 42.206C14.512 42.8397 15.519 42.9161 16.6641 42.2823L36.1156 31.4907" fill="url(#paint2_linear)"></path>
                  <path d="M36.1156 20.5091L16.6641 9.7175C15.519 9.09025 14.512 9.16663 13.8945 9.80038L30.4917 26L36.1156 20.5091Z" fill="url(#paint3_linear)"></path>
                  <defs>
                    <linearGradient id="paint0_linear" x1="29.0269" y1="40.6775" x2="7.21605" y2="18.3381" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A0FF"></stop>
                      <stop offset="0.0066" stopColor="#00A1FF"></stop>
                      <stop offset="0.2601" stopColor="#00BEFF"></stop>
                      <stop offset="0.5122" stopColor="#00D2FF"></stop>
                      <stop offset="0.7604" stopColor="#00DFFF"></stop>
                      <stop offset="1" stopColor="#00E3FF"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="45.0513" y1="25.998" x2="12.8332" y2="25.998" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE000"></stop>
                      <stop offset="0.4087" stopColor="#FFBD00"></stop>
                      <stop offset="0.7754" stopColor="#FFA500"></stop>
                      <stop offset="1" stopColor="#FF9C00"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="33.0575" y1="23.0149" x2="3.48018" y2="-7.27908" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3A44"></stop>
                      <stop offset="1" stopColor="#C31162"></stop>
                    </linearGradient>
                    <linearGradient id="paint3_linear" x1="9.71668" y1="51.7709" x2="22.9243" y2="38.2434" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#32A071"></stop>
                      <stop offset="0.0685" stopColor="#2DA771"></stop>
                      <stop offset="0.4762" stopColor="#15CF74"></stop>
                      <stop offset="0.8009" stopColor="#06E775"></stop>
                      <stop offset="1" stopColor="#00F076"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
            </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#004ac6]/20 to-purple-400/20 blur-3xl rounded-full" />
                <img
                  src="https://seen.com/images/mobile-app-v2-hero.webp"
                  alt="myStamp mobile app displayed on phone"
                  className="relative z-10 w-full max-w-[500px] rounded-3xl "
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-[#004ac6]/30 dark:border-blue-400/30 flex items-start justify-center pt-2">
              <div className="w-1 h-2.5 bg-[#004ac6]/60 dark:bg-blue-400/60 rounded-full" />
            </div>
          </div>
        </section>

        {/* ─── Trusted By ─── */}
        <section className="py-14 bg-white dark:bg-[#0b1326] border-b border-[#e1e2ed] dark:border-white/[0.04]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <p className="text-center text-xs font-medium tracking-[0.08em] text-[#737686] dark:text-white mb-10 font-[family-name:var(--font-mono)]">
              TRUSTED BY 5,000+ FORWARD-THINKING BRANDS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-14 md:gap-y-8 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
              <svg viewBox="0 0 140 32" className="h-7 fill-current text-[#1a1a2e] dark:text-white"><text x="0" y="24" fontFamily="sans-serif" fontWeight="800" fontSize="22" letterSpacing="-1">NOVA<tspan fill="currentColor">CART</tspan></text></svg>
              <svg viewBox="0 0 120 32" className="h-7 fill-current text-[#1a1a2e] dark:text-white"><text x="0" y="24" fontFamily="sans-serif" fontWeight="300" fontSize="24" letterSpacing="3">PULSE</text></svg>
              <svg viewBox="0 0 150 32" className="h-7 fill-current text-[#1a1a2e] dark:text-white"><text x="0" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="20" letterSpacing="1">BLOOM<tspan fontWeight="300">&amp;CO</tspan></text></svg>
              <svg viewBox="0 0 130 32" className="h-7 fill-current text-[#1a1a2e] dark:text-white"><circle cx="14" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2.5"/><text x="32" y="23" fontFamily="sans-serif" fontWeight="600" fontSize="18" letterSpacing="2">ZENITH</text></svg>
              <svg viewBox="0 0 160 32" className="h-7 fill-current text-[#1a1a2e] dark:text-white"><text x="0" y="24" fontFamily="sans-serif" fontWeight="900" fontSize="20" letterSpacing="-0.5">EVER<tspan fontWeight="300">MARKET</tspan></text></svg>
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="py-24 bg-white dark:bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-8 rounded-2xl bg-[#faf8ff] dark:bg-white/[0.03] border border-[#e1e2ed] dark:border-white/[0.06] card-hover">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-3 leading-[1.1] tracking-[-0.03em] font-[family-name:var(--font-heading)]">5,000+</div>
                <div className="text-base md:text-lg text-[#434655] dark:text-white font-medium">Active Businesses</div>
              </div>
              <div className="p-8 rounded-2xl bg-[#faf8ff] dark:bg-white/[0.03] border border-[#e1e2ed] dark:border-white/[0.06] card-hover">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-3 leading-[1.1] tracking-[-0.03em] font-[family-name:var(--font-heading)]">1M+</div>
                <div className="text-base md:text-lg text-[#434655] dark:text-white font-medium">Rewards Distributed</div>
              </div>
              <div className="p-8 rounded-2xl bg-[#faf8ff] dark:bg-white/[0.03] border border-[#e1e2ed] dark:border-white/[0.06] card-hover">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-3 leading-[1.1] tracking-[-0.03em] font-[family-name:var(--font-heading)]">250k+</div>
                <div className="text-base md:text-lg text-[#434655] dark:text-white font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features Grid ─── */}
        <section className="py-16 md:py-24 bg-surface dark:bg-[#141b2f]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <SectionHeader title="Everything you need to grow" subtitle="From simple punch cards to complex multi-tier loyalty programs, myStamp handles the heavy lifting." className="mb-16" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-[#e1e2ed] dark:border-white/[0.08] bg-white dark:bg-[#181f33] card-hover cursor-default">
                  <MaterialIcon name={f.icon} className="text-[#004ac6] dark:text-blue-400 mb-4 block" />
                  <h3 className="font-bold mb-2 text-[#191b23] dark:text-white">{f.title}</h3>
                  <p className="text-xs text-[#434655] dark:text-white font-medium tracking-[0.05em] font-[family-name:var(--font-mono)]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold mb-8 md:mb-12 font-[family-name:var(--font-heading)] text-[#191b23] dark:text-white">How it works</h2>
                <div className="space-y-8">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-6 group">
                      <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#004ac6] to-[#2563eb] text-white flex items-center justify-center font-bold shadow-lg shadow-[#004ac6]/20 dark:shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">{s.num}</div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 font-[family-name:var(--font-heading)] text-[#191b23] dark:text-white">{s.title}</h4>
                        <p className="text-[#434655] dark:text-white leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-8 bg-[#004ac6]/10 dark:bg-blue-500/10 blur-3xl rounded-full" />
                <img src="https://loyal.pt/wp-content/uploads/2023/11/Loyal-1-1.png" alt="QR Code Scanning" className="relative z-10 w-md rounded-2xl shadow-[#004ac6]/10 dark:shadow-blue-500/10" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <section className="py-16 md:py-24 bg-surface dark:bg-[#141b2f]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <SectionHeader title="Loved by local legends" className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-8 rounded-2xl bg-white dark:bg-[#181f33] border border-[#e1e2ed] dark:border-white/[0.08] card-hover">
                  <StarRating />
                  <p className="text-lg italic mb-6 text-[#191b23] dark:text-white leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d9d9e5] dark:bg-white/10 overflow-hidden ring-2 ring-[#e1e2ed] dark:ring-white/10">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-[#191b23] dark:text-white">{t.name}</div>
                      <div className="text-xs text-[#737686] dark:text-white font-[family-name:var(--font-mono)]">{t.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pricing ─── */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#0b1326]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10">
            <SectionHeader title="Simple, transparent pricing" subtitle="Choose the plan that's right for your stage of growth." className="mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-16 md:py-24 bg-surface dark:bg-[#141b2f]">
          <div className="max-w-3xl mx-auto px-5 md:px-10">
            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* ─── CTA Banner ─── */}
        <CTABanner
          title="Ready to boost your revenue?"
          subtitle="Join 5,000+ businesses and start rewarding your customers today. No credit card required for trial."
          primaryLabel="Get Started Now"
          primaryHref="/register"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
