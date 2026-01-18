import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AccordionItem } from "./data/accordion";

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-black border-b border-black/10">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-t border-black/10">
            {/* Header / Trigger */}
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between py-10 px-4 text-left cursor-pointer group">
              <span className="text-2xl md:text-4xl font-light transition-colors group-hover:text-[#a5925f]">
                {item.title}
              </span>
              <span className="text-3xl font-extralight">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Content Area */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}>
                  <div className="pb-10 px-4 max-w-3xl">
                    {item.content
                      .trim()
                      .split("\n") // Dividimos por línea individual
                      .filter((line) => line.trim() !== "") // Eliminamos líneas vacías
                      .map((line, i) => {
                        const isListItem = line.trim().startsWith("+");

                        if (isListItem) {
                          return (
                            <li
                              key={i}
                              className="list-none text-base md:text-lg text-neutral-600 mb-2 flex items-start">
                              {/* Icono de viñeta personalizado (opcional) */}
                              <span className="text-[#a5925f] mr-3 font-bold">
                                +
                              </span>
                              {line.replace("+", "").trim()}
                            </li>
                          );
                        }

                        return (
                          <p
                            key={i}
                            className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6 last:mb-0">
                            {line.trim()}
                          </p>
                        );
                      })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
