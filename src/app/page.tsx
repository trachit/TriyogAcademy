import Link from "next/link";
import { FACEBOOK } from "@/components/layout/nav";

const programs = [
  ["Early Childhood Education", "/academics/explore"],
  ["Primary Education", "/academics/explore"],
];
const why = [
  ["Extracurriculars", "Dancing, music, sport and more, with dedicated sessions during school days."],
  ["Experienced teachers", "Teachers with four or more years of experience."],
  ["English-medium", "English is the main language of instruction."],
];
const stats = [["Est. 2072 BS", "Years of service"], ["[TBC]", "Students"], ["[TBC]", "Teachers"], ["[TBC]", "Programs"]];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#12184a] text-white">
        <div className="wrap band fade max-w-4xl">
          <p className="eyebrow">Triyog Academy · तमसो मा ज्योतिर्गमय</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Inspiring Minds. Illuminating Futures.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">Welcome to Triyog Academy, where learning, curiosity, and character come together.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/admissions" className="btn-primary">Apply for Admission</Link>
            <Link href="/about" className="btn-outline">Explore Our School</Link>
          </div>
        </div>
      </section>

      <section className="band wrap grid items-center gap-10 md:grid-cols-2">
        <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-mist text-sm text-ink/50">School photograph (to be supplied)</div>
        <div>
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-2 text-3xl font-bold text-navy">Welcome to Triyog Academy</h2>
          <p className="mt-4 text-ink/80">A private school in Lamkichuha-2, Motipur, Kailali, established in 2072 BS. [Introduction and educational philosophy to be supplied by the school.]</p>
          <Link href="/about" className="btn-navy mt-6">Discover Our Story</Link>
        </div>
      </section>

      <section className="bg-mist">
        <div className="wrap grid grid-cols-2 gap-4 py-12 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="card text-center"><p className="text-2xl font-bold text-navy">{v}</p><p className="text-sm text-ink/70">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="band wrap">
        <h2 className="text-3xl font-bold text-navy">Academic Programs</h2>
        <p className="mt-2 text-sm text-ink/60">Levels to be verified by the school before publication.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {programs.map(([name, href]) => (
            <article key={name} className="card">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-ink/70">[Program description to be supplied.]</p>
              <Link href={href} className="btn-navy mt-4">Explore Program</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="band bg-mist">
        <div className="wrap">
          <h2 className="text-3xl font-bold text-navy">Why Triyog Academy?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {why.map(([t, d]) => <article key={t} className="card"><h3 className="font-semibold text-green">{t}</h3><p className="mt-2 text-ink/70">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="band wrap">
        <h2 className="text-3xl font-bold text-navy">Campus Life</h2>
        <p className="mt-4 rounded-2xl border border-dashed border-navy/20 p-10 text-center text-ink/60">Authentic school photographs will appear here once supplied and cleared for publication.</p>
        <Link href="/gallery" className="btn-navy mt-6">View Full Gallery</Link>
      </section>

      <section className="band bg-mist">
        <div className="wrap"><h2 className="text-3xl font-bold text-navy">News &amp; Announcements</h2><p className="mt-4 text-ink/60">No announcements published yet.</p></div>
      </section>

      <section className="band bg-navy text-white">
        <div className="wrap text-center">
          <h2 className="text-3xl font-bold">Begin Your Child&apos;s Learning Journey.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-primary">Apply Now</Link>
            <Link href="/admissions" className="btn-outline">Admission Information</Link>
            <Link href="/contact" className="btn-outline">Contact Admissions</Link>
          </div>
        </div>
      </section>

      <section className="band wrap">
        <h2 className="text-3xl font-bold text-navy">Find Us</h2>
        <address className="mt-4 not-italic text-ink/80">
          Lamkichuha-2, Motipur, Kailali, Nepal<br />
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="underline">Facebook</a>
        </address>
        <Link href="/contact" className="btn-navy mt-6">Contact Us</Link>
      </section>
    </>
  );
}
