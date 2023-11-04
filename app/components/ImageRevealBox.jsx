"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const ImageRevealBox = ({ children }, props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        ref={ref} className="w-full h-full box-shadow rounded-xl"
      >
        {children}
      </motion.div>
  );
};
