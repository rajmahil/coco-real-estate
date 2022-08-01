import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_924otss",
        "template_ydplxei",
        e.target,
        "user_x2vOJw9dQBquXNZHnAmrG"
      )
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
        setFormSub(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(true);
        setFormSub(true);
      });
  };

  return (
    <div className="w-auto h-screen flex flex-col items-center justify-center">
      <h2 className="text-[1.5em] 600:text-[2em] text-center m-0 font-extrabold">
        Let&apos;s Discuss Your Project!{" "}
      </h2>
      <div className="font-[400] m-0 text-[#333] mb-[18px] 600:mb-[24px] max-w-[450px] text-center leading-[22px] text-[0.9em] 600:mt-0 mt-[10px]">
        Please fill out the form below. We promise to respond within 24 hours.
      </div>
      <form
        className="flex flex-col items-center w-[85%] 600:w-[60%] 1190:w-[400px]"
        onSubmit={sendEmail}
      >
        <input
          className="contactFormInput"
          style={{ fontFamily: "gopher, sans-serif" }}
          placeholder="Your Name"
          name="name"
          type="text"
          required
        />
        <input
          className="contactFormInput"
          style={{ fontFamily: "gopher, sans-serif" }}
          placeholder="Your Email"
          name="email"
          type="email"
          required
        />
        <input
          className="contactFormInput"
          style={{ fontFamily: "gopher, sans-serif" }}
          placeholder="Your Phone"
          name="phone"
          type="tel"
          required
        />
        <select
          className="w-full mb-[10px] 600:mb-[16px] p-[12px] 600:p-[16px] border-none bg-[#f2f2f2] text-[#7d7d7d] cursor-pointer"
          required
          name="bestTime"
          style={{
            fontFamily: "poppins, sans-serif",
            webkitAppearance: "none",
          }}
        >
          <option
            className="timeOption"
            style={{
              webkitAppearance: "none",
              fontFamily: "poppins, sans-serif",
            }}
            value="none"
          >
            Best Time To Contact
          </option>
          <option
            className="timeOption"
            style={{
              webkitAppearance: "none",
              fontFamily: "poppins, sans-serif",
            }}
            value="morning"
          >
            Morning
          </option>
          <option
            className="timeOption"
            style={{
              webkitAppearance: "none",
              fontFamily: "poppins, sans-serif",
            }}
            value="afternoon"
          >
            Afternoon
          </option>
          <option
            className="timeOption"
            style={{
              webkitAppearance: "none",
              fontFamily: "poppins, sans-serif",
            }}
            value="evening"
          >
            Evening
          </option>
          <option
            className="timeOption"
            style={{
              webkitAppearance: "none",
              fontFamily: "poppins, sans-serif",
            }}
            value="night"
          >
            Night
          </option>
        </select>
        <textarea
          className="w-full h-[125px] 600:h-[150px] border-none p-[16px] bg-[#f2f2f2]"
          placeholder="Additional Comments"
          name="message"
          type="text"
          required
          style={{ fontFamily: "gopher, sans-serif" }}
        />
        <button
          className="mt-[20px] text-white border-none py-[14px] px-[40px] text-[1em] 600:text-[1.1em] font-white margin-[20px] bg-red cursor-pointer transition-all hover:bg-black "
          type="submit"
        >
          Send Message
        </button>
        <div
          className={`w-auto text-center bg-[#ededed] p-[12px] 767:p-[24px] mt-[10px] ${
            formSub ? "block" : "hidden"
          }`}
          formSub={formSub}
        >
          <div
            className={`${
              successMessage ? "block" : "none"
            } text-[0.8em] 767:text-[1em]`}
          >
            Your form has been Submitted, we&apos;ll be in touch shortly!
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
