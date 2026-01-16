import Accordion from "../Accordeon/Accordeon";

const ServicesDescription = () => {
  return (
    <div id="services-description" className="services-description py-60">
      <section className="services-description__container py-30 px-8">
        <div className="service-element flex justify-between items-center gap-8">
          <div className="service-element__description text-black w-2/5">
            <div>Servicios</div>
            <h3 className="text-9xl mb-6">Diseño</h3>
            <p className="text-lg leading-8">
              El proceso de diseño se encuentra conformado por dos etapas, cada
              una atiende exigencias de diferentes escalas y está compuesta por
              elementos particulares.
            </p>
          </div>
          <div className="service-element__accordion w-3/5">
            <Accordion />
          </div>
        </div>
      </section>
      <section className="services-description py-28 px-8">
        <div className="service-element flex justify-between items-center gap-8">
          <div className="service-element__description text-black w-2/5">
            <div>Servicios</div>
            <h3 className="text-9xl mb-6">Ejecución de obra</h3>
            {/* <p className="text-lg leading-8">
              El proceso de diseño se encuentra conformado por dos etapas, cada
              una atiende exigencias de diferentes escalas y está compuesta por
              elementos particulares.
            </p> */}
          </div>
          <div className="service-element__accordion w-3/5">
            <Accordion />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDescription;
