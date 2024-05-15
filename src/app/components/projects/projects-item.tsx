import Link from "next/link";

const ProjectItem = ({}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View Project</span>
      </Link>
      <img
        alt="Project 1"
        className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
        height={400}
        src="/placeholder.svg"
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width={600}
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
          Project 1
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          A brief description of Project 1.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
