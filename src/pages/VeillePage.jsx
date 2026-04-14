import veilleImg from '../assets/Veille.avif'
import tayImg from '../assets/tay.webp'

function VeillePage() {
  return (
    <section>
      <h2>Veille technologique</h2>

      <div className="card-grid">
        <article className="card card-accent-blue">
          <h3>L’alignement en intelligence artificielle</h3>
          <p>
            Cette veille porte sur l’alignement en IA : L’alignement désigne l’ensemble des techniques visant à intégrer des valeurs humaines (juridiques, éthiques ou sécuritaires) directement dans le fonctionnement et l’architecture des systèmes d’IA. Concrètement, il s’agit d’ajuster ces systèmes pour qu’ils produisent des réponses fiables tout en évitant certains usages jugés dangereux. L’objectif est d’éviter que la machine ne s’écarte des principes fondamentaux et ce même si un utilisateur tente de la détourner.
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
          <h3>Sources de veille</h3>
          <ul>
            <li>Wikipedia</li>
            <li>OpenAI</li>
            <li>Google</li>
            <li>BlueDot (blog)</li>
            <li>EGO</li>
            <li>YouTube</li>
            <li>Google news</li>
            <li>Inoreader</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default VeillePage
