"use client";
import { ArrowUpRight } from "lucide-react";

const contacts = [
  { label: "Email",    value: "oluwatoniadebanji@gmail.com",              href: "mailto:adebanji@sweeftcode.com",             desc: "Best for project inquiries" },
  { label: "LinkedIn", value: "linkedin.com/in/adebanji-oluwatoni-5758141b8",   href: "https://linkedin.com/in/adebanji-oluwatoni-5758141b8", desc: "Professional profile" },
  { label: "GitHub",   value: "github.com/chirrylun",                  href: "https://github.com/adebanji",               desc: "Code & open source" },
  { label: "Telegram", value: "@oluwatoniadebanji",                            href: "https://t.me/adebanji",                     desc: "Fastest response" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 32px", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, paddingBottom: 20, borderBottom: "1px solid var(--color-border)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
            Get in Touch
          </h2>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>$20 / hr · available now</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="contact-grid">

          {/* Left */}
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--color-ink-2)", marginBottom: 16 }}>
              I'm open to contract and freelance work — remote, async-first, high autonomy. If you have a system to build or a product that needs to ship, I'd like to hear about it.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-ink-4)", lineHeight: 1.7 }}>
              No long meetings. No hand-holding. Just good work shipped fast.
            </p>
          </div>

          {/* Right: contact rows */}
          <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--color-border)" }}>
            {contacts.map((c, i) => (
              <a key={i} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: i < contacts.length - 1 ? "1px solid var(--color-border)" : "none", textDecoration: "none", background: "var(--color-surface)", transition: "background 0.15s, padding-left 0.2s" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--color-bg-2)";
                  e.currentTarget.style.paddingLeft = "26px";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--color-surface)";
                  e.currentTarget.style.paddingLeft = "20px";
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)" }}>{c.value}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", marginTop: 2 }}>{c.desc}</div>
                </div>
                <ArrowUpRight size={14} color="var(--color-ink-4)" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}