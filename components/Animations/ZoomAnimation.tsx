"use client";
import React from "react";
import { motion } from "framer-motion";
const ZoomAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.4,
        easings: "easeInOut",
      }}
      className={className || ""}
    >
      {children}
    </motion.div>
  );
};

export default ZoomAnimation;
