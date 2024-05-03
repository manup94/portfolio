import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex pt-2.5 bg-gradient-to-r from-[#FEFFFE] to-[#0B3954]">
      <figure className="w-1/3 flex justify-center">
        <Image
          className=""
          width={300}
          height={300}
          alt="Manuel picture"
          src="/hero-pic.png"
        />
      </figure>
      <div className="w-2/3 flex justify-center flex-col px-2.5 gap-2.5">
        <div className="w-2/3 mx-auto">
          <h1 className="text-5xl font-bold">¡Hola!, soy Manuel.</h1>
          <h2 className="text-3xl font-semibold">Desarrollador Frontend</h2>
          <span>
            +1 Año de experiencia en equipos multidisciplinarios y Freelance, mi
            enfoque equilibra la estética visual y la funcionalidad para ofrecer
            experiencias de usuario excepcionales.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
