import { listaDosProjetos } from "../../Componentes/ListaDosProjetos/ListaDeProjetos";
import ListaProjetos from "../../Componentes/ListaDosProjetos/Projetos";

function Projetos() {
    return (
        <>
            <div>
                {listaDosProjetos.map((project) => (
                    <ListaProjetos
                        key={project.titulo}
                        projetos={project}
                    />
                ))}
            </div>
        </>
    )
}

export default Projetos;