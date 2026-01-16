"use client";
import { useEffect, useState } from "react";
import Logo from "../Logo";

const AgendCalendar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="agend-calendar py-24 px-10 bg-black">
      <div className="agend-calendar__container">
        <div className="agend-calendar__title">
          <h2 className="text-9xl text-center text-[#a5925f] mb-12 mt-4">
            Agendá una sesión
          </h2>
          <p className="text-3xl text-center text-white">
            Ayudamos a familias a construir su vivienda en terreno propio.
          </p>
        </div>

        <div className="calendar mt-4">
          {/* Solo renderizamos el widget si el componente ya se montó en el cliente */}
          {mounted ? (
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/andreseag/15min"
              style={{ minWidth: "320px", height: "700px" }}></div>
          ) : (
            // Un div vacío con la misma altura para evitar saltos visuales (CLS)
            <div style={{ minWidth: "320px", height: "700px" }}></div>
          )}
        </div>

        <div className="agend-calendar__logo flex justify-center mt-10">
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default AgendCalendar;
