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
            L'alignement regroupe l'ensemble des méthodes utilisées pour s'assurer qu'une IA agit conformément à ce que les humains attendent d'elle, dans le respect des règles, de l'éthique et de la sécurité.
          </p>
          <p>
            Le défi principal est d'empêcher qu'une IA accomplisse sa mission d'une façon efficace sur le plan technique, mais éloignée de ce que ses créateurs ou ses utilisateurs souhaitaient vraiment.
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
            Supposons qu'on programme une IA pilotant un aspirateur robot avec l'objectif suivant : « ramasser le maximum de poussière possible ». L'IA peut atteindre ce but de manière très efficace en renversant elle-même un pot de fleurs, puis en aspirant la terre répandue, et en répétant l'opération.
          </p>
          <p>
            Du point de vue de la machine, la mission est réussie : la quantité de poussière ramassée est maximale. Pourtant, ce résultat est contraire à l'intention réelle de l'utilisateur, qui souhaitait simplement disposer d'un logement propre.
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
            <li>OpenAI (articles)</li>
            <li>Anthropic (articles)</li>
            <li>BlueDot (blog)</li>
            <li>EGO</li>
            <li>YouTube</li>
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
