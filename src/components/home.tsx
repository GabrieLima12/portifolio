import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from "../assets/gabriel.png";
import cv from "../assets/Gabriel Lima do Couto Curriculo.pdf";
import useIsMobile from "./use-is-mobile";

export default function Home () {

    const isMobile = useIsMobile();

    return (
        <section id="home" className="bg-backGray dark:bg-gray-900 dark:text-slate-50 px-10 h-screen flex flex-col gap-[50px] items-center justify-center lg:flex-row">
            {isMobile && 
                <div className="block">
                    <img className="max-size-[300px] mt-10 rounded-full" src={photo} alt="gabriel-photo" />
                </div>
            }
            <div className="max-w-[550px] flex flex-col gap-5 items-center lg:items-start">
                <h1 className="text-3xl sm:text-5xl font-bold text-center lg:text-start">Desenvolvedor Full Stack</h1>
                <p className="">Olá me chamo Gabriel, tenho 20 anos e sou um profissional na área do desenvolvimento, fico feliz em ter você aqui! <br /> Fique a vontade para olhar meus projetos e minhas habilidades.</p>
                <span className="flex gap-2">
                    <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank"><FaLinkedin size={35} /></a>
                    <a href="https://github.com/GabrieLima12" target="_blank"><FaGithub size={35} /></a>
                </span>
                <a className="w-fit" href={cv} download>
                    <button className="bg-black text-slate-50 dark:bg-gray-600 p-2 rounded-sm">Currículo</button>
                </a>
            </div>
            {!isMobile && 
                <div className="block">
                    <img className="size-[300px] rounded-full" src={photo} alt="gabriel-photo" />
                </div>
            }
        </section>
    )
}