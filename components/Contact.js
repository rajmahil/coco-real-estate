import React, { useContext } from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactScreen = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000000000;
  position: fixed;
  top: 0;
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  justify-content: flex-end;
`;

const ContactContainer = styled.div`
  background: #fff;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1090px) {
    width: 100%;
  }
`;
const IconWrapper = styled.div`
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 4em;
  cursor: pointer;
  margin: 25px;
  transition: all 0.3s ease-out;

  &:hover {
    color: #ce202f;
  }
`;

const OverlayVariants = {
  open: { opacity: 1, transition: { ease: "easeOut", duration: 0.3 } },
  closed: { opacity: 0, transition: { ease: "easeOut", duration: 0.3 } },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
};
const MenuVariants = {
  open: { x: 0, transition: { ease: "easeOut", duration: 0.3, delay: 0.3 } },
  closed: {
    x: 1000,
    transition: { ease: "easeOut", duration: 0.3, delay: 0.3 },
  },
  exit: {
    x: 1000,
    transition: { ease: "easeOut", duration: 0.3 },
  },
};

const Contact = ({ isOpen, toggle }) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {isOpen && (
        <ContactScreen
          isMenuOpen={isOpen}
          as={motion.div}
          variants={OverlayVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="exit"
        >
          <ContactContainer
            as={motion.div}
            variants={MenuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="exit"
          >
            <IconWrapper onClick={toggle}>
              <IoCloseSharp />
            </IconWrapper>
            <ContactForm />
          </ContactContainer>
        </ContactScreen>
      )}
    </AnimatePresence>
  );
};

export default Contact;
