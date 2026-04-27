function ProjetsPage() {
  const projetsEcole = [
    {
      periode: '10/10/2024 → 01/12/2024',
      titre: 'AP1 — Site vitrine (entreprise fictive)',
      details:
        'Conception de la maquette, intégration HTML/CSS responsive et mise en valeur des services de l’entreprise.',
      techno: 'HTML, CSS, JavaScript',
    },
    {
      periode: '01/01/2025 → 10/04/2025',
      titre: 'TP Librairie PHP',
      details:
        'Développement d’une application de gestion de librairie numérique avec authentification et opérations CRUD.',
      techno: 'PHP, MySQL, SQL, Bootstrap',
      lien: '/book',
    },
    {
      periode: '01/01/2025 → 10/04/2025',
      titre: 'Apps web avec API + localStorage/cookies',
      details:
        'Consommation d’API externes, gestion de sessions côté client et stockage local pour améliorer l’expérience utilisateur.',
      techno: 'JavaScript, API REST, localStorage, Cookies',
    },
    {
      periode: '01/01/2025 → 10/04/2025',
      titre: 'Application React',
      details:
        'Création de composants réutilisables, routage et structuration claire du front-end.',
      techno: 'React, Vite',
    },
    {
      periode: '15/09/2025 → 31/03/2026',
      titre: 'Projet E6 — Application mobile et web en équipe',
      details:
        'Conception front-end/back-end, intégration API et déploiement sur infrastructure interne avec gestion des accès.',
      techno: 'API, Base de données, Déploiement interne',
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
    },
    {
      periode: '2026',
      titre: 'Simulation 3D Système solaire (TreeJs)',
      details:
        'Application 3D interactive de visualisation du système solaire avec navigation caméra, orbites et interface utilisateur.',
      techno: 'JavaScript, Three.js, HTML, CSS, WebGL',
      lien: '/TreeJs/index.html',
    },
  ]

  return (
    <section>
      <h2>Projets</h2>
      <p>Vue dédiée de mes réalisations techniques en formation et en entreprise.</p>

      <h3 className="section-title">Projets école</h3>
      <div className="timeline">
        {projetsEcole.map((item) => (
          <article className="timeline-item" key={`${item.periode}-${item.titre}`}>
            <p className="date">{item.periode}</p>
            <h3>{item.titre}</h3>
            <p>{item.details}</p>
            <p className="tag">Technos : {item.techno}</p>
            {item.lien && (
              <p>
                <a
                  className="project-link"
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </p>
            )}
          </article>
        ))}
      </div>

      <h3 className="section-title">Projets perso</h3>
      <div className="timeline">
        {projetsPerso.map((item) => (
          <article className="timeline-item" key={`${item.periode}-${item.titre}`}>
            <p className="date">{item.periode}</p>
            <h3>{item.titre}</h3>
            <p>{item.details}</p>
            <p className="tag">Technos : {item.techno}</p>
            {item.lien && (
              <p>
                <a
                  className="project-link"
                  href={item.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjetsPage
