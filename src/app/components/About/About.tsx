"use client";

import { useState } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { RotateWords } from "./components/RotateWords";

// Tipado del hook si no lo tiene
interface MousePosition {
  x: number | null;
  y: number | null;
}

export default function About() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const xNum = x ?? 0;
  const yNum = y ?? 0;

  const size = isHovered ? 400 : 40;

  return (
    <section className="py-24 lg:py-48">
      <h2 className="text-6xl lg:text-8xl p-10 md:p-20 pt-0 text-[#010101]">
        Arquitectura <br />
        <RotateWords
          text="Rotate"
          words={["Para habitar", "Con corazón", "De pertenencia"]}
        />
      </h2>

      {/* <motion.div
        className={styles.mask}
        animate={{
          webkitMaskPosition: `${xNum - size / 2}px ${yNum - size / 2}px`,
          webkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          ¡Hola! Soy Karen Narvaez, arquitecta y directora general de EPV
          Estudio de Arquitectura en la ciudad de Rosario, Argentina. <br />
          Cuento con un equipo de trabajo compuesto por profesionales de la
          arquitectura y nos caracterizamos por poner el corazón en cada uno de
          nuestros proyectos. Disfrutamos de cada detalle y vivimos apasionados
          por el diseño y la arquitectura.
        </p>
      </motion.div> */}

      <div className="flex justify-center mt-0 lg:mt-20 px-12">
        <div className="md:w-1/3">
          <p className="text-lg md:text-2xl text-black text-center leading-8 font-light mb-8">
            ¡Hola! Soy Larson Rodríguez, arquitecto. Trabajo de forma directa en
            cada proyecto y cuento con un equipo de colaboradores que me
            acompaña en las distintas etapas del proceso. Nos caracteriza el
            compromiso, la atención al detalle y una forma de trabajar cercana,
            donde cada decisión se toma con dedicación y criterio profesional.
          </p>
          <p className="text-lg md:text-2xl text-black text-center leading-8 font-light">
            Abordo cada proyecto con el objetivo de diseñar espacios que
            respondan a las necesidades reales y a la forma de vivir de quienes
            los habitan, buscando soluciones funcionales, claras y pensadas a
            medida.
          </p>
        </div>
      </div>
    </section>
  );
}
