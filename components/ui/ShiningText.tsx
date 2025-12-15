import React from "react";
import { motion } from "framer-motion";

export function ShiningText({ text }: { text: string }) {
  return (
    <motion.h2
      className="bg-[linear-gradient(110deg,#78716c,35%,#ffffff,50%,#78716c,75%,#78716c)] bg-[length:200%_100%] bg-clip-text text-lg font-medium text-transparent text-center mx-auto w-fit"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.h2>
  );
}