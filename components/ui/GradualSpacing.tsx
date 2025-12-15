import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface GradualSpacingProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export function GradualSpacing({
  text,
  highlight,
  highlightClassName = "!text-orange-500",
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const words = text.split(" ");
  let charIndexCounter = 0;

  return (
    <div className="flex flex-wrap justify-center gap-[0.25em] mb-8">
      <AnimatePresence>
        {words.map((word, i) => {
           const isHighlighted = highlight && word.toLowerCase().includes(highlight.toLowerCase());
           
           return (
            <div key={i} className="flex">
                {word.split("").map((char, j) => {
                    const currentDelay = charIndexCounter * delayMultiple;
                    charIndexCounter++;
                    return (
                        <motion.h1
                            key={j}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={framerProps}
                            transition={{ duration, delay: currentDelay }}
                            className={cn("drop-shadow-sm", className, isHighlighted && highlightClassName)}
                        >
                            {char}
                        </motion.h1>
                    );
                })}
            </div>
           );
        })}
      </AnimatePresence>
    </div>
  );
}
