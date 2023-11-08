import { NavLink } from "react-router-dom";
import { listaDosProjetos } from "../../Componentes/ListaDosProjetos/ListaDeProjetos";
import ListaProjetos from "../../Componentes/ListaDosProjetos/Projetos";
import style from './Projetos.module.css';

function Projetos() {
  return (
    <div>
      <nav className={style.nav}>
        <button className={style.buttonStyle}>
          <NavLink to="/" >Home</NavLink>
        </button>
      </nav>
      <header className={style.header}>
        <h1 className={style.title}>Projetos</h1>
      </header>
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