import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

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
        <motion.div
          className={`w-full h-screen bg-[rgba(0,0,0,0.7)] z-[10000000] fixed top-0 justify-end ${
            isOpen ? "flex" : "none"
          }`}
          variants={OverlayVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          exit="exit"
        >
          <motion.div
            className="bg-white 1090:w-[50%] h-full w-full"
            variants={MenuVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="exit"
          >
            <div
              className="p-[10px] absolute top-0 right-0 text-[4em] cursor-pointer m-[25px] transition-all hover:text-red"
              onClick={toggle}
            >
              <IoCloseSharp />
            </div>
            <div className=" w-[85%] 600:w-[60%] 1190:w-[400px] ml-auto mr-auto">
              <ContactForm wScreen={true} text={true} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
