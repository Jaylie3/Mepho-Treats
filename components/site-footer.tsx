import Link from "next/link";
export function SiteFooter() {
  return <footer className="footer">
    <div><Link className="wordmark footer-wordmark" href="/">mepho treats.</Link><p>Handcrafted Happiness in Every Scoop.</p></div>
    <div className="footer-links">
      <Link href="/menu">Menu</Link><Link href="/catering">Catering</Link>
      <Link href="/loyalty">Loyalty</Link><Link href="/faq">FAQs</Link><Link href="/contact">Contact</Link>
    </div>
    <div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    <small>Made with care in Bergville, KwaZulu-Natal · South Africa</small>
  </footer>;
}
