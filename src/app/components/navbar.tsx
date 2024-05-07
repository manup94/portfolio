import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-end gap-6 px-2.5 py-5">
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
    </nav>
  );
};

export default Navbar;
