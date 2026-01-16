import { useScrollTo } from "@/app/hooks/useScrollTo";
import CustomButton from "./CutomButton/CutomButton";

const Agend = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <section className="p-8 px-10 md:px-24 my-40 lg:my-96 gap-20 md:gap-4 flex flex-col lg:flex-row justify-between items-center">
      <h2 className="text-6xl lg:text-8xl text-black lg:leading-28 lg:w-1/2">
        Agenda una sesión para conversar sobre
        <span className="text-[#a5925f] mx lg:mx-7"> tu</span> proyecto
      </h2>
      <CustomButton
        txt="AGENDA UNA SESIÓN"
        variant="light"
        onClick={() => scrollToElement("agend-calendar")}
      />
    </section>
  );
};

export default Agend;
