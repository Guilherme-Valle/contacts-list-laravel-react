import styles from './Presentation.module.css'

function Presentation() {
    return (
        <div className={styles.Presentation}>
            <h1>Lista de contatos</h1>
            <h2>Você pode criar, editar e deletar as pessoas e seus respectivos contatos.</h2>
            <h2>Repositório: &nbsp;
                <a href='https://github.com/Guilherme-Valle/contact-list-laravel-react' target='_blank' rel='noreferrer'>
                     https://github.com/Guilherme-Valle/contact-list-laravel-react
                </a>
            </h2>
        </div>
    )
}

export default Presentation