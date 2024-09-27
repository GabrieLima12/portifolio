import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import photo from "../assets/gabriel.png";
import cv from "../assets/Gabriel Lima do Couto Curriculo.pdf";
import useIsMobile from "./use-is-mobile";
import { useEffect } from "react";

export default function Home () {

    const isMobile = useIsMobile();
    
    useEffect(() =>{
        console.log(isMobile)
    }, [isMobile])

    return (
        <section id="home" className="bg-backGray dark:bg-gray-900 dark:text-slate-50 px-10 pt-12 h-screen flex flex-col gap-[50px] items-center justify-center sm:flex-row">
            <div className="max-w-[550px] flex flex-col gap-5 items-center lg:items-start">
                {isMobile && 
                    <div>
                        <img className="max-w-[200px] lg:max-w-[300px] mt-12 rounded-full" src={photo} alt="gabriel-photo" />
                    </div>
                }
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center lg:text-start">Desenvolvedor Full Stack</h1>
                <p className="text-sm text-justify">Olá me chamo Gabriel, tenho 20 anos e sou um profissional na área do desenvolvimento, fico feliz em ter você aqui! <br /> Fique a vontade para olhar meus projetos e minhas habilidades.</p>
                <span className="flex gap-4">
                    <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank"><FaLinkedin size={35} /></a>
                    <a href="https://github.com/GabrieLima12" target="_blank"><FaGithub size={35} /></a>
                    <a href="https://wa.me/5562984572930?text=Ol%C3%A1%2C%20tudo%20bom%3F%0A%0AEntro%20em%20contato%20pelo%20link%20disponibilizado%20em%20seu%20portif%C3%B3lio%2C%20poderiamos%20conversar%3F" target="_blank"><FaWhatsapp size={35} /></a>
                </span>
                <a className="w-fit" href={cv} download>
                    <button className="bg-black text-slate-50 dark:bg-gray-600 p-2 rounded-sm">Currículo</button>
                </a>
            </div>
            {!isMobile && 
                <div>
                    <img className="max-w-[200px] lg:max-w-[300px] rounded-full" src={photo} alt="gabriel-photo" />
                </div>
            }
        </section>
    )
}