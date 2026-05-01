import veilleImg from '../assets/Veille.avif'
import tayImg from '../assets/tay.webp'

function VeillePage() {
  return (
    <section>
      <h2>Veille technologique</h2>
      <p className="intro-text">
        Je réalise ma veille autour de l’alignement en intelligence artificielle,
        en m’appuyant notamment sur Google Alerts pour rester informé des
        nouvelles publications, articles et analyses sur le sujet.
      </p>

      <div className="card-grid">
        <article className="card card-accent-blue">
          <h3>L’alignement en intelligence artificielle</h3>
          <p>
            L’alignement désigne les techniques qui visent à faire correspondre
            le comportement d’une IA avec les valeurs humaines, juridiques,
            éthiques et sécuritaires.
          </p>
          <p>
            L’enjeu principal est d’éviter qu’une IA atteigne un objectif de
            manière techniquement efficace mais contraire à l’intention réelle
            de ses concepteurs ou de ses utilisateurs.
          </p>
          <img
            src={veilleImg}
            alt="Illustration de la veille sur l’alignement en intelligence artificielle"
            className="veille-image"
          />
        </article>

        <article className="card card-accent-cyan">
          <h3>Problèmes actuels et comportements non intentionnels</h3>
          <p>
            Des systèmes mal alignés produisent déjà des effets concrets, comme
            le reward hacking : l’IA trouve un raccourci pour optimiser une
            métrique sans respecter l’objectif attendu.
          </p>
          <p>
            On observe aussi des effets d’amplification indésirables, par
            exemple lorsque des algorithmes privilégient l’engagement au détriment
            de la qualité ou de la fiabilité de l’information.
          </p>
          <img
            src={tayImg}
            alt="Exemple de dérive d’un système IA mal contrôlé"
            className="veille-image"
          />
        </article>
      </div>

      <div className="card-grid">
        <article className="card card-accent-purple">
          <h3>Risques futurs</h3>
          <p>
            Les IA avancées peuvent développer des stratégies de contournement,
            de déception ou d’optimisation instrumentale non souhaitée.
          </p>
          <p>
            À grande échelle, ces comportements peuvent affecter des systèmes
            critiques (énergie, finance, services numériques) et créer des
            risques importants si les garde-fous sont insuffisants.
          </p>
          <p>
            Le risque majeur évoqué dans la littérature est celui d’une IA
            générale mal alignée, capable de poursuivre un objectif simple de
            façon extrême en ignorant les valeurs humaines.
          </p>
        </article>

        <article className="card card-highlight">
          <h3>Sources de recherche</h3>
          <ul>
            <li>Wikipedia</li>
            <li>OpenAI (article)</li>
            <li>Antropic (article)</li>
            <li>Google</li>
            <li>BlueDot (blog)</li>
            <li>EGO</li>
            <li>YouTube</li>
            <li>Inoreader</li>
          </ul>
        </article>
      </div>

      <div className="card-grid">
        <article className="card card-accent-pink">
          <h3>Méthode de veille</h3>
          <p>
            J’utilise Google Alerts pour suivre automatiquement les nouveaux
            contenus publiés sur l’IA et l’alignement.
          </p>
          <p>
            Je complète ensuite avec des articles, vidéos et blogs spécialisés
            pour comparer les points de vue et mieux comprendre les enjeux.
          </p>
        </article>

        <article className="card card-highlight">
          <h3>Objectif de la veille</h3>
          <p>
            Rester informé sur les risques, les usages et les évolutions de l’IA
            afin d’avoir une vision plus critique et documentée du sujet.
          </p>
        </article>
      </div>
    </section>
  )
}

export default VeillePage
