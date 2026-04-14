function HomePage() {
  return (
    <section>
      <h2>Bienvenue</h2>
      <p className="intro-text">
        Étudiant en BTS SIO option SLAM, je conçois des applications web et
        mobiles avec une approche orientée qualité, expérience utilisateur,
        sécurité et déploiement.
      </p>

      <div className="card-grid">
        <article className="card card-accent-blue">
          <h3>Compétences clés</h3>
          <ul>
            <li>Développement front-end / back-end</li>
            <li>Intégration d’API</li>
            <li>Base de données SQL</li>
            <li>Déploiement sur serveur </li>
          </ul>
        </article>

        <article className="card card-accent-purple">
          <h3>Objectif</h3>
          <p>
            Consolider mes compétences en développement web applicatif et
            contribuer à des projets concrets en stage/alternance.
          </p>
        </article>
      </div>

      <h2 className="section-title">Le BTS SIO</h2>
      <p className="intro-text">
        Le BTS Services Informatiques aux Organisations (SIO) forme des
        techniciens capables de concevoir, maintenir et déployer des solutions
        informatiques pour les entreprises.
      </p>
      <p className="intro-text muted-spacing">
        La formation est orientée vers des situations professionnelles réelles :
        analyse des besoins, développement ou administration de solutions,
        documentation technique, accompagnement des utilisateurs et travail en
        mode projet.
      </p>

      <div className="card-grid">
        <article className="card card-accent-cyan">
          <h3>Spécialité SISR</h3>
          <p>
            Solutions d’Infrastructure, Systèmes et Réseaux : administration des
            serveurs, sécurité, gestion du réseau, supervision et support
            technique.
          </p>
          <ul>
            <li>Mise en place et maintien des infrastructures</li>
            <li>Cybersécurité, sauvegardes et continuité de service</li>
            <li>Support technique et gestion des incidents</li>
          </ul>
        </article>

        <article className="card card-accent-pink">
          <h3>Spécialité SLAM</h3>
          <p>
            Solutions Logicielles et Applications Métiers : conception et
            développement d’applications, bases de données, API, tests et
            déploiement.
          </p>
          <ul>
            <li>Conception d’applications web et mobiles</li>
            <li>Modélisation et exploitation de données</li>
            <li>Intégration, tests, mise en production et maintenance</li>
          </ul>
        </article>
      </div>

      <article className="card card-highlight">
        <h3>Mon positionnement</h3>
        <p>
          J’ai choisi SLAM pour approfondir le développement full-stack, créer
          des applications utiles et relier les aspects techniques (code, API,
          base de données, déploiement) aux besoins métiers des utilisateurs.
        </p>
      </article>
    </section>
  )
}

export default HomePage
