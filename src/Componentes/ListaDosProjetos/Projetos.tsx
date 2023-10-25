
import style from './projetos.module.css';

type ProjetosProps = {
    projetos: {
        titulo: string,
        descricao: string,
        link: string,
    }
}

function ListaProjetos({ projetos }: ProjetosProps) {
    return (
            <div className={style.caixaProjetos}>
            <h2 className={style.titulo}>{projetos.titulo}</h2>
            <p>Descrição: {projetos.descricao}</p>
            <a href={projetos.link} target="_blank" rel="noopener noreferrer">
                Link do Projeto: {projetos.titulo}
            </a>
        </div>
    )
}

export default ListaProjetos;
