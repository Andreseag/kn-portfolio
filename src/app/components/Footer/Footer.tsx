import { useScrollTo } from "@/app/hooks/useScrollTo";
import CustomButton from "../CutomButton/CutomButton";

const Footer = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <footer className="bg-[#a5925f]">
      <div className="footer__container py-24 px-10">
        <div className="flex justify-between flex-col md:flex-row gap-20 md:gap-0">
          <div>
            <CustomButton
              txt="AGENDA UNA SESIÓN"
              variant="light"
              onClick={() => scrollToElement("agend-calendar")}
            />
            <h2 className="text-7xl md:text-8xl text-black md:leading-28 mt-20">
              Larsson Rodriguez
            </h2>
          </div>
          <div className="lg:text-2xl text-black flex flex-col gap-3 md:gap-6 items-end">
            <p>contacto@epvarquitectura.com.ar</p>
            <p>+54 9 3416 54-2001</p>
            <p>Rosario Santa Fé</p>
          </div>
        </div>
        <div className="text-black mt-20 flex items-center">
          <p className="md:w-[45%]">
            © EPV Arquitectura | Diseño web por Andrés Castro
          </p>
          <div className="w-full hidden md:block h-px bg-black"></div>
        </div>
        <div className="mt-8 text-black flex justify-end">
          <p className="text-sm">Politicas de privacidad</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
