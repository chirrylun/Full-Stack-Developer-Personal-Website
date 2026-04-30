"use client"
import { FileText, Users, BarChart2, CheckCircle2, ArrowRight } from "lucide-react";

const packages = [
  {
    icon: FileText,
    title: "Investor Readiness Audit",
    tagline: "Know whether you are ready to raise, what is missing, and what to fix first.",
    price: "€350 net",
    audience: "Best for startups before active outreach",
    features: ["Pitch/deck review", "Gap analysis", "Positioning recommendations", "45-minute review call"],
    ctaPrimary: { label: "Buy now", href: "#contact" },
    ctaSecondary: { label: "View details", href: "#contact" },
    highlight: false,
  },
  {
    icon: Users,
    title: "Fundraising Workflow Sprint",
    tagline: "Turn fundraising chaos into a repeatable system in a short, focused sprint.",
    price: "€1,200 net",
    audience: "Best for teams that need structure fast",
    features: ["CRM structure", "Segmentation logic", "Outreach templates", "Follow-up workflow"],
    ctaPrimary: { label: "Buy now", href: "#contact" },
    ctaSecondary: { label: "View details", href: "#contact" },
    highlight: true,
  },
  {
    icon: BarChart2,
    title: "Fractional Fundraising Ops Support",
    tagline: "Ongoing remote support without hiring a full-time fundraising operations person.",
    price: "Intro call + €350 net onboarding deposit",
    audience: "Best for startups and fund managers in live fundraising mode",
    features: ["Weekly strategy support", "Flow workflow management", "Targeting refinement", "Pipeline review"],
    ctaPrimary: { label: "Book intro call", href: "https://calendly.com/g-schmittberger" },
    ctaSecondary: { label: "View details", href: "#contact" },
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      style={{
        padding: "96px 24px",
        background: "var(--color-surface-2)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 56 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-brand)",
              marginBottom: 12,
            }}
          >
            Packages
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 14,
            }}
          >
            Choose the right starting package
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--color-ink-3)",
              lineHeight: 1.65,
              maxWidth: 520,
            }}
          >
            Three clear entry points — each adapted to where you actually are in
            your fundraising journey.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
          className="packages-grid"
        >
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <div
                key={i}
                style={{
                  background: pkg.highlight ? "var(--color-brand)" : "#fff",
                  border: `1px solid ${pkg.highlight ? "var(--color-brand)" : "var(--color-border)"}`,
                  borderRadius: 18,
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  position: "relative",
                }}
              >
                {pkg.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                      color: "var(--color-brand)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: 20,
                      border: "1px solid var(--color-brand-subtle)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most popular
                  </div>
                )}

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: pkg.highlight ? "rgba(255,255,255,0.2)" : "var(--color-brand-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={20} color={pkg.highlight ? "#fff" : "var(--color-brand)"} />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 18,
                      fontWeight: 700,
                      color: pkg.highlight ? "#fff" : "var(--color-ink)",
                      marginBottom: 8,
                      lineHeight: 1.25,
                    }}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: pkg.highlight ? "rgba(255,255,255,0.8)" : "var(--color-ink-3)",
                    }}
                  >
                    {pkg.tagline}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: `1px solid ${pkg.highlight ? "rgba(255,255,255,0.2)" : "var(--color-border)"}`,
                    paddingTop: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 800,
                      color: pkg.highlight ? "#fff" : "var(--color-ink)",
                      marginBottom: 4,
                    }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: pkg.highlight ? "rgba(255,255,255,0.65)" : "var(--color-ink-4)",
                    }}
                  >
                    {pkg.audience}
                  </div>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                  {pkg.features.map((f, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        fontSize: 13.5,
                        color: pkg.highlight ? "rgba(255,255,255,0.85)" : "var(--color-ink-2)",
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        color={pkg.highlight ? "rgba(255,255,255,0.7)" : "var(--color-brand)"}
                        style={{ flexShrink: 0 }}
                      />
                      {f}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                  <a
                    href={pkg.ctaSecondary.href}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      color: pkg.highlight ? "rgba(255,255,255,0.85)" : "var(--color-ink-2)",
                      background: pkg.highlight ? "rgba(255,255,255,0.12)" : "var(--color-surface-2)",
                      border: `1px solid ${pkg.highlight ? "rgba(255,255,255,0.2)" : "var(--color-border)"}`,
                    }}
                  >
                    {pkg.ctaSecondary.label}
                  </a>
                  <a
                    href={pkg.ctaPrimary.href}
                    target={pkg.ctaPrimary.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: 8,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: "none",
                      color: pkg.highlight ? "var(--color-brand)" : "#fff",
                      background: pkg.highlight ? "#fff" : "var(--color-brand)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    {pkg.ctaPrimary.label}
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p
          style={{
            marginTop: 24,
            fontSize: 13,
            color: "var(--color-ink-4)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          All prices are shown net. VAT is added where legally required. Package 3 uses a free intro call first
          and a separate onboarding deposit if both sides want to continue.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .packages-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}