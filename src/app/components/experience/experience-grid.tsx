import experiences from "@/app/experiences.json";
import ExperienceItem from "./experience-item";

const ExperienceGrid = () => {
  return (
    <section
      id="experiencia"
      className="w-full py-12 md:py-24 lg:py-32 h-[80vh]"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-white">
          <div className="grid gap-6 grid-cols-2">
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
