import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply for Admissions",
  description: "Apply to Triyog Academy, a private school in Lamkichuha, Motipur, Kailali.",
  alternates: { canonical: "/admissions" },
};
 
const PHONE = "+977 9812345678"; // confirm with the school
const EMAIL = "triyogacademy@gmail.com";
const WHATSAPP = `https://wa.me/9779841828074?text=${encodeURIComponent("Hello, I would like to apply to Triyog Academy.")}`;

const reasons = [
  ["Extracurriculars", "Dancing, music, sport and more, with dedicated sessions during school days."],
  ["Experienced teachers", "Teachers with four or more years of experience."],
  ["English-medium", "English is the main language of instruction."],
];
const programs = [["Early Childhood Education", "/academics/early-childhood"], ["Primary Education", "/academics/primary"]];
const requirements = ["Eligible grades", "Required documents", "Fees"];
const steps = ["Contact the school to apply", "Submit required information", "School reviews the application", "Complete enrollment after acceptance"];

const TBC = () => <span className="rounded bg-gold/15 px-1.5 italic text-ink/60">[To be supplied]</span>;

// Alternate backgrounds come from `even:bg-mist` (hero is section 1).
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="band scroll-mt-16 even:bg-mist">
    <div className="wrap">
      <h2 className="mb-8 text-3xl font-bold text-navy">{title}</h2>
      {children}
    </div>
  </section>
);

export default function Admissions() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#12184a] text-white">
        <div className="wrap band fade max-w-4xl">
          <p className="eyebrow">Admissions · तमसो मा ज्योतिर्गमय</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Your Journey Begins at Triyog Academy.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">Learn how admission works, what we need from you, and how to reach our admissions team.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">Apply on WhatsApp</a>
            <a href="#contact" className="btn-outline">Contact Admissions</a>
          </div>
        </div>
      </section>

      <Section id="process" title="Admission Process">
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s} className="card flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy font-bold text-gold">{i + 1}</span>
              <span className="pt-1.5">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="faq" title="Frequently Asked Questions">
        <details className="card group max-w-3xl p-0">
          <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-semibold">
            <TBC /><span aria-hidden className="transition-transform group-open:rotate-180">⌄</span>
          </summary>
          <p className="px-5 pb-5"><TBC /></p>
        </details>
      </Section>

      <Section id="contact" title="Contact Admissions">
        <address className="not-italic text-ink/80">
          <p className="font-semibold text-navy">Triyog Academy</p>
          <p className="mt-2">Lamkichuha-2, Motipur, Kailali, Nepal</p>
          <p className="mt-2">Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="underline">{PHONE}</a></p>
          <p>Email: <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}?subject=Admissions enquiry`} className="btn-primary">Email an Enquiry</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-navy">WhatsApp</a>
            <a href="https://www.facebook.com/triyogacademy" target="_blank" rel="noopener noreferrer" className="btn-navy">Facebook</a>
          </div>
        </address>
      </Section>
    </>
  );
}
