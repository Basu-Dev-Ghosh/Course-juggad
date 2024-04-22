"use client";

import React from "react";
import { motion } from "framer-motion";
const TextAnimation = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 2, ease: "easeInOut", stiffness: 200 }}
      animate={{ opacity: 1 }}
      className={className || ""}
    >
      {children}
    </motion.span>
  );
};

export default TextAnimation;
