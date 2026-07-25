import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "myStamp | Turn Every Customer Into a Regular",
  description:
    "Power your growth with a digital loyalty ecosystem. Launch rewards, manage coupons, and engage customers with premium automation.",
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('couponly-theme');
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})()
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <BackToTop />
      </body>
    </html>
  );
}
