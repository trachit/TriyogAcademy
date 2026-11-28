import Link from "next/link";
import { nav, FACEBOOK } from "./nav";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">Triyog Academy</p>
          <p lang="ne" className="mt-2 text-gold">तमसो मा ज्योतिर्गमय</p>
          <p className="text-sm">Lead me from darkness to light.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 font-semibold text-white">Explore</p>
          <ul className="grid gap-2 text-sm">
            {nav.map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </nav>
        <address className="text-sm not-italic">
          <p className="mb-3 font-semibold text-white">Contact</p>
          <p>Lamkichuha-2, Motipur, Kailali, Nepal</p>
          <p className="mt-2">Phone / email: [to be verified]</p>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline hover:text-white">Facebook</a>
        </address>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} Triyog Academy</p>
    </footer>
  );
}
