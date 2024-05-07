import { NavLink } from "react-router-dom";
import style from './Home.module.css';
import BemVindo from "../../Componentes/BemVindo/BemVindo";

function HomePage() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.ul}>
          <button className={style.buttonStyle}>
            <NavLink to="/" >Home</NavLink>
          </button>
          <button className={style.buttonStyle}>
            <NavLink to="/SobreMim" >Sobre Mim</NavLink>
          </button>
          <button className={style.buttonStyle}>
            <NavLink to="/projetos" >Projetos</NavLink>
          </button>
        </div>
      </nav >
      <div>
        <BemVindo />
      </div>
      <footer className={style.footer}>Copyright© 2024 Eduardo Neris Carneiro</footer>
    </>
  )
}

export default HomePage;
