import { useState } from "react"
import { useParams, Link } from "react-router-dom"

const LanguageDetails = () => {

    const { language_id } = useParams()
    const [language, setLanguage] = useState({})

    const loadLanguageDetails = () => {

        fetch(`http://localhost:5005/api/details/${language_id}`)
            .then(response => response.json())
            .then(language => setLanguage(language))
    }

    loadLanguageDetails()

    return (
        <main>
            <Link to="/">Inicio</Link>
            <h1>Estos son los detalles de {language.name}</h1>
            <hr />

            <img src={language.logo} alt='imagen' style={{dsplay: 'inline-block', width: '20%'}} />

            <article style={{dsplay: 'inline-block', width: '40%'}}>
                <ul>
                    <li><p>{language.yearOfCreation}</p></li>
                    <li><p>{language.currentVersion}</p></li>
                    <li><p>{language.paradigmUsed}</p></li>
                    <li><p>{language.features}</p></li>
                    <li><p>{language.pros}</p></li>
                    <li><p>{language.cons}</p></li>
                </ul>
            </article>
        </main>
    )

}

export default LanguageDetails