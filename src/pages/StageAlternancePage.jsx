function StageAlternancePage() {
  const stage = {
    entreprise: 'Connect Action',
    periode: '28/04/2025 → 25/06/2025',
  }

  const alternance = {
    entreprise: 'JCDecaux',
    periode: '19/11/2025 → 20/03/2026',
  }

  const stageMissions = [
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Veille concurrentielle marketing digital',
      details: 'Analyse de sites, benchmark et recommandations.',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Développement et déploiement WordPress',
      details: 'Conception, configuration et mise en ligne du site.',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Optimisation SEO et lisibilité',
      details: 'Amélioration du référencement naturel et de l’ergonomie.',
    },
  ]

  const alternanceMissions = [
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Déploiement sur serveur interne',
      details: 'Configuration d’environnement, mise en production, droits d’accès.',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Développement web front-end / back-end',
      details: 'Applications complètes avec base de données et API.',
    },
  ]

  return (
    <section>
      <h2>Stage / Alternance</h2>
      <p>
        Détail des missions réalisées en milieu professionnel, séparé entre
        stage et alternance.
      </p>

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
              <article className="timeline-item" key={`${item.periode}-${item.titre}`}>
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
              <article className="timeline-item" key={`${item.periode}-${item.titre}`}>
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
