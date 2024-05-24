import EducationGrid from "./components/education-grid";
import ExperienceGrid from "./components/experience/experience-grid";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProjectsGrid from "./components/projects/projects-grid";
import Separator from "./components/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <Separator text="Experiencia" />
      <ExperienceGrid />
      <Separator text="Estudios" />
      <EducationGrid />
      <Separator text="Proyectos" />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
