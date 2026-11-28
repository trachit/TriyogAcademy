import type { Metadata } from "next";
import { FACEBOOK, Whatsapp } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Triyog Academy, Lamkichuha-2, Motipur, Kailali, Nepal.",
  alternates: { canonical: "/contact" },
};

const EMAIL = "triyogacademy@gmail.com";
const ADDRESS = "Lamkichuha-2, Motipur, Kailali, Nepal";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const methods = [
  ["Email", EMAIL, `mailto:${EMAIL}`, {}],
  ["WhatsApp", Whatsapp, `https://wa.me/${Whatsapp.replace(/\D/g, "")}`, external],
  ["Facebook", "facebook.com/triyogacademy", FACEBOOK, external],
  ["Visit us", ADDRESS, `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Triyog Academy, ${ADDRESS}`)}`, external],
] as const;

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy to-[#12184a] text-white">
        <div className="wrap band fade max-w-4xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Get in Touch</h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">Questions about admissions or school life? Reach Triyog Academy any of these ways.</p>
        </div>
      </section>

      <section className="band wrap">
        <div className="grid gap-6 sm:grid-cols-2">
          {methods.map(([label, text, href, attrs]) => (
            <a key={label} href={href} {...attrs} className="card block">
              <p className="text-sm text-ink/60">{label}</p>
              <p className="mt-1 break-words font-semibold text-navy">{text}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
