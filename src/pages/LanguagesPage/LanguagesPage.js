import {useState} from 'react'
import {Link} from 'react-router-dom'

import './LanguagesPage.css'

const LanguagesPage = () => {

    const [languages, setLanguages] = useState( [] )  

    function loadLanguages() {

        fetch('http://localhost:5005/api/languages')
            .then(res => res.json())
            .then(allLanguages => setLanguages(allLanguages))
    }

    loadLanguages()

    return (
        <main>
            <Link to="/">Inicio</Link>
            <h1>Esta es la lista</h1>
            <hr />
            {languages.map(eachLanguage => {
                return (
                    <Link to={`/detalles/${eachLanguage._id}`}>
                        <article className='language-card'>
                            <img src={eachLanguage.logo} alt='imagen'></img>
                            <h3>{eachLanguage.name}</h3>
                        </article>
                    </Link>
                    )
            })}
        </main>
    )
}

export default LanguagesPage