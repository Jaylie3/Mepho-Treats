import Link from "next/link";
import menu from "@/data/menu.json";

const featuredFlavours = menu.flavours.filter((flavour) => flavour.set === "core").slice(0, 4);
const flavourColours = ["flavour-berry", "flavour-chocolate", "flavour-vanilla", "flavour-caramel"];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-colour-panel">
          <p className="eyebrow">HOMEMADE ICE CREAM · BERGVILLE, KZN</p>
          <h1>Good days<br />start with<br /><em>a scoop.</em></h1>
          <p className="hero-description">A little homemade happiness for everyday moments, family get-togethers and the celebrations that deserve something sweet.</p>
          <div className="hero-actions">
            <Link className="button" href="/menu">Explore our flavours <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">Our story</Link>
          </div>
          <div className="hero-signoff"><span className="hero-sun" aria-hidden="true">✳</span><span>MADE WITH CARE IN BERGVILLE</span></div>
        </div>
        <div className="hero-image-panel">
          <img src="https://images.unsplash.com/photo-1638212291123-8d20f5353333?auto=format&fit=crop&w=1500&q=88" alt="Ice cream cones photographed as serving inspiration, not a Mepho Treats product photograph" fetchPriority="high" />
          <div className="hero-image-label"><span>THE MEPHO FEELING</span><b>Make today a little sweeter.</b></div>
        </div>
      </section>

      <section className="brand-ribbon" aria-label="About Mepho Treats">
        <span>HOMEMADE GOODNESS</span><i>✳</i><span>BERGVILLE, KZN</span><i>✳</i><span>MADE FOR SHARING</span><i>✳</i><span>ORDER ON WHATSAPP</span>
      </section>

      <section className="section flavour-section">
        <div className="section-heading">
          <div><p className="eyebrow">SCOOP YOUR HAPPY</p><h2>Meet the <em>flavours.</em></h2><p className="section-lede">A few favourites to get you started. Availability can change, so check in before ordering.</p></div>
          <Link className="text-link" href="/menu">View menu & prices <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="flavour-cards">
          {featuredFlavours.map((flavour, index) => (
            <article className={`flavour-card ${flavourColours[index % flavourColours.length]}`} key={flavour.id}>
              <div className="flavour-card-top"><span>0{index + 1}</span><span>MEPHO FAVOURITE</span></div>
              <div className="flavour-card-mark" aria-hidden="true">{["✳", "✦", "❋", "✳"][index]}</div>
              <h3>{flavour.name}</h3>
              <Link href="/menu" aria-label={`Order ${flavour.name}`}>Find it on the menu <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="story-feature">
        <div className="story-photo">
          <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=88" alt="A colourful ice cream dessert photographed as serving inspiration" loading="lazy" />
          <span>GOOD THINGS ARE BETTER SHARED</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">A LOCAL TREAT WITH A LOT OF HEART</p>
          <h2>From our home<br />to <em>your happy place.</em></h2>
          <p>Mepho Treats brings homemade ice cream to Bergville and the people who make it special. Whether it’s a quick afternoon treat or a table full of family, there’s always room for one more scoop.</p>
          <Link className="button button-dark" href="/about">A little about us <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="order-feature">
        <div className="order-feature-heading"><p className="eyebrow">YOUR SCOOPS, YOUR WAY</p><h2>Ordering is <em>easy.</em></h2><p>Choose your favourites online, then send your order to us on WhatsApp. We’ll confirm the details with you.</p></div>
        <div className="order-steps">
          <article><span>01</span><h3>Pick your treats</h3><p>Choose a cup, tub and your favourite flavour.</p></article>
          <article><span>02</span><h3>Send your order</h3><p>Share your details securely through WhatsApp.</p></article>
          <article><span>03</span><h3>We’ll confirm</h3><p>We’ll get back to you about collection or delivery.</p></article>
        </div>
        <Link className="button button-light" href="/menu">Start an order <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="catering-feature">
        <div className="catering-copy">
          <p className="eyebrow">BIRTHDAYS · WEDDINGS · FAMILY DAYS</p>
          <h2>Bring the<br /><em>good stuff.</em></h2>
          <p>Make your next gathering a little sweeter with our larger tubs for sharing. Get in touch to discuss your date, quantity and flavour choices.</p>
          <Link className="text-link" href="/catering">Explore catering <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="catering-stamp"><span>MADE</span><b>to<br />share</b><span>WITH LOVE IN KZN</span></div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">A LITTLE HAPPINESS GOES A LONG WAY</p>
        <h2>Ready for your<br /><em>Mepho moment?</em></h2>
        <Link className="button" href="/menu">Let’s get scooping <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
