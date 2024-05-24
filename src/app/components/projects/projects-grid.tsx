import projects from "@/../public/projects.json";
import ProjectItem from "./projects-item";

const ProjectsGrid = () => {
  return (
    <section id="proyectos" className="py-12 md:py-24 lg:py-32">
      <div className="grid lg:gap-6 gap-12 lg:grid-cols-2 grid-cols-1 lg:p-0 p-4">
        {projects.map((project) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsGrid;
