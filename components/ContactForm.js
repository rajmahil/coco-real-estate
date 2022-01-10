import emailjs from "emailjs-com";
import { useState } from "react";
import styled from "styled-components";

const ContactFromContainer = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContactFromHeading = styled.h2`
  font-size: 2em;
  text-align: center;
  margin: 0px;
  font-weight: 800;

  @media screen and (max-width: 600px) {
    font-size: 1.8em;
  }
`;
const ContactFromSubheading = styled.p`
  font-weight: 400;
  margin: 0px;
  color: #333333;
  margin-bottom: 24px;

  @media screen and (max-width: 600px) {
    margin-bottom: 18px;
  }
`;
const ContactFormWrap = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1190px) {
    width: 60%;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;
const ContactFromInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  border: none;
  font-family: gopher, sans-serif;
  background: #f2f2f2;

  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
    padding: 12px;
  }
`;
const TimeOption = styled.option`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  border: none;
  -webkit-appearance: none;
  font-family: gopher, sans-serif;
  background: #f2f2f2;
  color: #000;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
    padding: 12px;
  }
`;
const SelectOption = styled.select`
  width: 100%;
  margin-bottom: 16px;
  -webkit-appearance: none;
  padding: 16px;
  border: none;
  font-family: poppins, sans-serif;
  background: #f2f2f2;
  color: #7d7d7d;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-bottom: 10px;
    padding: 12px;
  }
`;
const ContactFromMessage = styled.textarea`
  width: 100%;
  height: 150px;
  border: none;
  padding: 16px;
  font-family: gopher, sans-serif;
  background: #f2f2f2;

  @media screen and (max-width: 600px) {
    height: 125px;
  }
`;
const ContactFormSubmit = styled.button`
  border: none;
  padding: 14px 40px;
  font-size: 1.1em;
  color: #fff;
  font-family: gopher, sans-serif;
  margin: 20px;
  background: #cd2121;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background: #000;
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;
const ResultMessageWrap = styled.div`
  width: auto;
  text-align: center;
  font-family: gopher, sans-serif;
  background: #ededed;
  padding: 24px;
  margin-top: 10px;
  display: ${({ formSub }) => (formSub ? "block" : "none")};

  @media screen and (max-width: 767px) {
    padding: 12px;
  }
`;
const SuccessMessage = styled.text`
  font-family: gopher, sans-serif;

  display: ${({ successMessage }) => (successMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.8em;
  }
`;
const ErrorMessage = styled.text`
  font-family: poppins, sans-serif;
  display: ${({ errorMessage }) => (errorMessage ? "block" : "none")};

  @media screen and (max-width: 767px) {
    font-size: 0.8em;
  }
`;

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service", "template", e.target, "user")
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
    <ContactFromContainer>
      <ContactFromHeading>Let&apos;s Transform Your Home!</ContactFromHeading>
      <ContactFromSubheading>
        We promise to respond within 48 hours.
      </ContactFromSubheading>
      <ContactFormWrap onSubmit={sendEmail}>
        <ContactFromInput
          placeholder="Your Name"
          name="name"
          type="text"
          required
        />
        <ContactFromInput
          placeholder="Your Email"
          name="email"
          type="email"
          required
        />
        <ContactFromInput
          placeholder="Your Phone"
          name="phone"
          type="tel"
          required
        />
        <SelectOption required name="bestTime">
          <TimeOption value="none">Best Time To Contact</TimeOption>
          <TimeOption value="morning">Morning</TimeOption>
          <TimeOption value="afternoon">Afternoon</TimeOption>
          <TimeOption value="evening">Evening</TimeOption>
          <TimeOption value="night">Night</TimeOption>
        </SelectOption>
        <ContactFromMessage
          placeholder="Additional Comments"
          name="message"
          type="text"
          required
        />
        <ContactFormSubmit type="submit">Send Message</ContactFormSubmit>
        <ResultMessageWrap formSub={formSub}>
          <SuccessMessage successMessage={successMessage}>
            Your form has been Submitted, we&apos;ll be in touch shortly!
          </SuccessMessage>
          <ErrorMessage errorMessage={errorMessage}>
            Sorry, Something went wrong!
          </ErrorMessage>
        </ResultMessageWrap>
      </ContactFormWrap>
    </ContactFromContainer>
  );
};

export default ContactForm;