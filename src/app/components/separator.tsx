import { FC } from "react";
import ChevronDown from "../icons/chevron-down";
import Link from "next/link";

export interface SeparatorProps {
  text: string;
}

const Separator: FC<SeparatorProps> = ({ text }) => {
  return (
    <Link
      href={`#${text.toLowerCase()}`}
      aria-label={text}
      className="flex w-40 p-2 transition-all duration-300 ease-in-out flex-col mx-auto justify-center items-center font-semibold text-xl rounded-xl text-white group  hover:bg-white/5 hover:scale-110 shadow-lg ring-1 ring-black/5"
    >
      <p>{text}</p>
      <ChevronDown className="w-7" />
    </Link>
  );
};

export default Separator;
