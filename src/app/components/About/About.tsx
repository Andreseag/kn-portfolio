"use client";
import styles from "./About.module.scss";
import { useState } from "react";
import { motion } from "motion/react";
import useMousePosition from "../../hooks/useMousePosition";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <section className={styles.main}>
      <h2 className="absolute text-7xl p-20 text-[#afa18f]">
        Arquitectura <br /> de pertenencia
      </h2>

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          Afrontamos nuestros proyectos enfocados en diseñar espacios que
          reflejen las necesidades y los deseos de las personas que lo
          habitarán.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          ¡Hola! Soy Karen Narvaez, arquitecto y director general de EPV Estudio
          de Arquitectura en la ciudad de Rosario, Argentina. Cuento con
          exelencia
        </p>
      </div>
    </section>
  );
}
