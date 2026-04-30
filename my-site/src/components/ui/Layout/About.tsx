"use client"
const timeline = [
  { year: "2024–now", title: "Sweeftcode + DealWavv",   desc: "Two concurrent ventures — API infrastructure for African developers and a pitch platform connecting founders with investors." },
  { year: "2022–23",  title: "Hivestak",                desc: "Multi-chain DeFi platform. Shut down by Nigerian VASP capital requirements at operating scale, not by product failure." },
  { year: "2020–22",  title: "Growly",                  desc: "Lending and savings fintech. 17K+ daily active users. Won BizzTech Africa Startup Competition. Shut down by lending regulations." },
  { year: "2019–20",  title: "Sweeftly",                desc: "Merchant e-commerce platform. 1,700+ Play Store installs. Built and shipped independently." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 32px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, paddingBottom: 20, borderBottom: "1px solid var(--color-border)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
            About
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="about-grid">

          {/* Bio */}
          <div>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--color-ink-2)", marginBottom: 18 }}>
              I'm a full-stack engineer and serial founder based in Lagos, Nigeria. Across over 8 years I've designed, built, and shipped complete production systems across fintech, e-commerce, DeFi, developer infrastructure, and consumer products. Most of them have been solo or in small founding teams.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--color-ink-2)", marginBottom: 18 }}>
              Two of my startups were shut down by Nigerian regulatory changes not by product failure. I learnt A LOT on the journey and worked with amazing people. Growly hit 17K+ daily active users in 2 months. Hivestak operated at scale in DeFi. Both were production-quality builds.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "var(--color-ink-3)" }}>
              I studied at Kwame Nkrumah University of Science and Technology. Today I build Sweeftcode and DealWavv with my co-founder, and take selective contract work where I can add serious value fast.
            </p>

            {/* Traits */}
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--color-border)" }}>
              {[
                ["Systems thinker",  "I scope by understanding the full system — schema, state, API contracts, UI — before writing a line."],
                ["Ships fast",       "Founder-paced shipping for 10 years has given me a fast-moving mindset. Loosely defined problems can easily be structured out and shipped production-ready."],
                ["High autonomy",    "Every product in this portfolio was built with minimal oversight. I ask the right questions early."],
              ].map(([t, d], i) => (
                <div key={i} style={{ padding: "16px 20px", borderBottom: i < 2 ? "1px solid var(--color-border)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--color-ink)", marginBottom: 4 }}>{t}</div>
                  <div style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Timeline
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timeline.map((m, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "0 20px", paddingBottom: i < timeline.length - 1 ? 28 : 0 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--color-ink-4)", paddingTop: 3, letterSpacing: "0.04em" }}>
                    {m.year}
                  </div>
                  <div style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: 20, paddingBottom: i < timeline.length - 1 ? 28 : 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: -4, top: 6, width: 7, height: 7, borderRadius: "50%", background: "var(--color-ink)", border: "2px solid var(--color-bg)" }} />
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--color-ink)", marginBottom: 5, letterSpacing: "-0.01em" }}>{m.title}</div>
                    <p style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}