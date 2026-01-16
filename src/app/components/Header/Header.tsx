import { motion, AnimatePresence, Variants } from "motion/react";
import Logo from "../Logo";
import { HamburgerButton } from "../HamburgerButton";
import { useEffect, useState } from "react";

const links = [
  "Inicio",
  "Proyectos",
  "Servicios",
  "Sobre el estudio",
  "Agenda una sesión",
];

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      // tiempo entre aparición de cada hijo
      staggerChildren: 0.16,
      // retraso antes de empezar a animar hijos
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      // invierte el stagger al salir para que desaparezcan en orden inverso
      staggerChildren: 0.16,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 12, transition: { duration: 0.18 } },
  hover: {
    scale: 1.03,
    x: 4,
    transition: { type: "spring", stiffness: 400, damping: 18 },
  },
  tap: { scale: 0.98 },
};

const Header = () => {
  const [open, setOpen] = useState(false);

  // bloquear scroll cuando el menú esté abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="header flex justify-between">
      <div className="header__logo absolute top-0 w-full flex justify-center mt-12">
        <motion.div
          className="header__container absolute top-0 w-11/12 flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Logo />
          <HamburgerButton
            open={open}
            setOpen={setOpen}
            className="z-50 bg-transparent cursor-pointer"
          />
        </motion.div>
      </div>

      {/* menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-black opacity-85 h-full w-full absolute top-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.9, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}>
            <motion.nav
              className="flex flex-col items-center justify-center h-full space-y-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              // opcional: poner role nav para accesibilidad
              role="navigation"
              aria-label="Menú principal">
              {links.map((label) => (
                <motion.a
                  href="#"
                  className="text-white text-4xl transition-colors hover:text-red-500"
                  key={label}
                  onClick={() => setOpen(false)}
                  variants={itemVariants}>
                  {label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
