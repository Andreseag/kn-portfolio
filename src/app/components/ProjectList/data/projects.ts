export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Casa Moderna - LOTE 58",
    slug: "casa-moderda-lote-58",
    image: "/images/projects/01/IMG-20260113-WA0267.jpg",
  },
  {
    id: 2,
    title: "Consignataria - VANGUARDIA",
    slug: "consignataria-vanguardia",
    image: "/images/projects/02/IMG-20260113-WA0128.jpg",
  },
  {
    id: 3,
    title: "Piscina - HLG",
    slug: "piscina-hlg",
    image: "/images/projects/03/1000001110.jpg",
  },
  {
    id: 4,
    title: "Portada - Finca La Gabriela",
    slug: "portada-finca-la-gabriela",
    image: "/images/projects/04/IMG-20241205-WA0003.jpg",
  },
  // {
  //   id: 5,
  //   title: "Remodelación - HACARITAMA",
  //   slug: "remodelacion-hararitama",
  //   image:
  //     "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Portada-1.webp",
  // },
];
