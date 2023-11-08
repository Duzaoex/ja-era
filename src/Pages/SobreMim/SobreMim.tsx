import { NavLink } from 'react-router-dom';
import style from './Sobremim.module.css';


function SobreMim() {
    return (
        <body>
            <nav className={style.nav}>
                <button className={style.buttonStyle}>
                    <NavLink to="/" >Home</NavLink>
                </button>
            </nav>
            <header className={style.header}>
                <h1 className={style.title}>Sobre mim</h1>
            </header>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <div className={style.textContainer}>
                        <h2 className={style.h2}>
                            " Olá! Meu nome é Eduardo Neris Carneiro. Atualmente, estou em transição de carreira,
                            o que me trouxe de uma trajetória como personal trainer para o mundo do
                            desenvolvimento web front-end. A nova carreira começa quando me
                            matriculei na Trybe, onde adquiri habilidades valiosas e conhecimento técnico para
                            me destacar nesse campo em constante evolução. "
                        </h2>
                        <h2 className={style.h2}>
                            " Meu interesse pela tecnologia e pelo desenvolvimento web me
                            leva a aprender constantemente. E o comprometimento, ao mundo do desenvolvimento web, contribuindo para projetos
                            incríveis e inovadores. "
                        </h2>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default SobreMim;