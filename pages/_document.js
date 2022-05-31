import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/dwl6tjb.css" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dmcsstcqf/image/upload/v1653961465/OGImage_er2lnr.png"
          />
          <meta property="og:locale" content="en_US" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
