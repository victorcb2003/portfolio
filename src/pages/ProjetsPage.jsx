import { CgFileDocument } from 'react-icons/cg'
import { FaRegPlayCircle, FaGithub } from 'react-icons/fa'

function ProjetsPage() {
  const projetsEcole = [
    {
      periode: '10/10/2024 → 01/12/2024',
      titre: 'AP1 — Site vitrine (entreprise fictive)',
      details:
        'Conception de la maquette, intégration HTML/CSS responsive et mise en valeur des services de l’entreprise.',
      techno: 'HTML, CSS',
      lien: '/AP1/main.html',
      documentation: '/Documentation/AP1_Documentation.pdf',
      github: 'https://github.com/victorcb2003/AP1',
    },
    {
      periode: '01/01/2025 → 10/04/2025',
      titre: 'TP Librairie PHP',
      details:
        'Développement d’une application de gestion de librairie numérique avec authentification et opérations CRUD.',
      techno: 'PHP, MySQL, SQL, Bootstrap',
      lien: '/book',
      documentation: '/Documentation/Book_Documentation.pdf',
      github: 'https://github.com/victorcb2003/book',
    },
    {
      periode: '15/09/2025 → 31/03/2026',
      titre: 'Projet E6 — Application mobile et web en équipe',
      details:
        'Conception front-end/back-end, intégration API et déploiement sur infrastructure interne avec gestion des accès.',
      techno: 'React Native, Node.js, MySQL',
      lien: 'https://clashofleagues.fr/',
      documentation: '/Documentation/E6_ClashOfLeague_Documentation.pdf',
      github: 'https://github.com/victorcb2003/ClashFrontEnd',
    },
  ]

  const projetsPerso = [
    {
      periode: '2026',
      titre: 'Jeu d’échecs POO',
      details:
        'Jeu d’échecs développé en JavaScript orienté objet, avec gestion des pièces, règles de déplacement et interface web.',
      techno: 'JavaScript, HTML, CSS, POO',
      lien: '/JeuEchecPOO/index.html',
      github: 'https://github.com/victorcb2003/JeuEchecPOO',
    },
    {
      periode: '2026',
      titre: 'Simulation 3D Système solaire (TreeJs)',
      details:
        'Application 3D interactive de visualisation du système solaire avec navigation caméra, orbites et interface utilisateur.',
      techno: 'JavaScript, Three.js, HTML, CSS, WebGL',
      lien: '/TreeJs/index.html',
      github: 'https://github.com/victorcb2003/TreeJs',
    },
  ]

  return (
    <section>
      <h2>Projets</h2>
      <p>Vue dédiée de mes réalisations techniques en formation et en entreprise.</p>

      <h3 className="section-title">Projets école</h3>
      <div className="timeline">
        {projetsEcole.map((item) => (
          <article className="timeline-item project-item" key={`${item.periode}-${item.titre}`}>
            <div className="project-icons-corner">
              {item.lien && (
                <a
                  className="project-link icon-link"
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le projet : ${item.titre}`}
                  title="Voir le projet"
                >
                  <FaRegPlayCircle />
                </a>
              )}
              {item.documentation && (
                <a
                  className="project-link icon-link"
                  href={item.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir la documentation : ${item.titre}`}
                  title="Voir la documentation"
                >
                  <CgFileDocument />
                </a>
              )}
              {item.github && (
                <a
                  className="project-link icon-link"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le repository GitHub : ${item.titre}`}
                  title="Voir sur GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
            <p className="date">{item.periode}</p>
            <h3>{item.titre}</h3>
            <p>{item.details}</p>
            <p className="tag">Technos : {item.techno}</p>
          </article>
        ))}
      </div>

      <h3 className="section-title">Projets perso</h3>
      <div className="timeline">
        {projetsPerso.map((item) => (
          <article className="timeline-item project-item" key={`${item.periode}-${item.titre}`}>
            <div className="project-icons-corner">
              {item.lien && (
                <a
                  className="project-link icon-link"
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le projet : ${item.titre}`}
                  title="Voir le projet"
                >
                  <FaRegPlayCircle />
                </a>
              )}
              {item.github && (
                <a
                  className="project-link icon-link"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le repository GitHub : ${item.titre}`}
                  title="Voir sur GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
            <p className="date">{item.periode}</p>
            <h3>{item.titre}</h3>
            <p>{item.details}</p>
            <p className="tag">Technos : {item.techno}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjetsPage
