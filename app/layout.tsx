import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maghreb Web - Digital Agency",
  description: "Creative Design & Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/img/logo/favicon.png"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased tp-magic-cursor`}
      >
        {children}
        
        <Script src="/assets/js/vendor/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/three.js" strategy="afterInteractive" />
        <Script src="/assets/js/hover-effect.umd.js" strategy="afterInteractive" />
        <Script src="/assets/js/split-type.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-gl.js" strategy="afterInteractive" />
        <Script src="/assets/js/effect-slicer.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/magnific-popup.js" strategy="afterInteractive" /> Missing */}
        <Script src="/assets/js/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/purecounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope-pkgd.js" strategy="afterInteractive" />
        <Script src="/assets/js/backtop.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded-pkgd.js" strategy="afterInteractive" />
        <Script src="/assets/js/atropos.js" strategy="afterInteractive" />
        <Script src="/assets/js/ajax-form.js" strategy="afterInteractive" />
        <Script src="/assets/js/slider-init.js" strategy="afterInteractive" />
        <Script src="/assets/js/matter.js" strategy="afterInteractive" />
        <Script src="/assets/js/throwable.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/tp-cursor.js" strategy="afterInteractive" /> Missing */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
