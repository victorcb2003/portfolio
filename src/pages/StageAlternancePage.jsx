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
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: "Développement et déploiement d'un site WordPress",
      details: 'Création, configuration et mise en ligne.',
    },
    {
      periode: '28/04/2025 → 25/06/2025',
      titre: 'Optimisation SEO et lisibilité',
      details: 'Amélioration du SEO et de l’ergonomie.',
    },
  ]

  const alternanceMissions = [
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Support utilisateurs via Zendesk',
      details: 'Traitement des demandes et suivi des tickets.',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Sécurisation des applications web et mobile',
      details: 'Renforcement de la sécurité et correction des vulnérabilités.',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Développement d’une application mobile',
      details: 'Conception et évolution de l’application.',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Déploiement sur serveur interne',
      details: 'Mise en place de l’environnement et déploiement.',
    },
    {
      periode: '19/11/2025 → 20/03/2026',
      titre: 'Développement web front-end / back-end',
      details: 'Applications web avec base de données et API.',
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
