import { FC } from "react";
import Next from "@/app/icons/next";
import Prisma from "@/app/icons/prisma";
import React from "@/app/icons/react";
import Tailwind from "@/app/icons/tailwind";
import Sanity from "@/app/icons/sanity";
import TypeScript from "@/app/icons/typescript";
import node from "@/app/icons/node";
import Bootstrap from "@/app/icons/bootstrap";
import Handlebars from "@/app/icons/handlebars";
import Mongodb from "@/app/icons/mongodb";
import Strapi from "@/app/icons/strapi";
import Stripe from "@/app/icons/stripe";
import Badget from "../experience/badget";

export interface Project {
  id: number;
  name: string;
  stack: string[];
  imageUrl: string;
  description: string;
  url: string;
}
export interface ProjectItemProps {
  project: Project;
}

const icons: any = {
  Next,
  React,
  TypeScript,
  Tailwind,
  Prisma,
  Sanity,
  Mongodb,
  Strapi,
  Stripe,
  node,
  Bootstrap,
  Handlebars,
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="p-2.5 isolate aspect-video rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5">
      <div
        className="flex items-center justify-between
      "
      >
        <div className="w-2/3 flex">
          <h2 className="text-white text-xl font-bold">{project.name}</h2>
          {project.stack.map((stackItem, index) => {
            const IconComponent = icons[stackItem];
            return (
              <Badget key={index} text={stackItem} icon={<IconComponent />} />
            );
          })}
        </div>
        <div className="w-1/3">
          <img className="w-1/3" src={project.imageUrl} />
        </div>
      </div>
      <div>
        <p className="text-white text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
