import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Presentation () {
    return (
        <main className="text-center text-slate-50">
            <div className="h-screen p-5">
                <h2>Gabriel Lima</h2>
                <h3>Olá, Sou Desenvolvedor Full Stack</h3>
                <ul className="flex pt-1 gap-3 items-center justify-center">
                    <li>
                        <a href="https://github.com/GabrieLima12" target="_blank">
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/gabrielimacouto/" target="_blank">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}