import { FC } from "react";

export interface BadgetProps {
  icon: JSX.Element;
  text?: string;
  className?: string;
}

const Badget: FC<BadgetProps> = ({ icon, text, className }) => {
  return (
    <div
      className={`${className} mt-4 gap-2 flex flex-row items-center rounded-md bg-slate-200/10 px-2 py-1`}
    >
      {icon}
      <span className="text-white text-sm font-semibold">{text}</span>
    </div>
  );
};

export default Badget;
