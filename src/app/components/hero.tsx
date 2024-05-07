const Hero = () => {
  return (
    <section className="flex flex-col mx-auto w-2/3 max-w-[600px] h-[600px] justify-center  text-white">
      <h1 className="text-6xl font-bold">
        ✌🏼¡Hola!, soy{" "}
        <span className="bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">
          Manuel
        </span>
        .
      </h1>
      <h2 className="text-4xl font-semibold">Desarrollador Frontend</h2>
      <span className="text-xl">
        +1 Año de experiencia en equipos multidisciplinarios y Freelance, mi
        enfoque equilibra la estética visual y la funcionalidad para ofrecer
        experiencias de usuario excepcionales.
      </span>
    </section>
  );
};

export default Hero;
