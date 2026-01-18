import { motion, Variants } from "motion/react";
import { projects } from "./data/projects";
import TextScrolling from "../About/components/TextScrolling";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectList = () => {
  return (
    <div id="projects" className="projects">
      {/* Text */}
      <TextScrolling txt="Proyectos" />
      <section
        id="projects-list"
        className="projects-list grid grid-cols-1 gap-16 md:gap-20 p-4 md:p-8">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={`/proyectos/${project.slug}`}
            aria-label={`Ver proyecto ${project.title}`}
            // 1. Añadimos aspect-video (o el ratio de tus fotos) para reservar espacio
            // 2. h-full o una altura mínima asegura que el grid no colapse
            className="project-card relative flex items-center justify-center overflow-hidden aspect-video w-full bg-neutral-900"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />

            {/* Texto */}
            <div className="absolute z-20 text-center px-4">
              <h3 className="mb-4 text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-white underline underline-offset-4 opacity-80">
                Ver proyecto
              </p>
            </div>

            {/* Imagen */}
            <img
              src={project.image}
              alt={`Proyecto ${project.title}`}
              // 3. Importante: h-full y w-full para llenar el espacio reservado
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.a>
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
