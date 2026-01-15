"use client";
import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

export function RotateWords({
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string;
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-8xl tracking-tighter md:leading-[4rem] mt-8 w-fit flex items-center jusitfy-center gap-1.5">
      <AnimatePresence mode="wait">
        <motion.p
          className="text-[#A5925F]"
          // className="text-[#AB5849]"
          key={words[index]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}>
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
