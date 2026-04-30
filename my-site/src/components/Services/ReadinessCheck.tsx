"use client"
import { FileText, CheckCircle, Mail, ExternalLink } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Upload your deck to Unbiased Ventures",
    desc: "Create your account, use promo code UVSCHMITTBCOMAN, upload your latest pitch deck, and generate your first report.",
    cta: "Open Unbiased Ventures",
    href: "https://unbiasedventures.io",
  },
  {
    icon: CheckCircle,
    step: "02",
    title: "Complete the D-Risk.IT questionnaire",
    desc: "Answer the D-Risk.IT questions and generate your second report to identify strengths, gaps, and preparation needs.",
    cta: "Open D-Risk.IT",
    href: "https://d-risk.it",
  },
  {
    icon: Mail,
    step: "03",
    title: "Send both reports by email",
    desc: "Send both completed reports to guenter@bridge4impact.com before requesting a first fundraising meeting.",
    cta: "Email the reports",
    href: "mailto:guenter@bridge4impact.com",
  },
];

const scoringTiers = [
  {
    range: "Above 80%",
    label: "Strong foundation",
    desc: "Usually a strong enough basis for a first serious fundraising discussion.",
    color: "#0d7a6b",
    bg: "var(--color-brand-muted)",
  },
  {
    range: "65–79%",
    label: "Good basis",
    desc: "Often a good basis for targeted readiness improvement before outreach.",
    color: "#5a706c",
    bg: "var(--color-surface-3)",
  },
  {
    range: "Below 65%",
    label: "Prepare first",
    desc: "In most cases, more preparation is advisable before active fundraising support would be efficient.",
    color: "#8fa5a1",
    bg: "var(--color-surface-2)",
  },
];

export default function ReadinessCheck() {
  return (
    <section
      id="readiness"
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
            Investment Readiness Pre-Check
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
            Pre-check your investment readiness before we talk
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--color-ink-3)",
              lineHeight: 1.65,
              maxWidth: 560,
            }}
          >
            Before I invest time in a first fundraising meeting, I ask for two
            readiness reports. This helps me understand your current preparation
            level and whether active fundraising already makes sense.
          </p>
        </div>

        {/* 3 Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            marginBottom: 48,
          }}
          className="steps-grid"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--color-brand-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} color="var(--color-brand)" />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 28,
                      fontWeight: 400,
                      color: "var(--color-border-strong)",
                      lineHeight: 1,
                    }}
                  >
                    {s.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--color-ink-3)",
                    flex: 1,
                  }}
                >
                  {s.desc}
                </p>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--color-brand)",
                    textDecoration: "none",
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: 14,
                    marginTop: 4,
                  }}
                >
                  {s.cta}
                  <ExternalLink size={13} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Scoring tiers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 14,
          }}
          className="steps-grid"
        >
          {scoringTiers.map((t, i) => (
            <div
              key={i}
              style={{
                background: t.bg,
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: t.color,
                  marginBottom: 4,
                }}
              >
                {t.range}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: t.color,
                  marginBottom: 8,
                }}
              >
                {t.label}
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "var(--color-ink-3)",
                }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}