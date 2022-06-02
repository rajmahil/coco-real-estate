import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/dwl6tjb.css" />
      </Head>
      <Layout
        style={{ padding: "0", margin: "0" }}
        isOpen={isOpen}
        toggle={toggle}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
