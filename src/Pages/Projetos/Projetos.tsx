import { NavLink } from "react-router-dom";
import { listaDosProjetos } from "../../Componentes/ListaDosProjetos/ListaDeProjetos";
import ListaProjetos from "../../Componentes/ListaDosProjetos/Projetos";
import style from './Projetos.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Projetos() {
  return (
    <div>
      <header className={style.header}>
        <h1 className={style.title}>Projetos</h1>
      </header>
      <div>
        <nav className={style.nav}>
          <NavLink to="/" className={style.navLink}>
            <FontAwesomeIcon icon={faArrowLeft} /> Home
          </NavLink>
        </nav>
      </div>
      <div className={style.containerProjetos}>
        {listaDosProjetos.map((project) => (
          <ListaProjetos
            key={project.titulo}
            projetos={project}
          />
        ))}
      </div>
    </div>
  )
}

export default Projetos;