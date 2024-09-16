import React from 'react';
import style from './Portifolio.module.css'; // Estilos personalizados

const Portifolio: React.FC = () => {
    return (
        <section className={style.portifolio}>
            <h1>Portfólio</h1>
            <div className={style.projectList}>
                <div className={style.project}>
                    <img src="/path/to/project1.jpg" alt="Projeto 1" className={style.projectImage} />
                    <h2>Projeto 1</h2>
                    <p>Descrição do projeto 1. Um projeto interessante que envolve várias tecnologias.</p>
                </div>
                <div className={style.project}>
                    <img src="/path/to/project2.jpg" alt="Projeto 2" className={style.projectImage} />
                    <h2>Projeto 2</h2>
                    <p>Descrição do projeto 2. Outro projeto interessante com detalhes e funcionalidades únicas.</p>
                </div>
                {/* Adicione mais projetos conforme necessário */}
            </div>
        </section>
    );
};

export default Portifolio;
