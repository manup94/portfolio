import experiences from "@/../public/experiences.json";
import ExperienceItem from "./experience-item";

const ExperienceGrid = () => {
  return (
    <section
      id="experiencia"
      className="w-full flex items-center py-12 md:py-24 h-[80vh] overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-white">
          <div className="grid md:gap-6 gap-12 md:grid-cols-2 grid-cols-1">
            {experiences.map((elm) => {
              return <ExperienceItem key={elm.id} experience={elm} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
