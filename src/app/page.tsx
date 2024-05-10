import ExperienceGrid from "./components/experience/experience-grid";
import Hero from "./components/hero";
import Separator from "./components/separator";

export default function Home() {
  return (
    <div>
      <Hero />
      <Separator text="Experiencia" />
      <ExperienceGrid />
      <Separator text="Estudios" />
    </div>
  );
}
