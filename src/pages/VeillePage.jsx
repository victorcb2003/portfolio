function VeillePage() {
  return (
    <section>
      <h2>Veille technologique</h2>
      <p>
        Je réalise une veille continue autour des technologies web modernes afin
        d’améliorer mes pratiques en développement.
      </p>

      <div className="card-grid">
        <article className="card">
          <h3>Sujets suivis</h3>
          <ul>
            <li>Écosystème React et performance front-end</li>
            <li>Sécurité des applications web</li>
            <li>Bonnes pratiques API REST</li>
            <li>SEO technique et accessibilité</li>
          </ul>
        </article>

        <article className="card">
          <h3>Méthode</h3>
          <p>
            Suivi de sources spécialisées, expérimentation en mini-projets et
            restitution des points clés dans mon portfolio.
          </p>
        </article>
      </div>
    </section>
  )
}

export default VeillePage
