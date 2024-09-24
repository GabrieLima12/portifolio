import { projects } from "../data/projects";

export default function Projects () {
    return (
        <section id="projects" className="bg-backGray dark:bg-gray-900 dark:text-slate-50 py-20 px-10">
            <h2 className="text-xl text-center font-semibold pb-10">Projetos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {projects.map(project => (
                    <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col sm:flex-row p-5 gap-5">
                        <div className="flex flex-col gap-5 items-center text-center w-full sm:w-1/2">
                            <h3 className="text-xl font-semibold">{project.name}</h3>
                            <img className="w-64 h-40 rounded-lg" src={project.imgUrl} alt={project.name} />
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-center w-full sm:w-1/2">
                            <p>{project.description}</p>
                            <div className="flex gap-5">
                                <a href={project.link} target="_blank">
                                    <button className="bg-black text-slate-50 dark:bg-gray-600 p-2 rounded-sm">GitHub</button>
                                </a>
                                {
                                    project.projectLink !== null && project.projectLink !== "" && (
                                        <a href={project.projectLink} target="_blank">
                                            <button className="bg-black text-slate-50 dark:bg-gray-600 p-2 rounded-sm">Acesse o Projeto</button>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}