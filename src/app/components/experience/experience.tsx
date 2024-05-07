import ExperienceGrid from "./experience-grid";

const Experience = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 h-[80vh]">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Experiencia
          </h2>
          <ExperienceGrid />
        </div>
      </div>
    </section>
  );
};

export default Experience;
