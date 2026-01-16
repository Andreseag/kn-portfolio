import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { accordionItems } from "./data/accordion";

const Accordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-black">
      {accordionItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="py-8 px-4 border-t last:border-b">
            {/* Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between text-left text-lg font-medium cursor-pointer"
              aria-expanded={isOpen}>
              <span className="lg:text-3xl">{item.title}</span>
              <span className="text-4xl">{isOpen ? "−" : "+"}</span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden">
                  {item.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mt-4 text-gray-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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
