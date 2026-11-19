import Link from "next/link";
import menu from "@/data/menu.json";

const loyaltyItems = menu.items.filter((item) => item.notes?.toLowerCase().includes("loyalty"));

export const metadata = {
  title: "Mepho Treats Loyalty",
  description: "Stay close to Mepho Treats and ask about current loyalty treats in Bergville.",
};

export default function LoyaltyPage() {
  const whatsapp = `https://wa.me/${menu.settings.whatsappNumber}?text=${encodeURIComponent("Hi Mepho Treats! I'd like to join the loyalty programme. Please share how it works and what rewards are currently available.")}`;

  return (
    <main className="loyalty-page">
      <section className="loyalty-hero">
        <p className="eyebrow">A LITTLE THANK-YOU FOR COMING BACK</p>
        <h1>Good scoops.<br /><em>Good to see you again.</em></h1>
        <p className="loyalty-intro">
          We love being part of your everyday treats and special moments. Get in touch
          with Mepho Treats to ask about loyalty offers and the treats currently included.
        </p>
        <a className="button" href={whatsapp} target="_blank" rel="noreferrer">
          Ask about loyalty on WhatsApp <span aria-hidden="true">↗</span>
        </a>
        <span className="loyalty-location">MEPHO TREATS · BERGVILLE, KWAZULU-NATAL</span>
      </section>

      <section className="loyalty-details">
        <div className="loyalty-details-copy">
          <p className="eyebrow">HOW TO GET STARTED</p>
          <h2>Let’s make your<br /><em>next scoop count.</em></h2>
          <p>Message us before placing your order. We’ll explain the current loyalty offer, confirm which items qualify and let you know how to take part.</p>
          <ol className="loyalty-steps">
            <li><span>01</span><div><b>Say hello</b><p>Send us a WhatsApp message to ask about joining.</p></div></li>
            <li><span>02</span><div><b>Check what qualifies</b><p>We’ll confirm the eligible items and current offer before you order.</p></div></li>
            <li><span>03</span><div><b>Enjoy your Mepho moment</b><p>Place your order and follow the instructions we share with you.</p></div></li>
          </ol>
        </div>
        <aside className="loyalty-note">
          <span className="loyalty-spark" aria-hidden="true">✳</span>
          <p className="eyebrow">CURRENT MENU NOTE</p>
          <h3>Made for your little treat break.</h3>
          {loyaltyItems.length > 0 ? (
            <>
              <p>{loyaltyItems.map((item) => item.name).join(", ")} is currently marked as loyalty-eligible on our menu.</p>
              <Link className="text-link" href="/menu">See the menu <span aria-hidden="true">↗</span></Link>
            </>
          ) : (
            <p>Ask us which menu items are currently included in loyalty offers.</p>
          )}
        </aside>
      </section>

      <section className="loyalty-bottom">
        <p className="eyebrow">HAVE A QUESTION?</p>
        <h2>We’re just a message away.</h2>
        <p>We’ll confirm the latest loyalty details directly, so you always have the right information before ordering.</p>
        <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">Chat with Mepho Treats <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
