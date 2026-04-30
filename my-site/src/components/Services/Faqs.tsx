"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you work only with startups?",
    a: "No. Bridge4Impact also supports venture funds, especially where LP positioning and aligned capital raising matter.",
  },
  {
    q: "Do you always work on a success-fee basis?",
    a: "Not always. It depends on readiness, complexity, and how much preparation is still needed before outreach can be effective.",
  },
  {
    q: "When should we talk?",
    a: "Usually after the pre-check or before broad investor outreach starts. Early conversations often save substantial time, effort, and reputation.",
  },
  {
    q: "Can you work internationally?",
    a: "Yes. The positioning and investor-targeting approach is designed for cross-border fundraising contexts and international collaboration.",
  },
  {
    q: "What sectors and stages do you focus on?",
    a: "Primarily impact-oriented startups and venture funds — across clean energy, fintech, health, education, and other mission-driven areas. Stage ranges from early growth to fund LP raising.",
  },
  {
    q: "How long does the readiness check take?",
    a: "The two reports typically take a few hours to generate on your side. Once sent, I review them and can usually schedule a first call within a few days.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: "96px 24px",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, textAlign: "center" }}>
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
            FAQ
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 14,
            }}
          >
            Questions a serious client may ask before reaching out
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: open === i ? "var(--color-brand-muted)" : "var(--color-surface-2)",
                border: `1px solid ${open === i ? "var(--color-brand-subtle)" : "var(--color-border)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "all 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  gap: 16,
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: open === i ? "var(--color-brand-dark)" : "var(--color-ink)",
                    lineHeight: 1.3,
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  color={open === i ? "var(--color-brand)" : "var(--color-ink-4)"}
                  style={{
                    flexShrink: 0,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: 14.5,
                    lineHeight: 1.7,
                    color: "var(--color-ink-3)",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}