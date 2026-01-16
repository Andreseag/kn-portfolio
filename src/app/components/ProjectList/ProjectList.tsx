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
        className="projects-list grid grid-cols-1 gap-10 md:gap-20 p-8">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={`/proyectos/${project.slug}`}
            aria-label={`Ver proyecto ${project.title}`}
            className="project-card relative flex items-center justify-center overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all ease-in z-0" />

            {/* Texto */}
            <div className="absolute z-10 text-center">
              <h3 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-white">
                {project.title}
              </h3>
              <p className="text-sm text-white underline">Ver proyecto</p>
            </div>

            {/* Imagen */}
            <img
              src={project.image}
              alt={`Proyecto ${project.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.a>
        ))}
      </section>
    </div>
  );
};

export default ProjectList;
