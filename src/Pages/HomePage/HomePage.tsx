import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import style from './Home.module.css';

function HomePage() {
  return (
    <body className={style.body}>
      <Header />
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <NavLink to="/" className={style.li}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/SobreMim" className={style.li}>Sobre Mim</NavLink>
          </li>
          <li>
            <NavLink to="/formacao" className={style.li}>Formaação</NavLink>
          </li>
          <li>
            <NavLink to="/projetos" className={style.li}>Projetos</NavLink>
          </li>
        </ul>
      </nav>
    </body>
  )
}

export default HomePage;


