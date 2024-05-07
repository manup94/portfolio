import { FC } from "react";

export interface Experience {
  puesto: string;
  empresa: string;
  responsabilidades: string;
}

export interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div>
      <div>
        <h2>{experience.puesto}</h2>
        <h3>{experience.empresa}</h3>
      </div>
      <div className="text-xl">
        <p>{experience.responsabilidades}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
