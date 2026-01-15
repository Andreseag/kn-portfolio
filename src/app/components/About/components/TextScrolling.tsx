// ScrollTextLeft.tsx
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

type Props = {
  txt?: string;
  /** Distancia a desplazar en unidades CSS (ej: "60vw", "300px"). */
  distance?: string;
  /** Alto de la sección (p. ej. "400px" o "60vh"). */
  height?: string;
};

export default function ScrollTextLeft({
  txt = "Texto centrado que se mueve a la izquierda",
  distance = "30vw",
  height = "400px",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  // El scroll se medirá respecto a la sección referenciada
  const { scrollYProgress } = useScroll({
    target: ref,
    // Ajusta cuándo empieza/termina el mapeo (puedes probar otras combinaciones)
    offset: ["start end", "end start"],
  });

  // Mapea 0 -> 1 del scroll a 0vw -> -distance (se mueve solo a la izquierda)
  const rawX = useTransform(scrollYProgress, [0, 1], ["0vw", `-${distance}`]);

  // Suavizamos la animación
  const x = useSpring(rawX, { stiffness: 80, damping: 22 });

  return (
    <section
      ref={ref}
      className="flex justify-center items-center overflow-hidden"
      style={{ height }}>
      <motion.h2
        style={{ x }}
        className="whitespace-nowrap text-center text-[130px] text-gray-950"
        // usa tamaño con Tailwind o inline style si prefieres px/rem
      >
        {txt}
      </motion.h2>
    </section>
  );
}
