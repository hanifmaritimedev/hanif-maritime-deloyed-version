import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../public/assets/css/style.css";
import "../public/assets/css/linea.css";
import "../public/assets/css/perch.css";
import "../public/assets/css/swiper-bundle.min.css";
import "../public/assets/css/fontawesome.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/assets/js/jquery-3.6.0.min.js" />
      {/* <Script src="/assets/js/isotope.pkgd.min.js"/> */}
      {/* <Script src="/assets/js/jquery.magnific-popup.min.js"/> */}
      {/* <Script src="/assets/js/chart.min.js"/> */}
      {/* <Script src="/assets/js/swiper-bundle.min.js"/> */}
      <Script src="/assets/js/bootstrap.bundle.min.js" />
      {/* <Script src="/assets/js/custom.js"/> */}
    </>
  );
}
