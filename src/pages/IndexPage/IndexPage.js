import {Link} from 'react-router-dom'

const IndexPage = () => {
    return (
        <main>
            <h1>Bienvenido a los Lenguajes de Programación más usados</h1>
            <hr />
            <Link to="/galeria">Ver galeria</Link>

        </main>
    )
}

export default IndexPage