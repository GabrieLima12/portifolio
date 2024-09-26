import { useState } from "react";
import { FaRegMoon, FaSun, FaBars } from "react-icons/fa";

interface NavBarProps {
    onChange: () => void;
    darkMode: boolean;
}

export default function NavBar ({ onChange, darkMode } : NavBarProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function openMenu () {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white dark:bg-gray-800 dark:text-slate-50 flex w-full px-10 py-5 items-center justify-between z-[100] shadow-md fixed">
            <h2 className="text-xl font-bold">Gabriel Lima</h2>
            
            <ul className="hidden lg:flex items-center gap-5">
                <li className="flex items-center">
                    <button className="focus:outline-none" onClick={onChange}>{darkMode ? <FaSun /> : <FaRegMoon />}</button>
                </li>
                <li className="hover:border-b hover:border-b-black dark:hover:border-b-white border-transition" style={{ transition: "border-bottom .3s ease"}} ><a href="#home">Início</a></li>
                <li className="hover:border-b hover:border-b-black dark:hover:border-b-white border-transition" style={{ transition: "border-bottom .3s ease"}} ><a href="#about-me">Sobre mim</a></li>
                <li className="hover:border-b hover:border-b-black dark:hover:border-b-white border-transition" style={{ transition: "border-bottom .3s ease"}} ><a href="#projects">Projetos</a></li>
                <li className="hover:border-b hover:border-b-black dark:hover:border-b-white border-transition" style={{ transition: "border-bottom .3s ease"}} ><a href="#contact">Contato</a></li>
            </ul>
            
            <div className="lg:hidden flex gap-5">
                <button className="focus:outline-none" onClick={onChange}>{darkMode ? <FaSun size={20} /> : <FaRegMoon size={20} />}</button>
                <FaBars size={20} className="hover:cursor-pointer" onClick={openMenu}/>
            </div>

            <div className={`absolute lg:hidden top-16 left-0 w-full bg-white dark:bg-gray-800 flex flex-col items-center gap-6 text-xl transform transition-transform ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                <a className="w-full" onClick={openMenu} href="#home">
                    <li className="list-none text-center p-4">
                        Início
                    </li>
                </a>
                <a className="w-full" onClick={openMenu} href="#about-me">
                    <li className="list-none text-center p-4">
                        Sobre mim
                    </li>
                </a>
                <a className="w-full" onClick={openMenu} href="#projects">
                    <li className="list-none text-center p-4">
                        Projetos
                    </li>
                </a>
                <a className="w-full" onClick={openMenu} href="#contact">
                    <li className="list-none text-center p-4">
                        Contato
                    </li>
                </a>
            </div>
        </nav>
    )
}