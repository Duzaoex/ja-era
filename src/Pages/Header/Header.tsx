import style from './Header.module.css';
import logo from '../../util/images/logoTransparent.png';

function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>Portfólio</h1>
            <img className={style.logo} src={logo} alt="logo"></img>
        </header>
    )
}

export default Header;