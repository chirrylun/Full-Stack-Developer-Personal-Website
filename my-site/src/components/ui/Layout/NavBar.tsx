"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work",    href: "#work"    },
  { label: "Stack",   href: "#stack"   },
  { label: "About",   href: "#about"   },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: scrolled ? "rgba(249,248,246,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
    transition: "all 0.25s ease",
  };

  return (
    <header style={navStyle}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a href="#" style={{ textDecoration: "none", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-ink)", letterSpacing: "-0.02em" }}>
            Adebanji<span style={{ color: "var(--color-ink-3)" }}>.</span>
          </a>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", letterSpacing: "0.06em" }} className="nav-meta">
            Full-Stack Engineer · Lagos, Nigeria
          </span>
        </div>

        {/* desktop */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="desk-nav">
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent-green)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", letterSpacing: "0.06em" }}>Available</span>
          </div>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 13, color: "var(--color-ink-3)", textDecoration: "none", padding: "6px 12px", borderRadius: 6, transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-3)")}>
              {l.label}
            </a>
          ))}
          <a href="mailto:oluwatoniadebanji@gmail.com" style={{ marginLeft: 12, fontSize: 13, fontWeight: 500, color: "var(--color-bg)", background: "var(--color-ink)", padding: "7px 18px", borderRadius: 6, textDecoration: "none", transition: "opacity 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Hire me
          </a>
        </nav>

        {/* mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-ink)", display: "none" }} className="mob-btn">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)", padding: "12px 32px 20px" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "11px 0", fontSize: 15, color: "var(--color-ink-2)", textDecoration: "none", borderBottom: "1px solid var(--color-border)" }}>{l.label}</a>
          ))}
          <a href="mailto:adebanji@sweeftcode.com" style={{ display: "block", marginTop: 14, textAlign: "center", background: "var(--color-ink)", color: "var(--color-bg)", padding: "12px", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>Hire me</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .desk-nav { display: none !important; } .mob-btn { display: flex !important; } .nav-meta { display: none !important; } }
      `}</style>
    </header>
  );
}