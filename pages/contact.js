import ContactForm from "../components/ContactForm";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Coco Creative Saskatoon</title>
        <meta
          name="description"
          content="Ready to grow your business? Fill out the form, and we will be in touch within 24 hours! "
        />
        <meta
          property="og:title"
          content="Contact Us | Coco Creative in Saskatoon"
        />
        <meta
          property="og:description"
          content="Ready to grow your business? Fill out the form, and we will be in touch within 24 hours! 
          "
        />
        <link rel="canonical" href="https://cococreativeweb.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <ContactForm wScreen={true} text={true} />
    </>
  );
};

export default Contact;
