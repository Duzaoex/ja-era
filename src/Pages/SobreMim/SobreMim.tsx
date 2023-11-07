import { NavLink } from 'react-router-dom';
import style from './Sobremim.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function SobreMim() {
    return (
        <body>
            <header className={style.header}>
                <h1 className={style.title}>Sobre mim</h1>
            </header>
            <nav className={style.nav}>
                <NavLink to="/" className={style.navLink}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Home
                </NavLink>
            </nav>
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