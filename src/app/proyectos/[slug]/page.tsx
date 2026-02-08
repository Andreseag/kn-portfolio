// import Footer from "@/app/components/Footer/Footer";
// import Header from "@/app/components/Header/Header";
// import ProjectDescription from "@/app/components/ProjectDescription/ProjectDescription";
// import ProjectGallery from "@/app/components/ProjectGallery/ProjectGallery";
// import ProjectHero from "@/app/components/ProjectHero/ProjectHero";

// // Estos datos vendrían de tu archivo de data o de una API
// const projectData = {
//   title: "Casa GV",
//   category: "Vivienda Unifamiliar",
//   image:
//     "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_1.webp",
//   // El texto tal cual lo tienes, usando backticks (`) para que respete los saltos de línea
//   description: `La Casa GV, situada en un lote compacto y entre medianeras en un contexto urbano residencial de gran densidad, prioriza la seguridad, privacidad y continuidad interior-exterior. El proyecto invierte la tipología estándar de viviendas de dos plantas: los dormitorios están en la planta baja, ofreciendo privacidad, y el área social se encuentra en la planta alta, conectada con terrazas ajardinadas.

// Los patios verdes, interconectados en ambos niveles, aseguran la ventilación y la iluminación, además de aportar privacidad y sostenibilidad. Los materiales nobles como el hormigón y la madera, junto con el verde, crean una paleta armoniosa y duradera.

// Información del proyecto
// Arquitecto: Ezequiel Pérez Villalba
// Superficie construida: 185 m2
// Años construcción: 2022
// Calculo Estructural: Ing. Cristian del Grecco`,
// };

// const imagenesProyecto = [
//   "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_1.webp",
//   "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_3.webp",
//   "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Obra_4.webp",
//   "https://epvarquitectura.com.ar/wp-content/uploads/2024/06/obra-6.webp",
//   // ... más imágenes
// ];

// const page = () => {
//   return (
//     <>
//       {/* Header */}
//       <Header />
//       {/* Hero */}
//       <ProjectHero
//         category="Remodelación"
//         title="Casa GV"
//         image="https://epvarquitectura.com.ar/wp-content/uploads/2024/06/Portada-1.webp"
//       />
//       {/* 2. Descripción con columnas automáticas */}
//       <ProjectDescription content={projectData.description} />
//       <ProjectGallery title="Imágenes" images={imagenesProyecto} />
//       <ProjectGallery title="Planos y esquemas" images={imagenesProyecto} />
//       <ProjectGallery title="Renders" images={imagenesProyecto} />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default page;

import { projectsData } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header/Header";
import ProjectHero from "@/app/components/ProjectHero/ProjectHero";
import ProjectDescription from "@/app/components/ProjectDescription/ProjectDescription";
import ProjectGallery from "@/app/components/ProjectGallery/ProjectGallery";
import Footer from "@/app/components/Footer/Footer";

// Genera las rutas estáticas en tiempo de compilación para mejor SEO/Velocidad
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  // Buscamos el proyecto en nuestra data local
  const project = projectsData.find((p) => p.slug === slug);

  // Si el slug no existe en nuestra data, mostramos error 404
  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <ProjectHero
        category={project.category}
        title={project.title}
        image={project.heroImage}
      />

      <ProjectDescription content={project.description} />

      {/* Pasamos los arrays específicos a cada galería */}
      <ProjectGallery title="Imágenes" images={project.gallery} />

      {project.plans && (
        <ProjectGallery title="Planos y esquemas" images={project.plans} />
      )}

      {project.renders && (
        <ProjectGallery title="Renders" images={project.renders} />
      )}

      <Footer />
    </>
  );
}
