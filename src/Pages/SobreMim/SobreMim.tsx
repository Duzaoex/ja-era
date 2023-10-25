import { NavLink } from 'react-router-dom';
import style from './Sobremim.module.css';

function SobreMim() {
    return (
        <div className={style.sobremim}>
            <h1 className={style.title}>Sobre mim</h1>      <div>
                <nav>

                    <NavLink to="/">Home</NavLink>

                </nav>
            </div>
            <text className={style.text}>texto a definir</text>
        </div>
    )
};

export default SobreMim;