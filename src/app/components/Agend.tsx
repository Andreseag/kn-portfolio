import { useScrollTo } from "@/app/hooks/useScrollTo";
import CustomButton from "./CutomButton/CutomButton";

const Agend = () => {
  const { scrollToElement } = useScrollTo();

  return (
    <section className="p-8 px-24 my-96 flex justify-between items-center">
      <h2 className="text-8xl text-black leading-28">
        Agenda una sesión para <br /> conversar sobre
        <span className="text-[#a5925f] mx-7">tu</span> <br /> proyecto
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
