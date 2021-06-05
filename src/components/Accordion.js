import { motion } from "framer-motion";
import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentVariants = {
    hidden: {
      height: 0,
      overflowY: "hidden",
    },
    visible: {
      height: "auto",
    },
  };

  const chevronVariants = {
    up: {
      rotate: 0,
    },
    down: {
      rotate: 180,
    },
  };

  return (
    <div className="bg-yellow px-10 py-6 border-4 border-orange rounded-2xl my-8">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl font-bold">{question}</h3>
        <motion.img
          src="/shapes/chevron-down.png"
          className="w-8 h-4 my-auto cursor-pointer"
          animate={isOpen ? "down" : "up"}
          variants={chevronVariants}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <motion.div
        animate={isOpen ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <div className="my-4 text-lg">
            {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;
