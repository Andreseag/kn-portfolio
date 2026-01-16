import { motion, AnimatePresence, Variants } from "motion/react";

const Hero = () => {
  return (
    <section className="hero h-screen flex items-end justify-center w-full bg-[url(https://epvarquitectura.com.ar/wp-content/uploads/2024/06/25-1.webp)]">
      <div className="hero__container pb-6 w-11/12 gap-8 md:gap-0 flex flex-col md:flex-row justify-between md:items-end">
        <motion.h1
          className="text-7xl sm:text-8xl text-md-9xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Larsson <br></br> Rodriguez
        </motion.h1>
        <motion.h2
          className="text-4xl text-md-5xl md:text-end"
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
