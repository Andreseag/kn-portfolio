"use client";

import styles from "./About.module.scss";
import { useState } from "react";
import { motion } from "motion/react";
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
    <section className={styles.main}>
      <h2 className="absolute text-8xl p-20 text-[#010101]">
        Arquitectura <br />
        <RotateWords
          text="Rotate"
          words={["Para habitar", "Con corazón", "De pertenencia"]}
        />
      </h2>

      <motion.div
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
      </motion.div>

      <div className={styles.body}>
        <p>
          ¡Hola! Soy Karen Narvaez, arquitecta y directora general de EPV
          Estudio de Arquitectura en la ciudad de Rosario, Argentina. <br />
          Cuento con un equipo de trabajo compuesto por profesionales de la
          arquitectura y nos caracterizamos por poner el corazón en cada uno de
          nuestros proyectos. Disfrutamos de cada detalle y vivimos apasionados
          por el diseño y la arquitectura.
        </p>
      </div>
    </section>
  );
}
