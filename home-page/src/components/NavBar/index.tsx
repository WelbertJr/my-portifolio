import { useState } from "react";
import icon from "../../icons";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: "Projetos", section: "#projects" },
    { id: 2, text: "Tecnologias", section: "#technologies" },
    { id: 3, text: "Sobre mim ", section: "#aboutMe" },
  ];

  return (
    <header className="fixed w-full h-32 bg-black flex pl-32 max-[1069px]:pl-4 max-[1069px]:pr-4 items-center max-[768px]:pr-4 z-50">
      <div className="flex w-full max-w-[1920px] mx-auto items-center max-[768px]:justify-between">
        <a href="#" className="w-1/6 h-full">
          <img
            src="src/assets/logo.webp"
            alt="Logo da página"
            className="w-[100px] min-w-[100px] h-[128px] min-h-[128px] object-contain"
          />
        </a>
        <nav className="font-poppins text-white font-medium text-2xl h-full w-full max-[768px]:hidden">
          <ul className="flex items-center justify-center gap-24 max-[938px]:gap-8 w-full h-full">
            <li className="hover:scale-110 duration-1000">
              <a href="#projects">Projetos</a>
            </li>
            <li className="hover:scale-110 duration-1000">
              <a href="#technologies">Tecnologias</a>
            </li>
            <li className="hover:scale-110 duration-1000">
              <a href="#aboutMe">Sobre mim</a>
            </li>
          </ul>
        </nav>
        <div className="flex w-1/6 h-full gap-5 items-center max-[768px]:hidden">
          <a
            className="hover:scale-110 duration-1000"
            href="https://github.com/WelbertJr?tab=repositories"
            target="_blank"
          >
            <icon.FaGithub size="32px" title="GitHub" color="white" />
          </a>
          <a
            className="hover:scale-110 duration-1000"
            href="https://www.linkedin.com/in/welbert-junior/"
            target="_blank"
          >
            <icon.IoLogoLinkedin size="32px" title="Linkedin" color="white" />
          </a>
        </div>
        <div onClick={handleNav} className="flex md:hidden">
          {nav ? (
            <icon.AiOutlineClose
              size={38}
              title="Close"
              color="white"
              cursor="pointer"
              className="hover:scale-110 duration-1000 md:hidden"
            />
          ) : (
            <icon.TiThMenu
              size={42}
              title="Menu"
              color="white"
              cursor="pointer"
              className="hover:scale-110 duration-1000 md:hidden"
            />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed md:hidden right-0 top-32 z-50 w-[60%] h-full bg-black bg-opacity-95 ease-in-out duration-500 flex flex-col items-center gap-2"
              : "ease-in-out w-[60%] duration-500 fixed top-32 bottom-0 right-[-100%]"
          }
        >
          <li className="flex gap-4 rounded-lg p-4 w-[70%] hover:scale-110 duration-1000 justify-center cursor-pointer">
            <a
              className="hover:scale-110 duration-1000"
              href="https://github.com/WelbertJr?tab=repositories"
              target="_blank"
            >
              <icon.FaGithub size="32px" title="GitHub" color="white" />
            </a>
            <span className="font-poppins text-white font-medium text-2xl">
              GitHub
            </span>
          </li>
          <li className="flex gap-4 rounded-lg p-4 w-[70%] hover:scale-110 duration-1000 justify-center cursor-pointer">
            <a
              className="hover:scale-110 duration-1000"
              href="https://www.linkedin.com/in/welbert-junior/"
              target="_blank"
            >
              <icon.IoLogoLinkedin size="32px" title="Linkedin" color="white" />
            </a>
            <span className="font-poppins text-white font-medium text-2xl">
              Linkedin
            </span>
          </li>
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:scale-110 duration-1000  cursor-pointer font-poppins text-white font-medium text-2xl"
            >
              <a href={item.section}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
