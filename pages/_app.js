import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
