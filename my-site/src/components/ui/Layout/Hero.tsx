"use client"
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 32px 64px", background: "var(--color-bg)", position: "relative" }}>

      <div style={{ maxWidth: 1080, margin: "0 auto", width: "100%" }}>

        {/* Large rule above headline */}
        <div style={{ borderTop: "1px solid var(--color-border-2)", marginBottom: 40 }} />

        {/* Two-column bottom layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "flex-end" }} className="hero-cols">

          {/* Headline */}
          <div>
            <h1 className="fade-up" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 7.5vw, 108px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", color: "var(--color-ink)" }}>
              I build<br />
              things<br />
              <span style={{ color: "var(--color-ink-3)", fontStyle: "italic" }}>end-to-end.</span>
            </h1>
          </div>

          {/* Right meta column */}
          <div className="fade-up delay-2" style={{ paddingBottom: 6 }}>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--color-ink-3)", marginBottom: 32 }}>
              8+ years designing, building, and shipping complete production systems across fintech, developer infrastructure, and consumer products.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--color-border)", marginBottom: 28 }}>
              {[
                ["Stack",      "React · Next.js · Python · Node · TS"],
                ["Rate",       "$40 / hour · contract"],
                ["Autonomy",   "High — minimal oversight"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", minWidth: 72, paddingTop: 1 }}>{k}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-2)" }}>{v}</span>
                </div>
              ))}
            </div>

            <a href="#work" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "var(--color-ink)", textDecoration: "none", transition: "gap 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.gap = "14px")}
              onMouseLeave={e => (e.currentTarget.style.gap = "8px")}>
              See my work <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hero-cols { grid-template-columns: 1fr !important; gap: 32px !important; } }
      `}</style>
    </section>
  );
}