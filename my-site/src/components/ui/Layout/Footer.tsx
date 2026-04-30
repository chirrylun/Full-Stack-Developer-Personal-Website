"use client"
export default function Footer() {
  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)", padding: "24px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>
          © {new Date().getFullYear()} Adebanji Oluwatoni
        </span>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { label: "email",    href: "mailto:adebanji@sweeftcode.com"            },
            { label: "linkedin", href: "https://linkedin.com/in/adebanji-oluwatoni-5758141b8"},
            { label: "github",   href: "https://github.com/chirrylun"              },
            { label: "telegram", href: "https://t.me/adebanji"                    },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-4)")}>
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>
          available · $40/hr
        </span>
      </div>
    </footer>
  );
}