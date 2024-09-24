import java from "../assets/java-original.svg";
import sqlDeveloper from "../assets/sqldeveloper-original.svg";
import sonarQube from "../assets/sonarqube-original.svg";
import javaScript from "../assets/javascript-original.svg";
import typeScript from "../assets/typescript-original.svg";
import tailwindCss from "../assets/tailwindcss-original.svg";
import spring from "../assets/spring-original.svg";
import react from "../assets/react-original.svg";

export default function AboutMe () {
    return (
        <section id="about-me" className="dark:bg-gray-800 dark:text-slate-50 py-20 px-10 flex flex-col md:flex-row gap-5 items-start justify-around">
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold pb-5">Sobre mim</h2>
                <p className="w-full md:w-3/4">Sou um desenvolvedor apaixonado por solucionar desafios e sempre focado em entender e atingir os objetivos dos projetos em que atuo. Combinando experiência prática e uma busca contínua por aprimoramento, gosto de aplicar o que aprendi para entregar resultados consistentes. Comunicação clara, colaboração e resolução de problemas são elementos-chave que guiam meu trabalho diário, sempre em busca de evolução e impacto positivo nas equipes e projetos.</p>
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold pb-5">Habilidades</h2>
                <span className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-center text-sm items-center justify-items-center">
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={java} alt="java-img" />
                        Java
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={spring} alt="spring-img" />
                        Spring Framework
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={sqlDeveloper} alt="sqlDeveloper-img" />
                        Oracle DB
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={sonarQube} alt="sonarQube-img" />
                        SonarQube
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={react} alt="react-img" />
                        React
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={tailwindCss} alt="tailwindCss-img" />
                        Tailwind CSS
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={javaScript} alt="javaScript-img" />
                        JavaScript
                    </p>
                    <p className="flex flex-col items-center gap-2">
                        <img className="size-14" src={typeScript} alt="typeScript-img" />
                        TypeScript
                    </p>
                </span>
            </div>
        </section>
    )
}