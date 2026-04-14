function ParcoursPage() {
  const parcours = [
    {
      periode: '2021 / 2022',
      titre: 'Bac général — spécialités Maths & Physique',
      details:
        'Construction de bases solides en logique, résolution de problèmes et méthode scientifique, utiles pour le développement informatique.',
      statut: 'Fondations',
    },
    {
      periode: '1ère année BTS SIO (SLAM)',
      titre: 'Montée en compétences développement web',
      details:
        'Réalisation de projets web (site vitrine, application PHP/MySQL, React), intégration d’API et prise en main des bonnes pratiques de conception.',
      statut: 'Formation',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Stage de 1ère année',
      details:
        "Veille concurrentielle sur des sites de marketing digital, développement/déploiement d'un site WordPress et optimisation SEO + lisibilité des contenus.",
      statut: 'Stage',
    },
    {
      periode: '2ème année BTS SIO (SLAM)',
      titre: 'Approfondissement full-stack et mode projet',
      details:
        'Conception d’applications plus complètes, travail d’équipe, structuration front/back et préparation de l’épreuve E6.',
      statut: 'Formation',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Alternance (2ème année)',
      details:
        'Déploiement d’applications web sur serveur interne (environnements, accès, mise en production) et développement d’applications front-end/back-end avec base de données et API.',
      statut: 'Alternance',
    },
  ]

  return (
    <section>
      <h2>Parcours</h2>
      <p>
        Mon parcours de formation et d’expérience professionnelle, de mon bac
        général à ma deuxième année de BTS SIO option SLAM.
      </p>

      <div className="fancy-timeline">
        {parcours.map((item) => (
          <article className="fancy-item" key={`${item.periode}-${item.titre}`}>
            <p className="date">{item.periode}</p>
            <h3>{item.titre}</h3>
            <p>{item.details}</p>
            <p className="tag">{item.statut}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ParcoursPage
