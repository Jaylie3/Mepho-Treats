import Link from "next/link";
import menu from "@/data/menu.json";

const featuredFlavours = menu.flavours.filter((flavour) => flavour.set === "core").slice(0, 4);

export default function Home() {
  return (
    <main>
      <section className="hero hero-editorial">
        <div className="hero-copy">
          <p className="eyebrow">HOMEMADE ICE CREAM · BERGVILLE, KZN</p>
          <h1>A little joy.<br /><em>One scoop</em><br />at a time.</h1>
          <p className="hero-description">
            Homemade ice cream, thoughtful flavours and easy pre-orders.
            Made for slow afternoons, family tables and the moments worth sharing.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/menu">Explore the menu <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">Get to know us</Link>
          </div>
          <p className="hero-note"><span className="status-dot" /> Proudly based in Bergville, KwaZulu-Natal</p>
        </div>
        <figure className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1638212291123-8d20f5353333?auto=format&fit=crop&w=1400&q=85"
            alt="Two scoops of creamy gelato in a crisp waffle cone, shown as serving inspiration"
            fetchPriority="high"
          />
          <figcaption>Serving inspiration · Your chosen flavours, made to order.</figcaption>
          <div className="photo-note"><span>MEPHO</span><span>GOOD THINGS, MADE TO SHARE.</span></div>
        </figure>
      </section>

      <section className="trust-strip" aria-label="Ordering information">
        <span>SMALL-BATCH HOMEMADE ICE CREAM</span>
        <span className="trust-divider">/</span>
        <span>PRE-ORDER ON WHATSAPP</span>
        <span className="trust-divider">/</span>
        <span>BERGVILLE, SOUTH AFRICA</span>
      </section>

      <section className="section menu-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SOMETHING FOR EVERY SWEET TOOTH</p>
            <h2>Find your <em>favourite.</em></h2>
            <p className="section-lede">From familiar classics to a little something different.</p>
          </div>
          <Link className="text-link" href="/menu">See the full menu <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="flavour-list">
          {featuredFlavours.map((flavour, index) => (
            <article className="flavour-row" key={flavour.id}>
              <span className="flavour-number">0{index + 1}</span>
              <h3>{flavour.name}</h3>
              <span className="flavour-category">THE CLASSICS</span>
            </article>
          ))}
        </div>
        <p className="menu-footnote">Flavour availability may vary. Ask us on WhatsApp what is ready for your order.</p>
      </section>

      <section className="order-section">
        <div className="order-copy">
          <p className="eyebrow">A SIMPLE WAY TO MAKE SOMEONE'S DAY</p>
          <h2>Your next treat<br />is just a <em>message away.</em></h2>
          <p>Choose your size and flavour, add your details, then send your order through WhatsApp. We’ll confirm the details with you directly.</p>
          <Link className="button button-light" href="/menu">Build your order <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="order-details">
          <div><span>01</span><p><b>Choose your scoops</b><small>Browse cups, tubs and flavours.</small></p></div>
          <div><span>02</span><p><b>Send your order</b><small>Complete the order form and continue to WhatsApp.</small></p></div>
          <div><span>03</span><p><b>We’ll confirm with you</b><small>Collection or delivery details are arranged directly.</small></p></div>
        </div>
      </section>

      <section className="catering-section">
        <div className="catering-image">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1100&q=85"
            alt="A bowl of ice cream with fresh fruit, shown as dessert inspiration"
            loading="lazy"
          />
          <span>MADE FOR SHARING</span>
        </div>
        <div className="catering-copy">
          <p className="eyebrow">CELEBRATIONS, BIG AND SMALL</p>
          <h2>Make room for<br /><em>something sweet.</em></h2>
          <p>Planning a birthday, wedding, school event or family get-together? Ask us about our 2 L and 5 L catering tubs.</p>
          <Link className="text-link" href="/catering">Explore catering options <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">A LITTLE HAPPINESS GOES A LONG WAY</p>
        <h2>Let’s make it<br /><em>a Mepho moment.</em></h2>
        <Link className="button" href="/menu">Browse the menu <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
