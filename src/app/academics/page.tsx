import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academics",
  description: "Academics at Triyog Academy, Kailali: Kindergarten to Grade 8, English-medium instruction.",
  alternates: { canonical: "/academics" },
};

const grades = ["Kindergarten", ...Array.from({ length: 8 }, (_, i) => `Grade ${i + 1}`)];
const strengths = [
  ["English-medium", "English is the main language of instruction."],
  ["Experienced teachers", "Teachers with four or more years of experience."],
  ["Extracurriculars", "Dancing, music, sport and more, with dedicated sessions during school days."],
];

// Alternate backgrounds come from `even:bg-mist` (the hero is section 1).
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="band even:bg-mist">
    <div className="wrap">
      <h2 className="mb-8 text-3xl font-bold text-navy">{title}</h2>
      {children}
    </div>
  </section>
);

export default function Academics() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#12184a] text-white">
        <div className="wrap band fade max-w-4xl">
          <p className="eyebrow">Academics</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Kindergarten to Grade 8</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">English-medium learning at Triyog Academy, from a child&apos;s first classroom through Grade 8.</p>
        </div>
      </section>

      <Section title="Grades We Offer">
        <ul className="flex flex-wrap gap-3">
          {grades.map((g) => <li key={g} className="card px-5 py-3 font-semibold text-navy">{g}</li>)}
        </ul>
      </Section>

      <Section title="Our Approach">
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map(([t, d]) => (
            <article key={t} className="card"><h3 className="font-semibold text-green">{t}</h3><p className="mt-2 text-ink/70">{d}</p></article>
          ))}
        </div>
      </Section>

      <section className="band bg-navy text-center text-white">
        <div className="wrap">
          <h2 className="text-3xl font-bold">Begin Your Child&apos;s Learning Journey.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/admissions" className="btn-primary">Admissions</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
