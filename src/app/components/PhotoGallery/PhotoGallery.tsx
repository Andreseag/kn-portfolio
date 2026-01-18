import { motion } from "motion/react";

const photos = [
  {
    id: 1,
    src: "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_1.webp",
    title: "Cimientos",
  },
  {
    id: 2,
    src: "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_3.webp",
    title: "Estructura",
  },
  {
    id: 3,
    src: "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_4.webp",
    title: "Construcción",
  },
  {
    id: 4,
    src: "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/obra-6.webp",
    title: "Cubierta",
  },
  {
    id: 5,
    src: "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra-7.webp",
    title: "Planos",
  },
];

const PhotoGallery = () => {
  return (
    <section className="w-full px-4 bg-white">
      <div
        className="
          flex overflow-x-auto overflow-y-hidden gap-4 pb-6 
          lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0
          snap-x snap-mandatory scrollbar-hide
        ">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            // min-w-[85vw] asegura que en móvil se entienda que hay más fotos
            // md:min-w-0 para que en desktop respete el grid
            className="relative overflow-hidden group h-[596px] min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center shrink-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}>
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 text-white">
              {/* <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-70">
                Fase {index + 1}
              </p> */}
              <h3 className="text-xl font-light tracking-tight">
                {photo.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
