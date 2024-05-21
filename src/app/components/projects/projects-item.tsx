import { FC } from "react";
import Next from "@/app/icons/next";
import Prisma from "@/app/icons/prisma";
import React from "@/app/icons/react";
import Tailwind from "@/app/icons/tailwind";
import Sanity from "@/app/icons/sanity";
import TypeScript from "@/app/icons/typescript";
import Node from "@/app/icons/node";
import Bootstrap from "@/app/icons/bootstrap";
import Handlebars from "@/app/icons/handlebars";
import MongoDB from "@/app/icons/mongodb";
import Strapi from "@/app/icons/strapi";
import Stripe from "@/app/icons/stripe";
import Badget from "../experience/badget";
import Link from "next/link";

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
  MongoDB,
  Strapi,
  Stripe,
  Node,
  Bootstrap,
  Handlebars,
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <Link
      href={project.url}
      className="py-4 px-2.5 transition-all duration-300 ease-in-out hover:scale-105 flex flex-col gap-3 isolate aspect-video rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5"
    >
      <div
        className="flex gap-3 items-center justify-between
      "
      >
        <div className="w-1/4">
          <img className="max-w-22 mx-auto max-h-24" src={project.imageUrl} />
        </div>
        <div className="w-3/4 flex flex-col justify-between">
          <h2 className="text-white text-xl font-bold">{project.name}</h2>
          <div className="flex flex-wrap gap-x-3 ">
            {project.stack.map((stackItem, index) => {
              const IconComponent = icons[stackItem];
              return (
                <Badget key={index} text={stackItem} icon={<IconComponent />} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-2">
        <p className="text-white">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectItem;
