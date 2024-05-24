import { FC } from "react";
import Next from "@/app/icons/next";
import Prisma from "@/app/icons/prisma";
import React from "@/app/icons/react";
import Tailwind from "@/app/icons/tailwind";
import Sanity from "@/app/icons/sanity";
import Badget from "./badget";
import TypeScript from "@/app/icons/typescript";

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

const icons: any = {
  Next,
  React,
  TypeScript,
  Tailwind,
  Prisma,
  Sanity,
};

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
  console.log(experience);
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
        <div className="flex flex-row flex-wrap gap-x-3">
          {experience.stack.length > 0 &&
            experience.stack.map((stackItem, index) => {
              const IconComponent = icons[stackItem];
              return (
                <Badget key={index} text={stackItem} icon={<IconComponent />} />
              );
            })}
        </div>
      </div>
      <div className="md:text-lg text-base">
        <p>{experience.responsabilidades}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
