import React from "react";

const AboutMe = () => {
  return (
    <section className="about-me py-24 px-10 bg-black">
      <div className="about-me__container flex gap-24">
        <div className="about-me__info w-1/2">
          <span>ESTUDIO DE ARQUITECTURA</span>
          <h2 className="text-9xl text-[#a5925f] mb-8 mt-4">Sobre mí</h2>
          <p className="mb-14 text-lg">
            <span className="text-[#a5925f] font-bold">Larson Rodriguez</span>{" "}
            es arquitecto titulado y dirige su propio estudio, Larson Rodriguez
            | Arquitectura e Interiores. Su trabajo se centra en el desarrollo
            integral de proyectos y en la ejecución de obras de vivienda
            unifamiliar y vivienda colectiva, con especial atención a la
            funcionalidad, el detalle constructivo y el diseño centrado en las
            necesidades del usuario.
          </p>

          <div className="mb-14">
            <h6 className="text-lg mb-4 font-bold">
              Algunos hitos de su carrera:
            </h6>
            <div className="text-lg">
              <p>
                2014 | Colaboración en estudios de arquitectura dedicados al
                diseño residencial y a la ejecución de obra.
              </p>
              <p>
                2015 | Pasantía en un despacho internacional, con foco en
                proyectos de interiorismo y detalle constructivo.
              </p>
              <p>
                2016 | Cofundador de un estudio orientado al diseño experimental
                y a la materialización de pequeñas obras.
              </p>
              <p>
                2017 | Fundador y promotor de un colectivo de arquitectura que
                organiza ciclos de charlas y encuentros profesionales para
                generar espacios de discusión y nuevos vínculos entre
                arquitectos.
              </p>
              <p>
                2019–2022 | Jefe de obras en empresa constructora, responsable
                de coordinación de oficio, control de calidad y entrega de
                proyectos residenciales en altura.
              </p>
              <p>
                2018–Actualidad | Dirección del estudio Larson Rodriguez |
                Arquitectura e Interiores, donde se desarrollan proyectos
                residenciales y comerciales, desde la idea conceptual hasta la
                obra terminada.
              </p>
            </div>
          </div>

          <div className="mb-14 text-lg">
            <h6 className="mb-4 font-bold">Equipo y red de talentos:</h6>
            <p>Arq. — Coordinación de proyectos y documentación.</p>
            <p>Arq. — Dirección de obra y supervisión técnica.</p>
            <p>Diseñador/a — Proyecto y desarrollo de interiores.</p>
            <p>
              Colaboradores externos: constructores, especialistas en
              instalaciones y artesanos locales.
            </p>
          </div>

          {/* Contact button */}
          <button className="h-20 cursor-pointer flex justify-center items-center text-white border px-10 rounded-full transition-all ease-in hover:opacity-70 hover:underline">
            ADENDA UNA SESIÓN
          </button>
        </div>
        <div className="about-me__photo">
          <img
            src="https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Ezequiel-Perez-Villalba-1.webp"
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
