import Accordion from "../Accordeon/Accordeon";
import {
  accordionItemsDesign,
  accordionItemsEjection,
} from "../Accordeon/data/accordion";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const ServicesDescription = () => {
  return (
    <div className="py-20 lg:py-60">
      <div className="services-description__list">
        <div id="services-description" className="services-description ">
          <section className="services-description__container py-14 lg:py-30 px-8">
            <div className="service-element flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="service-element__description text-black w-full md:w-2/5">
                <div>Servicios</div>
                <h3 className="text-6xl sm:text-7xl lg:text-9xl mb-6">
                  Diseño
                </h3>
                <p className=" lg:text-lg lg:leading-8">
                  El proceso de diseño se encuentra conformado por dos etapas,
                  cada una atiende exigencias de diferentes escalas y está
                  compuesta por elementos particulares.
                </p>
              </div>
              <div className="service-element__accordion w-full md:w-3/5">
                <Accordion items={accordionItemsDesign} />
              </div>
            </div>
          </section>
          <section className="services-description py-14 lg:py-30 px-8">
            <div className="service-element flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="service-element__description text-black w-full md:w-2/5">
                <div>Servicios</div>
                <h3 className="text-6xl sm:text-7xl lg:text-9xl mb-6">
                  Ejecución de obra
                </h3>
                {/* <p className="text-lg leading-8">
              El proceso de diseño se encuentra conformado por dos etapas, cada
              una atiende exigencias de diferentes escalas y está compuesta por
              elementos particulares.
            </p> */}
              </div>
              <div className="service-element__accordion w-full md:w-3/5">
                <Accordion items={accordionItemsEjection} />
              </div>
            </div>
          </section>
        </div>
      </div>

      <PhotoGallery />
    </div>
  );
};

export default ServicesDescription;
