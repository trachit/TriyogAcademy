import Image from "next/image";
import Link from "next/link";
import { nav } from "./nav";

// Mobile menu is CSS-only (<details>), so the header ships no client JS.
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-navy">
          <Image src="/images/logos/logo.png" alt="" width={48} height={48} priority />
          Triyog Academy
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-ink/80 hover:text-navy">{label}</Link>
          ))}
          <Link href="/admissions" className="btn-primary">Apply for Admission</Link>
        </nav>
        <details className="relative lg:hidden">
          <summary className="btn-navy cursor-pointer list-none">Menu</summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 grid w-64 gap-1 rounded-xl border border-navy/10 bg-white p-3 shadow-lg">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-lg px-3 py-2 hover:bg-mist">{label}</Link>
            ))}
            <Link href="/admissions" className="btn-primary mt-2">Apply for Admission</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
