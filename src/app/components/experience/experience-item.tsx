import { FC } from "react";

export interface Experience {
  id: number;
  puesto: string;
  empresa: string;
  stack: string[];
  responsabilidades: string;
  fechaInicio: string;
  fechaFinal: string;
}

export interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className="text-xl font-bold">{experience.puesto}</h2>
        <div className="flex gap-3 items-center">
          <h3 className="text-lg font-semibold">{experience.empresa}</h3>
          <p className="text-sm">
            {experience.fechaInicio} - {experience.fechaFinal}
          </p>
        </div>
        <div></div>
      </div>
      <div className="text-lg">
        <p>{experience.responsabilidades}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
