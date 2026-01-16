import React from "react";

interface CustomButtonProps {
  txt: string;
  variant?: "light" | "dark";
  // Agregamos la prop onClick como opcional
  onClick?: () => void;
}

const CustomButton = ({
  txt,
  variant = "dark",
  onClick,
}: CustomButtonProps) => {
  const baseStyles =
    "h-20 cursor-pointer flex justify-center items-center px-10 rounded-full transition-all ease-in hover:opacity-70 hover:underline border";

  const variants = {
    dark: "bg-transparent text-white border-white",
    light: "bg-transparent text-black border-black", // Corregido 'blck'
  };

  return (
    <button
      onClick={onClick} // Conectamos la prop al evento nativo
      className={`${baseStyles} ${variants[variant]}`}>
      {txt}
    </button>
  );
};

export default CustomButton;
