"use client";

import React from "react";
import { motion } from "framer-motion";
interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{
        rotateY: -90,
        opacity: 0,
        transformOrigin: "left center",
      }}
      animate={{
        rotateY: 0,
        opacity: 1,
        transformOrigin: "left center",
      }}
      exit={{
        rotateY: 90,
        opacity: 0,
        transformOrigin: "right center",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
