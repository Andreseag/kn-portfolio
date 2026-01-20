"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export const useScrollTo = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = useCallback(
    (id: string) => {
      // 1. Si ya estamos en el home
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      // 2. Si estamos en una subpágina (proyectos/slug, etc.)
      else {
        // Navegamos al home con el hash en la URL
        // Next.js manejará el scroll al ID automáticamente al cargar si el ID existe
        router.push(`/#${id}`);
      }
    },
    [pathname, router],
  );

  return { scrollToElement };
};
