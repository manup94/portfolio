import Experience from "./components/experience/experience";
import Hero from "./components/hero";
import Separator from "./components/separator";

export default function Home() {
  return (
    <div>
      <Hero />
      <Separator text="Experiencia" />
      <Experience />
      <Separator text="Estudios" />
    </div>
  );
}
