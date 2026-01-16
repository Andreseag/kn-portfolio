export const useScrollTo = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      // Calculamos la posición para tener control total
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return { scrollToElement };
};
