import ExperienceItem from "./experience-item";

const ExperienceGrid = () => {
  const experiences = [
    {
      id: 1,
      puesto: "Software Engineer",
      empresa: "Acme Inc.",
      responsabilidades:
        "Desarrolló y mantuvo aplicaciones web complejas utilizando React, Node.js y PostgreSQL. Colaboró con equipos multifuncionales para entregar características de alta calidad a tiempo,Implementó las mejores prácticas en pruebas, organización de código e implementación.",
    },
    {
      id: 2,
      puesto: "Software Engineer",
      empresa: "Acme Inc.",
      responsabilidades: `Developed and maintained complex web applications using React, 
      Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver 
      high-quality features on time. Implemented best practices in testing, code 
      organization, and deployment.`,
    },
    {
      id: 2,
      puesto: "Software Engineer",
      empresa: "Acme Inc.",
      responsabilidades: `Developed and maintained complex web applications using React, 
      Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver 
      high-quality features on time. Implemented best practices in testing, code 
      organization, and deployment.`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {experiences.map((elm) => {
        return <ExperienceItem key={elm.id} experience={elm} />;
      })}
    </div>
  );
};

export default ExperienceGrid;
