import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero h-screen flex items-end justify-center w-full bg-cover bg-[url(https://epvarquitectura.com.ar/wp-content/uploads/2024/06/25-1.webp)] bg-no-repeat">
      {/* 1. OVERLAY (Capa inferior) */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/90 via-black/40 to-transparent z-0 pointer-events-none" />

      <div className="hero__container relative z-10 pb-6 w-11/12 gap-8 md:gap-0 flex flex-col md:flex-row justify-between md:items-end">
        <motion.h1
          className="text-white text-6xl sm:text-8xl text-md-9xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Larsson <br></br> Rodriguez
        </motion.h1>
        <motion.h2
          className="text-white text-4xl text-md-5xl md:text-end"
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
