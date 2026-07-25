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

export default function LoginPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Visual/Branding Section */}
      <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-primary overflow-hidden items-center justify-center p-6 lg:p-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')" }}
          />
        </div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/80 via-transparent to-primary-container/40" />
        {/* Content Overlay */}
        <div className="relative z-20 max-w-lg text-on-primary">
          
          <h1 className="font-heading text-[32px] md:text-[48px] leading-[1.15] tracking-[-0.02em] font-bold mb-6">Scale your local business with precision.</h1>
          <p className="text-[18px] leading-[28px] opacity-90 mb-10">
            Join over 10,000 merchants who use myStamp to drive customer loyalty, track growth, and master their local market.
          </p>
          {/* Bento-style feature highlight */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/30 backdrop-blur-[12px] border border-white/30 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary-fixed mb-3 block" style={{ fontSize: 32 }}>trending_up</span>
              <div className="font-heading text-[18px] leading-[24px] font-semibold mb-1">Growth Tracking</div>
              <p className="text-sm opacity-80">Real-time analytics for every campaign.</p>
            </div>
            <div className="bg-white/30 backdrop-blur-[12px] border border-white/30 p-6 rounded-xl">
              <span className="material-symbols-outlined text-primary-fixed mb-3 block" style={{ fontSize: 32 }}>groups</span>
              <div className="font-heading text-[18px] leading-[24px] font-semibold mb-1">Loyalty Built-in</div>
              <p className="text-sm opacity-80">Keep customers coming back for more.</p>
            </div>
          </div>
        </div>
        {/* Atmospheric subtle floaters */}
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-fixed/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary-fixed/20 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Right Side: Login Form Section */}
      <section className="flex flex-col flex-1 bg-surface dark:bg-[#0d0f17] items-center justify-center px-5 py-8 md:p-10 relative">
        {/* Mobile Header - colored branded section */}
        <div className="md:hidden w-full -mx-4 -mt-4 px-6 pt-10 pb-10 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 40%)",
            }}
          />
          <div className="relative z-10">
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={140} height={35} priority />
            <h1 className="font-heading text-[28px] leading-[34px] font-bold text-white mt-5 mb-2 tracking-[-0.01em]">Welcome back</h1>
            <p className="text-white/70 text-[15px] leading-[22px]">Sign in to manage your loyalty program.</p>
          </div>
        </div>

        <div className="w-full max-w-[440px] md:mt-0 mt-4">
          {/* Form Header */}
          <header className="mb-8 hidden md:block">
            <div className="mb-8">
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={160} height={40} priority />
          </div>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading mb-2 text-on-background dark:text-white">Welcome back</h2>
            <p className="text-on-surface-variant dark:text-white text-[16px] leading-[24px]">Please enter your credentials to access your dashboard.</p>
          </header>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <FormField id="email" label="Email Address" type="email" placeholder="name@company.com" icon="mail" required />
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white uppercase" htmlFor="password">Password</label>
                <a className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-primary hover:underline transition-all" href="#">Forgot Password?</a>
              </div>
              <FormField id="password" label="" type="password" placeholder="••••••••" icon="lock" required />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 pt-1">
              <input id="remember" type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest dark:bg-[#14161f]" />
              <label htmlFor="remember" className="text-sm text-on-surface-variant dark:text-white cursor-pointer select-none">Remember this device for 30 days</label>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-[48px] bg-primary text-on-primary font-heading text-[16px] leading-[24px] rounded-lg shadow-sm hover:bg-primary/95 hover:translate-y-[-2px] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Log In</span>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Social Login Separator */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant" />
            </div>
            <div className="relative flex justify-center font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase">
              <span className="bg-surface dark:bg-[#0d0f17] px-4 text-outline">Or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <SocialLoginButtons
            buttons={[
              { label: "Google", svg: GoogleIcon },
              { label: "Apple", svg: AppleIcon },
            ]}
            
            className="mb-8"
          />

          {/* Footer Link */}
          <footer className="text-center pt-4">
            <p className="text-on-surface-variant dark:text-white text-[16px] leading-[24px]">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4 transition-all">Sign up</Link>
            </p>
          </footer>
        </div>

        {/* Bottom Legal Links */}
        <div className="hidden md:flex absolute bottom-8 justify-center gap-6 font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-outline opacity-60">
          <a href="/privacy" className="hover:text-on-surface-variant dark:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-on-surface-variant dark:text-white transition-colors">Terms of Service</a>
          <a href="/contact" className="hover:text-on-surface-variant dark:text-white transition-colors">Help Center</a>
        </div>
        <div className="md:hidden flex flex-wrap justify-center gap-4 pt-6 font-mono text-[11px] leading-[16px] tracking-[0.05em] font-medium text-outline opacity-60">
          <a href="/privacy" className="hover:text-on-surface-variant dark:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-on-surface-variant dark:text-white transition-colors">Terms</a>
          <a href="/contact" className="hover:text-on-surface-variant dark:text-white transition-colors">Help</a>
        </div>
      </section>
    </main>
  );
}
