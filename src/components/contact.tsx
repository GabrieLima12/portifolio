import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact () {
    return (
        <section id="contact" className="dark:bg-gray-800 dark:text-slate-50 py-20 px-10 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-xl font-semibold pb-5">Contato</h2>
            <div className="flex flex-col xl:flex-row gap-5">
                <span className="flex items-center gap-5">
                    <IoMdMail size={35} />
                    <p>gabrieldocouto.1207@gmail.com</p>
                </span>
                <span className="flex items-center gap-5">
                    <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank"><FaLinkedin size={35} /></a>
                    <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank">https://www.linkedin.com/in/gabrielimacouto/</a>
                </span>
                <span className="flex items-center gap-5">
                    <a href="https://github.com/GabrieLima12" target="_blank"><FaGithub size={35} /></a>
                    <a href="https://github.com/GabrieLima12" target="_blank">https://github.com/GabrieLima12</a>
                </span>
            </div>
        </section>
    )
}