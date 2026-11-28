import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Triyog Academy, a private school in Lamkichuha-2, Motipur, Kailali, Nepal, established in 2072 BS.",
  alternates: { canonical: "/about" },
};

const facts = [["Established", "2072 BS"], ["Type", "Private school"], ["Location", "Lamkichuha-2, Motipur, Kailali"], ["Medium", "English"]];
const offer = [
  ["Extracurriculars", "Dancing, music, sport and more, with dedicated sessions during school days."],
  ["Experienced teachers", "Teachers with four or more years of experience."],
  ["English-medium", "English is the main language of instruction."],
];
const pending = ["Mission", "Vision", "Educational Philosophy", "Leadership", "Facilities", "School Values"];

const TBC = () => <span className="rounded bg-gold/15 px-1.5 italic text-ink/60">files/images/logos/logo.png</span>;

// Alternate backgrounds come from `even:bg-mist` (the hero is section 1).
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="band even:bg-mist">
    <div className="wrap">
      <h2 className="mb-8 text-3xl font-bold text-navy">{title}</h2>
      {children}
    </div>
  </section>
);

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#12184a] text-white">
        <div className="wrap band fade max-w-4xl">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Learning, curiosity and character.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">Triyog Academy is a private school in Lamkichuha-2, Motipur, Kailali, Nepal, established in 2072 BS.</p>
        </div>
      </section>

      <Section title="At a Glance">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="card"><dt className="text-sm text-ink/60">{k}</dt><dd className="mt-1 font-semibold text-navy">{v}</dd></div>
          ))}
        </dl>
      </Section>

      <Section title="Our Story">
        <div className="grid items-center gap-10 md:grid-cols-3">
          <div className="card grid place-items-center">
            <Image src="/images/logos/logo.png" alt="Triyog Academy logo" width={200} height={200} />
          </div>
          <div className="space-y-4 text-ink/80 md:col-span-2">
            <p>Triyog Academy was established in 2072 BS in Lamkichuha-2, Motipur, Kailali.</p>
            <p>History and milestones: <TBC /></p>
          </div>
        </div>
      </Section>

      <Section title="Our Motto">
        <blockquote className="card mx-auto max-w-2xl text-center">
          <p lang="ne" className="text-3xl font-bold text-navy md:text-4xl">तमसो मा ज्योतिर्गमय</p>
          <p className="mt-3 text-ink/70">Lead me from darkness to light.</p>
        </blockquote>
      </Section>

      <Section title="What We Offer">
        <div className="grid gap-6 md:grid-cols-3">
          {offer.map(([t, d]) => (
            <article key={t} className="card"><h3 className="font-semibold text-green">{t}</h3><p className="mt-2 text-ink/70">{d}</p></article>
          ))}
        </div>
      </Section>

      <Section title="More About the School">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pending.map((p) => (
            <article key={p} className="card"><h3 className="font-semibold">{p}</h3><p className="mt-2"><TBC /></p></article>
          ))}
        </div>
      </Section>

      <section className="band bg-navy text-center text-white">
        <div className="wrap">
          <h2 className="text-3xl font-bold">Become Part of Our School</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-primary">Admissions</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
