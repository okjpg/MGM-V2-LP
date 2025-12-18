import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#FDFBF7] font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Left side - Year/Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-orange-500/10 border border-stone-100 z-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-4 w-4 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30"
                />
              </motion.div>

              {/* Year title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block text-xl md:pl-20 md:text-6xl font-bold bg-gradient-to-r from-stone-400 to-stone-300 bg-clip-text text-transparent"
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Right side - Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:hidden block text-3xl mb-6 text-left font-bold bg-gradient-to-r from-stone-500 to-stone-400 bg-clip-text text-transparent"
              >
                {item.title}
              </motion.h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline line background */}
        <div
          style={{
            height: Math.max(0, height - 100) + "px",
          }}
          className="absolute md:left-[2.05rem] left-[2.05rem] top-0 overflow-hidden w-[3px] bg-gradient-to-b from-stone-200/50 via-stone-200 to-stone-200/50 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_85%,transparent_100%)]"
        >
          {/* Animated progress line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-orange-500 via-amber-500 to-orange-400 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
