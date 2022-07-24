import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Script
        id="google-analytics-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z6VESQDBK9`}
      />
      <Script strategy="lazyOnload" id="google-analytics-2">
        {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                   
                     gtag('config', 'G-Z6VESQDBK9');
                `}
      </Script>
      <Head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/dwl6tjb.css" /> */}
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmcsstcqf/image/upload/v1653961465/OGImage_er2lnr.png"
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Layout
        style={{ padding: "0", margin: "0" }}
        isOpen={isOpen}
        toggle={toggle}
      >
        {pageLoading ? <LoadingScreen /> : <Component {...pageProps} />}
      </Layout>
    </>
  );
}

export default MyApp;
