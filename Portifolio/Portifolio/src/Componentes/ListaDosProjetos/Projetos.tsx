type ProjetosProps = {
    projetos: {
        titulo: string,
        descricao: string,
        link: string,
    }
}

function ListaProjetos({ projetos }: ProjetosProps) {
    return (
        <>
            <div>
                <h2>Titulo</h2>{projetos.titulo}
                <p>Descricao</p>{projetos.descricao}
                <br></br><a href={projetos.link} target="_blank" rel="noopener noreferrer">
                    Link do Projeto iChoveu
                </a>
            </div>
        </>
    )
}
export default ListaProjetos;
