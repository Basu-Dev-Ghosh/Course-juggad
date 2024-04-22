"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { AnimationProps, animate, motion } from "framer-motion";

const InViewAnimation = ({
  children,
  className,
  variants,
  initial,
  whileInView,
}: {
  children: React.ReactNode | string;
  className?: string;
  variants?: AnimationProps["variants"];
  initial: AnimationProps["initial"];
  whileInView?: any;
}) => {
  const [ref, inView] = useInView();

  return (
    <motion.div
      className={className || ""}
      initial={initial}
      animate={variants && inView ? "open" : "close"}
      whileInView={whileInView}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      variants={variants || undefined}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimation;
