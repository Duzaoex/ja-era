import React from 'react';
import style from './OQueFaco.module.css';

const OQueFaco: React.FC = () => {
    return (
        <section className={style.oQueFaco}>
            <h1 className={style.h11}>O que faço</h1>
            <p className={style.p}>Sou desenvolvedor web, trabalhando principalmente com tecnologias como TypeScript, JavaScript, React, Node.js e muito mais.</p>
            <div className={style.logos}>
                <h1 className={style.h12}>Stacks</h1>
                <img src="src/util/images/ts.png" alt="TypeScript" className={style.logo} />
                <img src="src/util/images/js.png" alt="Javascript" className={style.logo} />
                <img src="src/util/images/nodejs.png" alt="Node.js" className={style.logo} />
                <img src="src/util/images/html.png" alt="HTML5" className={style.logo} />
                <img src="src/util/images/css.png" alt="CSS3" className={style.logo} />
                <img src="src/util/images/87ee883f-4e47-41e0-a259-b9624e0ac45c-removebg-preview.png" alt="UI/UX" className={style.logo} />
            </div>
        </section>
    );
};

export default OQueFaco;
