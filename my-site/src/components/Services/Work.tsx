"use client";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "CloutEye",
    type: "Creator Economy · Social Analytics",
    url: "https://www.clouteye.com",
    summary: "Performance marketplace connecting African brands with creators, backed by social analytics. Brands post briefs with a goal, platform and price; creators accept, deliver, and get paid from escrow once the work is approved, with results tracked per creator as cost per result. Also includes a social listening engine across TikTok, Instagram and X.",
    highlights: [
      "Shared-cache scraping pipeline: one scrape per platform and keyword, fanned out to every client that needs it",
      "Collab marketplace: briefs, escrow-backed payments, creator wallets, withdrawals, disputes and fulfillment flows",
      "Separate brand, creator, partner and admin portals with their own auth flows",
      "Flutterwave billing, referral and rewards ledger, PDF report generation",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "Zustand", "Apify", "Flutterwave"],
    stat: "5 platforms",
  },
  {
    index: "02",
    title: "Swappa",
    type: "Marketplace · Escrow · WhatsApp",
    url: "https://www.swappa.chat",
    summary: "WhatsApp-native escrow marketplace for buying and selling digital assets in Nigeria: Google Ads and Play Console accounts, AdSense sites, social media accounts and gift cards. Buyer and seller agree terms in chat, payment is held in escrow, and funds are released only once the buyer confirms delivery.",
    highlights: [
      "WhatsApp bot with session-based flows for selling, browsing, offers, buy requests, delivery confirmation and disputes, behind signature-verified Meta webhooks",
      "Flutterwave escrow payment links with tiered platform fees and a manual payout-release step",
      "Next.js admin dashboard: listings, transactions, pending releases, disputes, users, broadcasts and analytics",
      "Next.js marketing site with FAQ, sitemap and llms.txt for search and AI discoverability",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "WhatsApp Cloud API", "Flutterwave", "Zustand", "Tailwind CSS"],
    stat: "Escrow",
  },
  {
    index: "03",
    title: "Unified API Gateway",
    type: "API Infrastructure · Developer Tools",
    url: null,
    summary: "Universal API gateway and SDK platform built for African developers. One consistent interface across fragmented fintech, identity, and logistics providers replacing multiple SDK imports with one — Works with Paystack, Mono, YouVerify, and 5+ more. No longer live.",
    highlights: [
      "Monorepo: Next.js frontend + Node/Express backend + Prisma ORM",
      "Scope-based middleware for tiered API access control",
      "Atomic API call logging via Prisma transactions",
      "Zustand state layer with RawIntegration/DisplayIntegration type split",
      "Google OAuth popup flow with full cross-origin handling",
      "Admin dashboard: users, integrations, API data, log (with pipeline-level error handling), billing plans",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "MongoDB", "Zustand"],
    stat: "Unified API",
  },
  {
    index: "04",
    title: "Growly",
    type: "Fintech · Consumer",
    url: null,
    summary: "Lending and savings platform for everyday Nigerians connecting Lenders with Borrowers for short-term loans. Scaled to 17,000+ daily active users with 2 months before being shut down by lending regulation.",
    highlights: [
      "Scaled to 17K+ DAUs in 2 months",
      "Real-time transaction engine with local payment rails",
      "Won BizzTech Africa Startup Competition",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Payment & KYC Apis"],
    stat: "17,000+ DAU",
  },
  {
    index: "05",
    title: "DealWavv",
    type: "Founder · Investor Platform",
    url: "https://dealwavv.com",
    summary: "TikTok-style pitch platform connecting African founders with investors. 60-second pitches, swipe-based decisions with no wasted meetings and no more cold emails. Currently 3 committed startups, $200K+ combined MRR ($2M+ ARR), 400K+ users, $4M raise in motion.",
    highlights: [
      "Full-stack Next.js + React Native dual platform",
      "3 committed startups onboarded at pre-launch stage",
    ],
    stack: ["Next.js", "TypeScript", "React Native", "Prisma", "MongoDB"],
    stat: "$200K+ MRR",
  },
  {
    index: "06",
    title: "Sweeftly",
    type: "E-commerce · Mobile",
    url: null,
    summary: "Merchant e-commerce platform enabling Nigerian small businesses to accept payments and manage digital storefronts. Built, launched, and maintained independently.",
    highlights: [
      "End-to-end React Native mobile app",
      "Merchant dashboard: inventory, orders, payments",
      "1,700+ Play Store installs",
    ],
    stack: ["React Native", "Node.js", "Express", "MongoDB"],
    stat: "1,700+ installs",
  },
  {
    index: "07",
    title: "Hivestak",
    type: "DeFi · Web3",
    url: null,
    summary: "Multi-chain DeFi platform with crypto wallet, staking, and yield features for the African market. Shut down by Nigerian VASP capital requirements at operating scale.",
    highlights: [
      "Multi-chain wallet with swap and staking",
      "React Native app with 2FA gate and surgical ChangePin integration",
      "On-chain integrations across multiple networks",
    ],
    stack: ["React Native", "Web3.js", "Node.js", "Solidity"],
    stat: "Multi-chain",
  },
  {
    index: "08",
    title: "Affordables",
    type: "Retail · Mobile POS",
    url: null,
    summary: "Mobile point-of-sale and inventory app for small merchants. Manage products and categories, ring up orders at checkout, track customers, payments and stock movement, and delegate work to sales agents with scoped permissions.",
    highlights: [
      "Expo / React Native app with cart, discount and manual payment checkout flows",
      "Agent management with per-agent permission controls",
      "Sales analytics with charts, plus PDF and Excel export of records",
    ],
    stack: ["React Native", "Expo", "React Navigation", "REST APIs"],
    stat: "Mobile POS",
  },
  {
    index: "09",
    title: "Inscrypt",
    type: "Agency · Web",
    url: null,
    summary: "Company website for Inscrypt Tech, a web and mobile development agency. Service pages for websites, mobile apps, UX/UI research, digital marketing and in-house tech teams, plus a portfolio and lead capture.",
    highlights: [
      "Interactive build-tracker pages showing client website progress phase by phase",
      "Animated Next.js UI built with Framer Motion and MUI",
      "EmailJS-powered contact flow with no backend to maintain",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MUI", "Framer Motion"],
    stat: "Agency site",
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: "100px 32px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 56, paddingBottom: 20, borderBottom: "1px solid var(--color-border)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--color-ink)" }}>
            Selected Work
          </h2>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>
            {projects.length} projects
          </span>
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid var(--color-border)", padding: "40px 0", display: "grid", gridTemplateColumns: "56px 1fr 160px", gap: "0 32px", transition: "background 0.15s", cursor: "default" }}
              className="project-row"
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-bg-2)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {/* Index */}
              <div style={{ paddingTop: 4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)" }}>{p.index}</span>
              </div>

              {/* Main */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                    {p.title}
                  </h3>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--color-ink-4)", textDecoration: "none", fontSize: 12, transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-4)")}>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-ink-4)", marginBottom: 14, letterSpacing: "0.04em" }}>
                  {p.type}
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-ink-3)", marginBottom: 20, maxWidth: 600 }}>
                  {p.summary}
                </p>

                {/* Highlights — visible on hover via CSS class would need client, keeping static */}
                <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 20 }}>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--color-ink-4)", fontSize: 12, lineHeight: 1.65, flexShrink: 0 }}>—</span>
                      <span style={{ fontSize: 13, color: "var(--color-ink-3)", lineHeight: 1.65 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Stack tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map((s, j) => (
                    <span key={j} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--color-ink-3)", background: "var(--color-bg-2)", border: "1px solid var(--color-border)", padding: "3px 8px", borderRadius: 3, letterSpacing: "0.02em" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stat */}
              <div style={{ textAlign: "right", paddingTop: 4 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--color-ink-2)", letterSpacing: "-0.01em" }}>{p.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .project-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
