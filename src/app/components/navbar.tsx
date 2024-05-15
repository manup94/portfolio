import Link from "next/link";
import Linkedin from "../icons/linkedin";
import Github from "../icons/github";
import Email from "../icons/email";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-6 px-2.5 py-5">
      <div className="flex items-center gap-3">
        <Link
          className="hover:scale-110 transition-all duration-300 ease-in-out"
          href="mailto:mperezpradosjose@gmail.com"
        >
          <Email />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300 ease-in-out"
          href="https://github.com/manup94"
        >
          <Github />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300 ease-in-out"
          href="https://www.linkedin.com/in/manuelperezprado/"
        >
          <Linkedin />
        </Link>
      </div>
      <div className="flex gap-6  justify-around">
        <ul className="flex gap-3 font-semibold text-white">
          <li className="hover:text-[#BFD7EA]">
            <Link href="#">Sobre mi</Link>
          </li>
          <li className="hover:text-[#BFD7EA]">
            <Link href="#">Experiencia</Link>
          </li>
          <li className="hover:text-[#BFD7EA]">
            <Link href="#">Estudios</Link>
          </li>
          <li className="hover:text-[#BFD7EA]">
            <Link href="#">Proyectos</Link>
          </li>
        </ul>
        <div className="text-white">switch</div>
      </div>
    </nav>
  );
};

export default Navbar;