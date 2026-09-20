import Image from "next/image";

const bookingUrl = "https://www.chandon.com.ar/nuestra-bodega/";
const visitorEmail = "mailto:centrodevisitas@chandon.com.ar";
const whatsappUrl = "https://wa.me/5492614859656";

const otherExperiences = [
  {
    name: "Menú Casa Chandon",
    detail:
      "Pequeños platos, ingredientes de estación y maridajes pensados para compartir.",
    duration: "2 h",
  },
  {
    name: "Picada Argentina",
    detail:
      "Una selección preparada por la cocina de la casa para disfrutar en los jardines.",
    duration: "1 h 50 min",
  },
  {
    name: "Picnic en los jardines",
    detail:
      "Sabores caseros, vegetales de huerta, algo dulce y una botella de 375 cc.",
    duration: "1 h 50 min",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Chandon, inicio">
          <Image
            src="/images/chandon-logo.png"
            alt=""
            width={870}
            height={124}
            priority
          />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#experiencias">Experiencias</a>
          <a href="#bodega">La bodega</a>
          <a href="#planifica">Planificá</a>
        </nav>
        <a className="header-cta" href={bookingUrl}>
          Reservar
        </a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-media">
          <Image
            src="/images/hero-mendoza-gold.png"
            alt="Imagen conceptual de adultos brindando en una mesa junto a viñedos y montañas de Mendoza"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-shade" />
          <p className="hero-kicker">Bodega Chandon, Mendoza</p>
        </div>

        <div className="invitation-card">
          <h1 id="hero-title">Burbujas de Mendoza.</h1>
          <p>
            Una casa para compartir: recorré viñedos y bodega, probá nuestros
            espumosos y elegí tu experiencia.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={bookingUrl}>
              Reservar una experiencia <Arrow />
            </a>
            <a className="text-link text-link-light" href="#experiencias">
              Ver experiencias
            </a>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experiencias" aria-labelledby="experiences-title">
        <div className="section-heading">
          <p className="eyebrow">Elegí tu visita</p>
          <h2 id="experiences-title">Dos maneras de entrar al mundo Chandon.</h2>
          <p>
            Empezá por el recorrido esencial o sumá una degustación en cava
            privada con propuesta gastronómica.
          </p>
        </div>

        <div className="experience-grid">
          <article className="experience experience-classic">
            <div>
              <p className="duration">1 h 15 min</p>
              <h3>Visita clásica</h3>
              <p>
                Recorrido guiado por viñedo y bodega, con una degustación final
                de tres espumosos insignia.
              </p>
            </div>
            <div className="experience-footer">
              <p>A partir de 12 años. Menores sin degustación.</p>
              <a className="text-link" href={bookingUrl}>
                Reservar visita clásica <Arrow />
              </a>
            </div>
          </article>

          <article className="experience experience-premium">
            <div>
              <p className="duration">1 h 40 min</p>
              <h3>Visita premium</h3>
              <p>
                Viñedo, bodega y una degustación de cuatro etiquetas en cava
                privada, acompañada por delicias gastronómicas.
              </p>
            </div>
            <div className="experience-footer">
              <p>A partir de 12 años. Menores sin degustación.</p>
              <a className="text-link" href={bookingUrl}>
                Reservar visita premium <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="place-section" id="bodega" aria-labelledby="place-title">
        <div className="place-copy">
          <h2 id="place-title">La visita empieza mucho antes de la primera copa.</h2>
          <p>
            Caminá entre viñedos, conocé el área de elaboración, los tanques y
            la cava. El paisaje de Agrelo acompaña todo el recorrido.
          </p>
          <p className="concept-note">
            Las imágenes de este demo son conceptuales y no documentan la
            arquitectura real del establecimiento.
          </p>
        </div>
        <figure className="place-image">
          <Image
            src="/images/winery-arrival.png"
            alt="Imagen conceptual de visitantes caminando entre viñedos hacia una bodega contemporánea en Mendoza"
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </figure>
      </section>

      <section className="table-section" aria-labelledby="table-title">
        <div className="table-image">
          <Image
            src="/images/garden-table-gold.png"
            alt="Imagen conceptual de una mesa compartida con espumoso, empanadas y vegetales en un jardín mendocino"
            fill
            sizes="100vw"
          />
        </div>
        <div className="table-copy">
          <p className="eyebrow">La mesa también es parte del viaje</p>
          <h2 id="table-title">Quedate a compartir.</h2>
          <p>
            El bistró, la picada y el picnic llevan la experiencia al jardín,
            con cocina de estación pensada para acompañar las burbujas.
          </p>
        </div>
      </section>

      <section className="formats-section" aria-labelledby="formats-title">
        <div className="formats-intro">
          <h2 id="formats-title">Encontrá tu plan.</h2>
          <p>
            Una comida más larga, una picada al aire libre o un picnic bajo los
            árboles. Consultá la disponibilidad vigente al reservar.
          </p>
        </div>
        <div className="formats-list">
          {otherExperiences.map((experience) => (
            <article key={experience.name}>
              <p className="duration">{experience.duration}</p>
              <div>
                <h3>{experience.name}</h3>
                <p>{experience.detail}</p>
              </div>
              <a href={bookingUrl} aria-label={`Reservar ${experience.name}`}>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="practical-section" id="planifica" aria-labelledby="practical-title">
        <div className="practical-title">
          <h2 id="practical-title">Planificá la visita.</h2>
        </div>
        <dl className="practical-grid">
          <div>
            <dt>Ubicación</dt>
            <dd>Ruta 15 km 29, Agrelo, Luján de Cuyo, Mendoza.</dd>
          </div>
          <div>
            <dt>Reservas</dt>
            <dd>Las experiencias y horarios se confirman en el sistema oficial.</dd>
          </div>
          <div>
            <dt>Consultas</dt>
            <dd>
              <a href={visitorEmail}>centrodevisitas@chandon.com.ar</a>
              <a href={whatsappUrl}>WhatsApp +54 9 261 485 9656</a>
            </dd>
          </div>
          <div>
            <dt>Menores</dt>
            <dd>Las visitas clásica y premium admiten menores desde 12 años, sin degustación.</dd>
          </div>
        </dl>
      </section>

      <section className="final-invitation" aria-labelledby="final-title">
        <div>
          <p>Tu próxima mesa puede estar entre viñedos.</p>
          <h2 id="final-title">Elegí la experiencia. Nosotros te esperamos.</h2>
        </div>
        <div className="final-actions">
          <a className="button button-light" href={bookingUrl}>
            Reservar una experiencia <Arrow />
          </a>
          <a className="text-link text-link-light" href={visitorEmail}>
            Consultar experiencia privada
          </a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#inicio">
          <Image
            src="/images/chandon-logo.png"
            alt="Chandon"
            width={870}
            height={124}
          />
        </a>
        <p>Beber con moderación. Prohibida su venta a menores de 18 años.</p>
        <p>Demo conceptual de primer contacto. No es un sitio oficial.</p>
      </footer>
    </main>
  );
}
