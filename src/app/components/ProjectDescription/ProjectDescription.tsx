"use client";

import { motion } from "motion/react";

interface ProjectDescriptionProps {
  content: string;
}

const ProjectDescription = ({ content }: ProjectDescriptionProps) => {
  // Dividimos el contenido por líneas para procesarlo
  const lines = content.trim().split("\n");

  // Buscamos el índice donde comienza la "Información del proyecto"
  const techIndex = lines.findIndex((line) =>
    line.toLowerCase().includes("información del proyecto")
  );

  // Separamos la narrativa de la ficha técnica
  const narrative = techIndex !== -1 ? lines.slice(0, techIndex) : lines;
  const technicalData = techIndex !== -1 ? lines.slice(techIndex + 1) : [];

  return (
    <section className="w-full py-20 pb-10 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        {/* Columna Izquierda: Memoria Descriptiva (Ocupa 7/12) */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          {narrative
            .filter((line) => line.trim() !== "")
            .map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6 font-light">
                {paragraph.trim()}
              </p>
            ))}
        </motion.div>

        {/* Columna Derecha: Ficha Técnica (Ocupa 5/12) */}
        <motion.div
          className="lg:col-span-5 lg:pl-10 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-10 lg:pt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          <h4 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8 font-semibold">
            Información del proyecto
          </h4>

          <div className="space-y-6">
            {technicalData
              .filter((line) => line.trim() !== "")
              .map((info, i) => {
                // Separamos el label del valor si hay dos puntos (ej: "Fotografías: Ana Delgado")
                const [label, ...value] = info.split(":");

                return (
                  <div
                    key={i}
                    className="flex flex-col border-b border-neutral-100 pb-1 last:border-0">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">
                      {value.length > 0 ? label.trim() : "Dato"}
                    </span>
                    <span className="text-base md:text-lg text-neutral-800 font-medium italic">
                      {value.length > 0 ? value.join(":").trim() : label.trim()}
                    </span>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDescription;
