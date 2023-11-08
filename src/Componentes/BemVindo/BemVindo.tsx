import style from './BemVindo.module.css';


function BemVindo() {
    const handleContactClick = () => {
        window.location.href = 'https://contate.me/eduardocarneiro';
    };
    return (
        <body>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <div className={style.textContainer}>
                        <h1>Bem Vindo!</h1>
                        <h2 className={style.h2}>
                            Navegue pelo portfólio e explore os
                            projetos que tenho orgulho de apresentar.
                            Se tem alguma pergunta ou ideia de colaboração,
                            não hesite em entrar em contato. Estou sempre disposto a novos desafios e oportunidades .
                        </h2>
                        <h2 className={style.h2}>
                            Espero que você aproveite sua visita e que meus projetos possam
                            inspirar e cativar você. Obrigado por estar aqui e por fazer
                            parte da minha jornada como desenvolvedor web frontend.
                        </h2>
                    </div>
                    <div className={style.divA}>
                        <a href="https://contate.me/eduardocarneiro" className={style.buttonA} onClick={handleContactClick}>ENTRAR EM CONTATO</a>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default BemVindo;