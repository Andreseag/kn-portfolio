"use client";

import { motion } from "motion/react";

interface ProjectHeroProps {
  title: string;
  category: string;
  image: string;
  location?: string;
}

const ProjectHero = ({
  title,
  category,
  image,
  location,
}: ProjectHeroProps) => {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-neutral-100">
      {/* Contenedor de la Imagen con Animación de entrada */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
        className="relative w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Overlay sutil inferior para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Información del Proyecto */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">
              {category} {location && `— ${location}`}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9]">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
