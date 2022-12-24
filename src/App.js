import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import LanguagesPage from './pages/LanguagesPage/LanguagesPage'
import LanguageDetails from './pages/LanguageDetails/LanguageDetails'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container">
    <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<LanguagesPage />} />
        <Route path="/detalles/:language_id" element={<LanguageDetails />} />

    </Routes>
    
    </div>
  )
}

export default App;
