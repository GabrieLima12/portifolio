import { Language } from "./language";

export function Navbar () {
    return (
        <nav className="p-3 h-max-[60px] bg-dark-blue text-slate-50">
            <div className="flex justify-between">
                <h1>Gabriel Lima</h1>

                <ul className="flex gap-3">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Habilidades</a>
                    </li>
                    <li>
                        <a href="#">Projetos</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                    <li>
                        {/* <Language /> */}
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}