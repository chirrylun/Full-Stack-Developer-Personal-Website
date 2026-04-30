"use client"
const categories = [
  {
    label: "Frontend",
    items: ["React / Next.js", "TypeScript", "React Native", "Zustand / Jotai / Context", "Tailwind · Chakra UI · shadcn", "MapLibre GL JS"],
  },
  {
    label: "Backend",
    items: ["Node.js / Express", "Python / FastAPI", "SQLAlchemy", "Prisma ORM", "REST API design", "OpenAPI / type-safe clients"],
  },
  {
    label: "Data & Infrastructure",
    items: ["MongoDB", "PostgreSQL / SQLite", "Monorepo / Nx / pnpm", "Docker", "Vercel · Heroku · Render", "ESLint / Ruff"],
  },
  {
    label: "AI & Workflow",
    items: ["Claude / Claude Code", "Cursor", "LLM integration", "AI-accelerated development", "Prompt engineering", "GitHub Copilot"],
  },
];

export default function Stack() {
  return (
    <section id="stack" style={{ padding: "100px 32px", background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, paddingBottom: 20, borderBottom: "1px solid var(--color-border)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
            Tech Stack
          </h2>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>10+ years</span>
        </div>

        {/* 4-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: "1px solid var(--color-border)" }} className="stack-grid">
          {categories.map((cat, i) => (
            <div key={i} style={{
              padding: "28px 24px",
              borderRight: i < categories.length - 1 ? "1px solid var(--color-border)" : "none",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--color-ink)", marginBottom: 20, letterSpacing: "-0.01em" }}>
                {cat.label}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-ink-4)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--color-ink-3)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div style={{ marginTop: 24, padding: "18px 24px", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", display: "flex", gap: 16, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", flexShrink: 0, paddingTop: 1 }}>Note —</span>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--color-ink-3)", lineHeight: 1.7, letterSpacing: "0.01em" }}>
            I use AI tools like Claude Code, Cursor, Copilot to accelerate my development and debugging, not replace thinking.
            Every system I build is reasoned from architecture first. I work with high autonomy and don't need handholding mid-build but I'm still always open to feedback.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .stack-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .stack-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}