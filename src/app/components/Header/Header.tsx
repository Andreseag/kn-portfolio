"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import Logo from "../Logo";
import { HamburgerButton } from "../HamburgerButton";
import { useScrollTo } from "@/app/hooks/useScrollTo";

const links = [
  { label: "Inicio", id: "inicio" },
  { label: "Proyectos", id: "projects" },
  { label: "Servicios", id: "services-description" },
  { label: "Sobre el estudio", id: "about-me" },
  { label: "Agenda una sesión", id: "agend-calendar" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { scrollToElement } = useScrollTo();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      scrollToElement(id);
    }, 450);
  };

  return (
    <header className="relative w-full z-100">
      {/* Overlay con gradiente vertical */}
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-black/80 via-black/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full flex justify-center py-8 px-8 md:px-20 z-110">
        <motion.div
          className="w-full flex justify-between items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Logo className="w-32 md:w-40" />
          <HamburgerButton
            open={open}
            setOpen={setOpen}
            className="cursor-pointer"
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {open && (
          /* El overlay se mantiene 'fixed' para cubrir la visual actual del usuario */
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}>
            <motion.nav
              className="flex flex-col items-center space-y-10 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit">
              {links.map((link) => (
                <motion.div key={link.id} variants={itemVariants}>
                  <button
                    className="text-white text-3xl md:text-4xl font-light cursor-pointer hover:text-[#a5925f] transition-colors tracking-tight"
                    onClick={() => handleNavClick(link.id)}>
                    {link.label}
                  </button>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
