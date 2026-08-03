import type { Metadata } from "next";
import Script from "next/script";

import "../styles/globals.css";
import "../public/assets/css/style.css";
import "../public/assets/css/linea.css";
import "../public/assets/css/perch.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/fontawesome.css";

export const metadata: Metadata = {
  title: "Hanif Maritime Limited",
  description: "Global dry bulk shipping services by Hanif Maritime Limited.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
