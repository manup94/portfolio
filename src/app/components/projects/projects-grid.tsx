import projects from "@/../public/projects.json";
import ProjectItem from "./projects-item";

const ProjectsGrid = () => {
  return (
    <section id="proyectos" className="py-12 md:py-24 lg:py-32">
      <div className="">
        <div className="grid gap-6 grid-cols-2">
          {projects.map((project) => {
            return <ProjectItem key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
