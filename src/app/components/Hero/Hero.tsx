import { motion, AnimatePresence, Variants } from "motion/react";

const Hero = () => {
  return (
    <section className="hero h-screen flex items-end justify-center w-full bg-[url(https://epvarquitectura.com.ar/wp-content/uploads/2024/06/25-1.webp)]">
      <div className="hero__container pb-6 w-11/12 flex justify-between items-end">
        <motion.h1
          className="text-9xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Larsson <br></br> Rodriguez
        </motion.h1>
        <motion.h2
          className="text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Estudio de Arquitecura
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
