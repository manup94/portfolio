import { FC } from "react";

export interface BadgetProps {
  icon: JSX.Element;
  text?: string;
}

const Badget: FC<BadgetProps> = ({ icon, text }) => {
  return (
    <div className="w-24 mt-4 flex items-center rounded-md bg-slate-200/10 px-2 py-1">
      {icon}
      <p className="text-white font-semibold">{text}</p>
    </div>
  );
};

export default Badget;
