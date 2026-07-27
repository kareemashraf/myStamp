import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialIcon from "@/components/MaterialIcon";

const timeline = [
  { year: "2020", title: "The Spark", desc: "Started in a garage in Palo Alto with three founders and a vision to fix the broken coupon industry." },
  { year: "2022", title: "The Scale", desc: "Expanded to 50 cities across Europe and North America, supporting over 5,000 active merchants." },
  { year: "Today", title: "Global Impact", desc: "Now serving millions of users worldwide with a team of 150+ passionate innovators dedicated to local commerce." },
];

const values = [
  { icon: "auto_awesome", title: "Intelligent Discovery", desc: "Hyper-personalized offers that respect privacy while delivering unmatched value to every user." },
  { icon: "eco", title: "Sustainable Growth", desc: "Building business ecosystems that thrive on repeat engagement rather than one-off discounts." },
  { icon: "language", title: "Global Reach", desc: "A borderless platform supporting diverse currencies and local languages for a truly unified market." },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background dark:text-white min-h-screen font-body">
      <Navbar />
    <main className="pt-12 md:pt-20">
      {/* Hero */}
      <section className="px-5 pt-16 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary-container mb-3">ABOUT OUR JOURNEY</h4>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] font-bold tracking-[-0.02em] text-on-surface dark:text-white mb-5">
            We build technology to bridge the gap between intent and action.
          </h1>
          <p className="text-on-surface-variant dark:text-white text-[17px] leading-relaxed">
            At myStamp, we believe commerce should be personal, rewarding, and accessible to everyone. We&apos;re redesigning how people discover value.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-surface-container-low dark:bg-[#22293e] rounded-[28px] p-8 md:p-10">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary-container mb-3 block">OUR MISSION</span>
            <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-on-surface dark:text-white mb-3">Empowering local businesses.</h2>
            <p className="text-on-surface-variant dark:text-white text-[15px] leading-relaxed">
              Our mission is to democratize digital marketing for local brick-and-mortar stores. We provide the tools that allow small businesses to compete with retail giants by building lasting relationships with their customers through intelligent reward systems.
            </p>
          </div>
          <div className="bg-surface-container-low dark:bg-[#22293e] rounded-[28px] p-8 md:p-10 flex flex-col justify-center">
            <div className="bg-primary-container/10 border border-primary-container/30 rounded-2xl p-6 text-center">
              <MaterialIcon name="verified" className="text-[32px] text-primary-container mb-2" />
              <p className="font-heading text-xl font-bold text-on-surface dark:text-white">Trusted by 10k+ Merchants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-primary-container text-on-primary rounded-[28px] p-8 md:p-10">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-on-primary/60 mb-3 block">OUR VISION</span>
            <h2 className="font-heading text-2xl sm:text-[28px] font-bold mb-3">The future of customer engagement.</h2>
            <p className="text-on-primary/80 text-[15px] leading-relaxed">
              We envision a world where every transaction is the start of a story. A future where AI-driven insights help consumers find exactly what they need, while businesses flourish through genuine loyalty.
            </p>
          </div>
          <div className="bg-surface-container-low dark:bg-[#22293e] rounded-[28px] p-8 md:p-10 space-y-5">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <MaterialIcon name={v.icon} className="text-[24px] text-primary-container shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-on-surface dark:text-white mb-1">{v.title}</h3>
                  <p className="text-on-surface-variant dark:text-white text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-on-surface dark:text-white text-center mb-10">OUR STORY</h2>
          <h3 className="font-heading text-lg font-bold text-on-surface dark:text-white text-center mb-10">From a simple idea to a global platform.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {timeline.map((t) => (
              <div key={t.year} className="bg-surface-container-low dark:bg-[#22293e] rounded-[24px] p-8">
                <span className="font-mono text-[11px] tracking-widest uppercase text-on-surface-variant dark:text-white font-medium mb-4 block">{t.year}</span>
                <h3 className="font-heading text-xl font-bold text-on-surface dark:text-white mb-2">{t.title}</h3>
                <p className="text-on-surface-variant dark:text-white text-[14px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto bg-surface-container-low dark:bg-[#22293e] rounded-[28px] p-10 md:p-16 text-center">
          <h2 className="font-heading text-[28px] sm:text-[32px] font-bold text-on-surface dark:text-white mb-3">Join the movement.</h2>
          <p className="text-on-surface-variant dark:text-white text-[17px] mb-8 max-w-lg mx-auto">
            Be part of the platform that is redefining how the world shops and saves. Start your journey with myStamp today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="bg-primary-container text-on-primary px-7 py-3.5 rounded-full font-medium text-[15px] hover:opacity-90 transition-opacity font-heading">
              Merchant Signup
            </Link>
            <Link href="/wallet" className="border border-outline text-on-surface dark:text-white px-7 py-3.5 rounded-full font-medium text-[15px] hover:bg-surface-container dark:hover:bg-[#22293e] transition-colors font-heading">
              Download the App
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}
