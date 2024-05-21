import educations from "@/../public/education.json";
import Ironhack from "../icons/ironhack";
import Link from "next/link";

const EducationGrid = () => {
  return (
    <section
      id="estudios"
      className="flex justify-center items-center gap-6 py-12 md:py-24 lg:py-32 h-[80vh]"
    >
      <Ironhack />
      <div className="w-1/2 flex flex-col gap-2 text-white">
        <div>
          <h2 className="text-xl font-bold">{educations[0].carrera}</h2>
          <div className="flex gap-6 items-center">
            <div className="flex gap-3 items-center">
              <h3 className="text-lg font-semibold">
                {educations[0].institucion}
              </h3>
              <p className="text-sm">
                {educations[0].fechaInicio} - {educations[0].fechaFinal}
              </p>
            </div>
            <Link
              href="https://www.credential.net/aeaf3f99-785a-45ad-bac3-b2874cfd0b2b#gs.9chho5"
              className="text-white text-sm bg-blue-400 hover:bg-blue-600 hover:scale-105 transition-all duration-300 ease-in-out rounded-md px-1 py-1.5"
            >
              Ver certificado
            </Link>
          </div>
        </div>
        <div className="text-lg">
          <p>{educations[0].descripcion}</p>
        </div>
      </div>
    </section>
  );
};

export default EducationGrid;
