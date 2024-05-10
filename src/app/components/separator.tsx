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
      className="flex flex-col mx-auto justify-center items-center font-semibold text-xl text-white group"
    >
      <p>{text}</p>
      <ChevronDown className="w-7 transition-transform duration-300 group-hover:scale-110" />
    </Link>
  );
};

export default Separator;
