"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0,
    );
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1,
    );

  // Bloquear scroll en v4
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <section className="w-full px-4 py-10 md:py-20 bg-white flex flex-col items-center">
      {/* Header con línea adaptable mejorada */}
      <div className="max-w-7xl mb-10 w-full flex items-center gap-4">
        <span className="text-black font-semibold text-xs md:text-sm uppercase tracking-[0.3em] whitespace-nowrap">
          {title}
        </span>
        <div className="grow hidden md:block h-px bg-black/10"></div>
      </div>

      {/* Grid de imágenes cuadradas */}
      <div className="w-full max-w-7xl flex lg:grid lg:grid-cols-3 overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide">
        {images.map((src, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative overflow-hidden shrink-0 aspect-square w-[85vw] md:w-[45vw] lg:w-full snap-center cursor-zoom-in group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}>
            <img
              src={src}
              alt={`${title} - ${index}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 select-none backdrop-blur-sm">
            {/* Fondo que cierra al hacer click */}
            <div
              className="absolute inset-0 z-0"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Controles del Lightbox */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-8 text-white text-4xl font-extralight hover:text-neutral-400 z-110 cursor-pointer p-2">
              ×
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-10 text-white text-6xl font-thin hover:text-neutral-400 z-110 cursor-pointer p-4 transition-colors">
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-10 text-white text-6xl font-thin hover:text-neutral-400 z-110 cursor-pointer p-4 transition-colors">
              ›
            </button>

            {/* Contenedor de la imagen actual */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full h-full max-w-6xl max-h-[85vh] flex flex-col items-center justify-center p-4 pointer-events-none">
              <img
                src={images[selectedIndex]}
                className="max-w-full max-h-full object-contain pointer-events-auto shadow-2xl"
                alt="Fullscreen"
              />
              <div className="absolute -bottom-12 text-neutral-500 text-[10px] tracking-[0.4em] uppercase font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectGallery;
