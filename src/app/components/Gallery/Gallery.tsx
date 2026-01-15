import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sliderImages } from "./data/sliderImages";
import { fadeVariants } from "./motion/variants";

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4500); // tiempo entre imágenes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={sliderImages[index].id}
          src={sliderImages[index].src}
          alt={sliderImages[index].alt}
          className="absolute inset-0 h-full w-full object-cover"
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </section>
  );
};

export default ImageSlider;
