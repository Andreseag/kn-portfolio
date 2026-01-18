"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Navegación
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    );
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
    );

  // Cerrar con la tecla Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="w-full px-4 py-20 bg-white flex flex-col items-center">
      <div className="max-w-7xl mb-10 w-full flex items-center gap-4">
        {/* whitespace-nowrap evita que el texto salte de línea si el contenedor se achica */}
        <span className="text-black font-semibold text-sm whitespace-nowrap">
          {title}
        </span>

        {/* flex-1 hace que el div crezca para ocupar todo el espacio disponible */}
        <div className="flex-1 hidden md:block h-px bg-black/20"></div>
      </div>

      <div className="w-full max-w-7xl flex lg:grid lg:grid-cols-3 overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
        {images.map((src, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative overflow-hidden shrink-0 aspect-square w-[85vw] md:w-[45vw] lg:w-full snap-center cursor-zoom-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}>
            <img
              src={src}
              alt={`Vista ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 select-none">
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 text-white text-4xl font-light hover:text-neutral-400 z-110 cursor-pointer">
              ×
            </button>

            {/* Botón Anterior */}
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-10 text-white text-4xl font-extralight hover:text-neutral-400 z-110 p-4 cursor-pointer">
              ‹
            </button>

            {/* Imagen Principal */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center p-4">
              <img
                src={images[selectedIndex]}
                alt="Fullscreen"
                className="max-w-full max-h-full object-contain"
              />

              {/* Contador */}
              <div className="absolute -bottom-10 text-neutral-500 text-sm tracking-widest uppercase">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Botón Siguiente */}
            <button
              onClick={showNext}
              className="absolute right-4 md:right-10 text-white text-4xl font-extralight hover:text-neutral-400 z-110 p-4 cursor-pointer">
              ›
            </button>

            {/* Background click para cerrar */}
            <div
              className="absolute inset-0"
              onClick={() => setSelectedIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
