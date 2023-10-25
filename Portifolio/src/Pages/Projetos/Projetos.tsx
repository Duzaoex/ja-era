import { NavLink } from "react-router-dom";
import { listaDosProjetos } from "../../Componentes/ListaDosProjetos/ListaDeProjetos";
import ListaProjetos from "../../Componentes/ListaDosProjetos/Projetos";
import style from './Projetos.module.css';

function Projetos() {
  return (
    <div>
      <h1 className={style.title}>Projetos</h1>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>
      {listaDosProjetos.map((project) => (
        <ListaProjetos
          key={project.titulo}
          projetos={project}
        />
      ))}
    </div>
  )
}

export default Projetos;