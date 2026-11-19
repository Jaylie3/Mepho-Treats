import Link from "next/link";
import menu from "@/data/menu.json";
export default function Home() {
  return <main><section className="hero">
    <div className="hero-copy"><p className="eyebrow">BERGVILLE, KWAZULU-NATAL · MADE WITH LOVE</p>
      <h1>Happiness is<br/><em>homemade.</em></h1>
      <p className="hero-description">Little-batch ice cream, big-time joy. Find your new favourite scoop, made right here in Bergville.</p>
      <div className="hero-actions"><Link className="button" href="/menu">Explore the menu <span>↗</span></Link><Link className="text-link" href="/catering">Planning something special?</Link></div>
      <div className="hero-note"><span className="status-dot"/> Pre-orders close Thursday at 17:00</div>
    </div>
    <div className="hero-visual"><div className="sunburst"/><div className="hero-icecream"><div className="cup"><span>mepho<br/>treats</span></div><div className="scoop scoop-a"/><div className="scoop scoop-b"/><div className="scoop scoop-c"/></div><div className="sticker">SWEET<br/>MOMENTS<br/>INSIDE</div><span className="visual-caption">A scoop of something lovely.</span></div>
  </section>
  <section className="intro-strip"><p>HANDCRAFTED HAPPINESS IN EVERY SCOOP</p><span>✳</span><p>SMALL BATCH · BIG HEART</p><span>✳</span><p>BERGVILLE, SOUTH AFRICA</p></section>
  <section className="section section-menu"><div className="section-heading"><div><p className="eyebrow">THE GOOD STUFF</p><h2>Meet your <em>match.</em></h2></div><Link className="text-link" href="/menu">View all flavours ↗</Link></div>
    <div className="flavour-grid">{menu.flavours.slice(0,4).map((f,i)=><article className={`flavour-tile flavour-${i}`} key={f.id}><div className="flavour-illustration"><div className="scoop"/><span>{["01","02","03","04"][i]}</span></div><p className="eyebrow">THE CLASSICS</p><h3>{f.name}</h3></article>)}</div>
  </section>
  <section className="order-band"><div><p className="eyebrow">YOUR WEEKEND, SORTED</p><h2>Good things come<br/>to those who <em>pre-order.</em></h2><p>Choose your scoops by Thursday. We&apos;ll have your treats ready for Friday or Saturday.</p></div><Link className="button button-light" href="/menu">Build your order ↗</Link></section>
  <section className="split-section"><div className="split-art"><div className="big-type">SCOOP<br/>THERE<br/>IT IS.</div><div className="mini-scoop"/></div><div className="split-copy"><p className="eyebrow">MADE FOR YOUR MOMENTS</p><h2>Little treats.<br/><em>Big occasions.</em></h2><p>From family Fridays to weddings, school celebrations and lodge gatherings, there&apos;s a Mepho moment for every kind of get-together.</p><Link className="text-link" href="/catering">Let&apos;s talk catering ↗</Link></div></section>
  <section className="final-cta"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next favourite<br/>scoop is <em>one click away.</em></h2><Link className="button" href="/menu">Order on WhatsApp ↗</Link></section>
  </main>;
}
