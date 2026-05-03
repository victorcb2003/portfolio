import { CgFileDocument } from "react-icons/cg";

function StageAlternancePage() {
  const stage = {
    entreprise: 'Connect Action',
    periode: '28/04/2025 → 25/06/2025',
  }

  const alternance = {
    entreprise: 'JCDecaux',
    periode: '19/11/2025 → 20/03/2026',
  }

  const stagePresentation = [
    'Connect’Action agit pour l’inclusion numérique.',
    'L’association aide les personnes en difficulté avec l’informatique.',
    'Elle lutte contre l’illectronisme et la fracture digitale.',
    'Son accompagnement est simple, pédagogique et accessible.',
    'Elle permet de gagner en autonomie sur les outils numériques.'
  ]

  const alternancePresentation = [
    'JCDecaux est un leader mondial de la communication extérieure.',
    'L’entreprise conçoit et exploite des supports publicitaires urbains.',
    'Elle est présente dans plus de 80 pays.',
    'Son modèle finance des services utiles comme les abribus ou les vélos en libre-service.',
    'Elle associe publicité, innovation et amélioration du cadre de vie.'
  ]

  const stageMissions = [
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Veille concurrentielle marketing digital',
      details: 'Analyse de sites et benchmark.',
      documentation: '/Documentation/Stage_1_Recherche_Concurrentielle.pdf',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: "Développement et déploiement d'un site WordPress",
      details: 'Création, configuration et mise en ligne.',
      documentation: '/Documentation/Stage_2_Developpement_WordPress.pdf',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Optimisation SEO et lisibilité',
      details: 'Amélioration du SEO et de l’ergonomie.',
      documentation: '/Documentation/Stage_3_Optimisation_SEO.pdf',
    },
  ]

  const alternanceMissions = [
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Déploiement web interne',
      details:
        'Déploiement d’applications web sur un serveur interne (configuration environnement, mise en production, gestion des accès).',
      documentation: '/Documentation/Alternance_3_Maintenance.pdf',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Développement web',
      details:
        'Développement d’applications web (front-end et back-end) avec gestion de base de données et API.',
      documentation: '/Documentation/Alternance_1_Developpement_Web.pdf',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Application mobile',
      details:
        'Développement d’une application mobile connectée à une API.',
      documentation: '/Documentation/Alternance_2_Application_Mobile.pdf',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Maintenance applicative',
      details:
        'Maintenance et amélioration d’applications existantes (corrections de bugs, évolutions fonctionnelles).',
      documentation: '/Documentation/Alternance_3_Maintenance.pdf',
    },
  ]

  return (
    <section>
      <h2>Stage / Alternance</h2>
      <p>Présentation courte de mes missions en stage et en alternance.</p>

      <div className="card-grid">
        <article className="card card-accent-cyan">
          <h3>Présentation de Connect’Action</h3>
          <ul className="text-list">
            {stagePresentation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card card-accent-purple">
          <h3>Présentation de JCDecaux</h3>
          <ul className="text-list">
            {alternancePresentation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="card-grid">
        <article className="card card-accent-cyan">
          <h3>Stage — 1ère année</h3>
          <p>
            <strong>Entreprise :</strong> {stage.entreprise}
          </p>
          <p>
            <strong>Période :</strong> {stage.periode}
          </p>

          <div className="timeline">
            {stageMissions.map((item) => (
              <article className="timeline-item mission-item" key={`${item.periode}-${item.titre}`}>
                <a
                  className="doc-icon-link"
                  href={item.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir la documentation : ${item.titre}`}
                  title="Voir la documentation"
                >
                  <CgFileDocument />
                </a>
                <p className="date">{item.periode}</p>
                <h3>{item.titre}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="card card-accent-purple">
          <h3>Alternance — 2ème année</h3>
          <p>
            <strong>Entreprise :</strong> {alternance.entreprise}
          </p>
          <p>
            <strong>Période :</strong> {alternance.periode}
          </p>

          <div className="timeline">
            {alternanceMissions.map((item) => (
              <article className="timeline-item mission-item" key={`${item.periode}-${item.titre}`}>
                <a
                  className="doc-icon-link"
                  href={item.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir la documentation : ${item.titre}`}
                  title="Voir la documentation"
                >
                  <CgFileDocument />
                </a>
                <p className="date">{item.periode}</p>
                <h3>{item.titre}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

export default StageAlternancePage
