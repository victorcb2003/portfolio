import { NavLink, Route, Routes } from 'react-router-dom'
import tableauSynthesePdf from './assets/TableauSynthese.pdf'
import './App.css'
import HomePage from './pages/HomePage'
import ParcoursPage from './pages/ParcoursPage'
import ProjetsPage from './pages/ProjetsPage'
import StageAlternancePage from './pages/StageAlternancePage'
import VeillePage from './pages/VeillePage'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <p className="kicker">Portfolio BTS SIO</p>
            <h1>Victor Combemorel-Bluntz</h1>
          </div>
          <nav className="nav" aria-label="Navigation principale">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/parcours">Parcours</NavLink>
            <NavLink to="/projets">Projets</NavLink>
            <NavLink to="/stage-alternance">Stage / Alternance</NavLink>
            <NavLink to="/veille">Veille</NavLink>
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parcours" element={<ParcoursPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/stage-alternance" element={<StageAlternancePage />} />
          <Route path="/veille" element={<VeillePage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 Victor Combemorel-Bluntz</p>
          <a href={tableauSynthesePdf} target="_blank" rel="noopener noreferrer">
            Voir le tableau de synthèse (PDF)
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
