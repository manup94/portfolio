import experiences from "@/../public/experiences.json";
import ExperienceItem from "./experience-item";

const ExperienceGrid = () => {
  return (
    <section className="flex items-center px-4 py-12 md:py-24 md:h-[80vh] h-[120vh]">
      <div
        id="experiencia"
        className="text-white space-y-4 grid md:gap-6 gap-12 md:grid-cols-2 grid-cols-1"
      >
        {experiences.map((elm) => {
          return <ExperienceItem key={elm.id} experience={elm} />;
        })}
      </div>
    </section>
  );
};

export default ExperienceGrid;
