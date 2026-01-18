// "use client";
// import { useEffect, useState } from "react";
import Logo from "../Logo";

const AgendCalendar = () => {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <section
      id="agend-calendar"
      className="agend-calendar py-12 md:py-24 px-6 md:px-10 bg-black">
      <div className="agend-calendar__container">
        <div className="agend-calendar__title">
          <h2 className="text-6xl md:text-9xl text-center text-[#a5925f] mb-6 md:mb-12 mt-4">
            Agenda una sesión
          </h2>
          <p className="text-lg md:text-3xl text-center text-white">
            Ayudamos a familias a construir su vivienda en terreno propio.
          </p>
        </div>

        <div className="calendar mt-4">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/rodriguezlarsson11/30min?hide_gdpr_banner=1%22"
            style={{ minWidth: "320px", height: "700px" }}></div>
        </div>

        <div className="agend-calendar__logo flex justify-center mt-16 md:mt-10">
          <Logo className=" w-38 md:w-48" />
        </div>
      </div>
    </section>
  );
};

export default AgendCalendar;
