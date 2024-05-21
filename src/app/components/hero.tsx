import LocationIcon from "../icons/location";
import BikeIcon from "../icons/moto";
import Badget from "./experience/badget";
import TecnologyIcon from "../icons/tecnology";
import VideoGamesIcon from "../icons/videogames";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col mx-auto w-2/3 max-w-[600px] h-[80vh] justify-center text-white"
    >
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
      <div className="flex gap-3">
        <Badget text="Sevilla" icon={<LocationIcon />} />
        <Badget text="Tecnologia" icon={<TecnologyIcon />} />
        <Badget text="Videojuegos" icon={<VideoGamesIcon />} />
        <Badget text="Motociclismo" icon={<BikeIcon />} />
      </div>
    </section>
  );
};

export default Hero;
