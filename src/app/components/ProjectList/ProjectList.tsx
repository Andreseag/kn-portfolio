import { projects } from "./data/projects";

const ProjectList = () => {
  return (
    <section className="projects-list grid grid-cols-1 gap-20 p-8">
      {projects.map((project) => (
        <a
          key={project.id}
          href={`/proyectos/${project.slug}`}
          aria-label={`Ver proyecto ${project.title}`}
          className="project-card relative flex items-center justify-center overflow-hidden transition-opacity duration-300 ease-in-out hover:opacity-85">
          <div className="absolute z-10 text-center">
            <h3 className="mb-4 text-4xl md:text-5xl lg:text-6xl text-white">
              {project.title}
            </h3>
            <p className="text-sm text-white underline">Ver proyecto</p>
          </div>

          <img
            src={project.image}
            alt={`Proyecto ${project.title}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </section>
  );
};

export default ProjectList;
