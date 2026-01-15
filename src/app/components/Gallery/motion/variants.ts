import { Variants } from "motion/react";

export const fadeVariants: Variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};
