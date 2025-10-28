import { motion } from "motion/react";

export function HamburgerButton({ open, setOpen, className = "" }) {
  // Ajusta estos valores si cambias el tamaño del icono
  const width = 28; // ancho en px (w-7 ≈ 28px)
  const height = 24; // alto en px (h-6 ≈ 24px)
  const lineHeight = 2; // grosor en px (h-[2px])
  const offset = 6; // cuánto se mueven top/bottom hacia el centro (ajusta si cambias height)

  const transition = { duration: 0.28, ease: "easeInOut" };

  const topVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: offset },
  };

  const middleVariant = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0.8 },
  };

  const bottomVariant = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -offset },
  };

  return (
    <button
      type="button"
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className={`inline-flex items-center justify-center p-2 rounded-md text-current ${className}`}>
      {/* contenedor relativo controla el tamaño del icono */}
      <div
        className="relative"
        style={{ width: `${width}px`, height: `${height}px` }}
        aria-hidden>
        {/* top line */}
        <motion.span
          layout
          variants={topVariant}
          animate={open ? "open" : "closed"}
          transition={transition}
          className="absolute left-0 block bg-current"
          style={{
            height: `${lineHeight}px`,
            width: "100%",
            top: 0,
            transformOrigin: "center",
          }}
        />

        {/* middle line (centrado verticalmente) */}
        <motion.span
          layout
          variants={middleVariant}
          animate={open ? "open" : "closed"}
          transition={transition}
          className="absolute left-0 block bg-current"
          style={{
            height: `${lineHeight}px`,
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            transformOrigin: "center",
          }}
        />

        {/* bottom line */}
        <motion.span
          layout
          variants={bottomVariant}
          animate={open ? "open" : "closed"}
          transition={transition}
          className="absolute left-0 block bg-current"
          style={{
            height: `${lineHeight}px`,
            width: "100%",
            bottom: 0,
            transformOrigin: "center",
          }}
        />
      </div>
    </button>
  );
}
