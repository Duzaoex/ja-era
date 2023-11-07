import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import style from './Home.module.css';
import logoNome from '../../util/images/Captura_de_tela_de_2023-10-25_23-17-28-removebg-preview (1).png';

function HomePage() {
  return (
    <>
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
            <NavLink to="/projetos" className={style.li}>Projetos</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.imagem}>
        <img className={style.logoNome} src={logoNome} alt="logo completo" />
      </div>
      <footer className={style.footer}>Desenvolvido por Eduardo Neris Carneiro. 2023</footer>
    </>

  )
}

export default HomePage;


