"use client";

import Link from "next/link";
import Image from "next/image";
import FormField from "@/components/FormField";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import { useTheme } from "@/components/ThemeProvider";

const GoogleIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.75 1.18-.02 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.83-3.12 1.87-2.62 6.03.43 7.23-.62 1.57-1.45 3.14-2.48 4.00zM12.03 7.25c-.02-2.23 1.84-4.22 3.94-4.25.26 2.5-2.2 4.54-3.94 4.25z"/>
  </svg>
);

export default function RegisterPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Value Proposition & Visuals */}
      <section className="hidden lg:flex w-1/2 relative flex-col justify-between p-6 xl:p-10 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}
          />
        </div>
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light" />
        {/* Header / Brand */}
        
        {/* Content Canvas */}
        <div className="relative z-10 max-w-lg">
          <div className="space-y-8">
            <h1 className="font-heading text-[32px] xl:text-[48px] leading-[1.15] tracking-[-0.02em] font-bold text-white">
              Turn every visit into a <span className="text-tertiary-fixed">loyal relationship.</span>
            </h1>
            <p className="text-[18px] leading-[28px] text-primary-fixed-dim">
              Join over 5,000 businesses using myStamp to automate their reward cycles and increase customer LTV by up to 40%.
            </p>
          </div>
          {/* Testimonial Card */}
          <div className="mt-16 bg-white/85 backdrop-blur-[12px] p-6 rounded-xl shadow-lg border border-white/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-fixed">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCY_LmwZtj1FQM4hto0bN8AN6mZbE7NaOcBFBku6cCM0EmwgXIRl6ZVlcW3CknKfj0Mos11JU7W4TPS-D-De70o9_G295UUhv88TUF2PIicaxhXNboIY7hafms6V9rchnp1_PhciPGy-YFWi16ve4D4rHCqrsARGcD9a_f7SbRL8ypmX3ckGT8lwYqtRgnx4JU4FSQQ4ifCbQzMgS4S2eKulVvIMdXwiClr4sRsgfcgYWTDntvFFBe"
                  alt="Sarah Jenkins"
                />
              </div>
              <div>
                <p className="font-heading text-[24px] leading-[32px] font-semibold text-primary leading-none">Sarah Jenkins</p>
                <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white uppercase">Founder, Artisan Brews</p>
              </div>
            </div>
            <p className="text-[16px] leading-[24px] italic text-on-surface ">
              &ldquo;myStamp completely changed how we handle customer retention. The automated campaigns feel personal, and our regulars love the seamless mobile experience.&rdquo;
            </p>
            <div className="mt-4 flex gap-1 text-tertiary-container">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
          </div>
        </div>
        {/* Footer of Left Side */}
        <div className="relative z-10 flex gap-6">
          <div className="flex flex-col">
            <span className="font-heading text-[24px] leading-[32px] font-semibold text-white">4.9/5</span>
            <span className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-primary-fixed-dim uppercase">G2 Rating</span>
          </div>
          <div className="flex flex-col border-l border-white/20 pl-6">
            <span className="font-heading text-[24px] leading-[32px] font-semibold text-white">12M+</span>
            <span className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-primary-fixed-dim uppercase">Coupons Issued</span>
          </div>
        </div>
      </section>

      {/* Right Side: Registration Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 md:px-10 py-8 bg-surface dark:bg-[#0d0f17] relative">
        {/* Mobile Brand Header - colored branded section */}
        <div className="lg:hidden w-full -mx-4 -mt-4 px-6 pt-10 pb-10 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)",
            }}
          />
          <div className="relative z-10">
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={140} height={35} priority />
            <h1 className="font-heading text-[28px] leading-[34px] font-bold text-white mt-5 mb-2 tracking-[-0.01em]">Create your account</h1>
            <p className="text-white/70 text-[15px] leading-[22px]">Start growing your business today.</p>
          </div>
        </div>

        {/* Desktop-only brand logo fallback */}
        <div className="hidden lg:block absolute top-8 left-4">
          {/* <span className="text-[24px] leading-[32px] font-heading font-extrabold text-primary">myStamp</span> */}
        </div>
        <div className="w-full max-w-md space-y-8 mt-4 lg:mt-0">
          <div className="text-center lg:text-left space-y-2 hidden lg:block">
            <div className="relative z-10">
          <div className="text-[24px] leading-[32px] font-heading font-bold text-white tracking-tight">
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={160} height={40} priority />
          </div>
        </div>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-surface dark:text-white">Create your account</h2>
            <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">Start growing your business revenue today.</p>
          </div>

          {/* Social Logins */}
          <SocialLoginButtons
            buttons={[
              { label: "Google", svg: GoogleIcon },
              { label: "Apple", svg: AppleIcon },
            ]}
          />

          {/* Separator */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant" /></div>
            <div className="relative flex justify-center font-mono text-[12px] leading-[16px] tracking-[0.05em]">
              <span className="bg-surface dark:bg-[#0d0f17] px-4 text-on-surface-variant dark:text-white font-medium">OR CONTINUE WITH EMAIL</span>
            </div>
          </div>

          {/* Sign-up Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <FormField id="fullName" label="Full Name" type="text" placeholder="Jane Doe" icon="person" />
            <FormField id="businessName" label="Business Name" type="text" placeholder="Doe's Coffee Shop" icon="store" />
            <FormField id="email" label="Email Address" type="email" placeholder="jane@example.com" icon="mail" />
            <FormField id="password" label="Password" type="password" placeholder="••••••••" icon="lock" />
            <div className="flex items-center py-2">
              <input id="terms" type="checkbox" className="w-4 h-4 text-primary bg-surface-container-lowest dark:bg-[#14161f] border-outline-variant rounded focus:ring-primary" />
              <label htmlFor="terms" className="ml-2 font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white">
                I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="w-full h-[48px] bg-primary-container text-white font-semibold rounded-lg hover:bg-primary transition-all duration-200 shadow-sm active:scale-[0.98] flex items-center justify-center gap-2">
              Get Started
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          <p className="text-center text-[16px] leading-[24px] text-on-surface-variant dark:text-white">
            Already have an account? <Link href="/login" className="text-primary font-semibold hover:underline">Log In</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
