import Link from "next/link";
export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/">mepho<span> treats.</span></Link>
    <nav aria-label="Main navigation"><Link href="/menu">Menu</Link><Link href="/catering">Catering</Link><Link href="/about">Our story</Link></nav>
    <Link className="button button-small" href="/menu">Order now <span aria-hidden>↗</span></Link>
  </header>;
}
