import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact () {
    return (
        <section id="contact" className="dark:bg-gray-800 dark:text-slate-50 py-20 px-10 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-xl font-semibold pb-5">Contato</h2>
            <div className="flex flex-col text-sm gap-5">
                <span className="flex items-center gap-5">
                    <IoMdMail size={35} />
                    <p>gabrieldocouto.1207@gmail.com</p>
                </span>
                <span className="flex items-center justify-center gap-5">
                    <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank"><FaLinkedin size={35} /></a>
                    <a href="https://github.com/GabrieLima12" target="_blank"><FaGithub size={35} /></a>
                    <a href="https://wa.me/5562984572930?text=Ol%C3%A1%2C%20tudo%20bom%3F%0A%0AEntro%20em%20contato%20pelo%20link%20disponibilizado%20em%20seu%20portif%C3%B3lio%2C%20poderiamos%20conversar%3F" target="_blank"><FaWhatsapp size={35} /></a>
                </span>
            </div>
        </section>
    )
}