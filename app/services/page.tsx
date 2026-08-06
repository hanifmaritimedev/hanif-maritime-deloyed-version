import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Compass,
  Globe2,
  ShieldCheck,
  Ship,
  Users,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/site/layout/Wrapper";

const accent = "#1EAEDB";

const heroStats = [
  {
    value: "15+",
    label: "Dry bulk cargo categories handled",
  },
  {
    value: "4",
    label: "Charter structures tailored to cargo strategy",
  },
  {
    value: "24/7",
    label: "Commercial coordination and voyage support",
  },
];

const commodities = [
  "Iron ore",
  "Fertilizers",
  "Grain",
  "Cement",
  "Salt",
  "Aggregate stone",
  "Clinker",
  "Coal",
  "Limestone",
  "Dolomite",
  "Slag",
  "Gypsum",
  "Steel cargo",
  "Chrome ore",
  "Alumina",
];

type ServicePillar = {
  id: string;
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  points: string[];
  note: string;
};

const servicePillars: ServicePillar[] = [
  {
    id: "01",
    title: "Transportation of Dry Bulk Commodities",
    label: "Core Cargo",
    description:
      "We move essential raw materials with dependable scheduling, disciplined cargo handling, and a commercial focus on predictable execution.",
    image: "/assets/images/ship/image_1.jpeg",
    imageAlt: "Dry bulk vessel loading operations",
    icon: Waves,
    points: [
      "Reliable movement of industrial and agricultural cargoes",
      "Disciplined vessel planning for turnaround efficiency",
      "Structured communication from nomination to discharge",
    ],
    note: "Built for high-volume cargo programs and repeat trade flows.",
  },
  {
    id: "02",
    title: "Chartering Services",
    label: "Commercial Desk",
    description:
      "Our chartering team structures flexible freight solutions for spot cargoes, dedicated tonnage, and long-term shipping programs.",
    image: "/assets/images/ship/image_4.jpeg",
    imageAlt: "Commercial shipping vessel at sea",
    icon: Compass,
    points: [
      "Voyage, time charter, bareboat, and COA solutions",
      "Competitive market coverage with responsive fixture support",
      "Single commercial interface throughout execution",
    ],
    note: "Designed to match freight exposure, volume needs, and trading flexibility.",
  },
  {
    id: "03",
    title: "Fleet Management",
    label: "Vessel Oversight",
    description:
      "Technical, crew, and safety management services keep vessels operating efficiently, compliantly, and with reduced operational friction.",
    image: "/assets/images/ship/image_2.jpeg",
    imageAlt: "Managed dry bulk vessel in transit",
    icon: ShieldCheck,
    points: [
      "Technical management with maintenance discipline",
      "Crew coordination backed by operational standards",
      "Safety oversight aligned with compliance requirements",
    ],
    note: "Focused on reliability, risk control, and consistent vessel readiness.",
  },
  {
    id: "04",
    title: "Consulting Services",
    label: "Advisory Support",
    description:
      "We provide practical guidance for commercial decisions, operating improvements, and regulatory navigation across shipping and logistics.",
    image: "/assets/images/ship/image_5.jpeg",
    imageAlt: "Maritime consulting and vessel operations support",
    icon: Users,
    points: [
      "Operational efficiency review and practical recommendations",
      "Market analysis for shipping decisions and cargo planning",
      "Regulatory awareness for lower execution risk",
    ],
    note: "Useful when shipping decisions need commercial context, not just freight quotes.",
  },
];

const charteringServices = [
  {
    title: "Voyage Charter",
    summary:
      "Reliable single-voyage and spot-shipment solutions that balance freight economics, speed, and operational control.",
    gains: [
      "Fast freight quotations",
      "Competitive market pricing",
      "Reliable vessel nominations",
      "Efficient port operations",
    ],
  },
  {
    title: "Time Charter",
    summary:
      "Dedicated vessel capacity for customers who need flexible trading without the burden of vessel ownership.",
    gains: [
      "Guaranteed vessel availability",
      "Flexible worldwide trading",
      "Expert technical management",
      "Reduced operational risk",
    ],
  },
  {
    title: "Bareboat Charter",
    summary:
      "Longer-term access to quality dry bulk tonnage for operators who want fleet growth with operational control.",
    gains: [
      "Long-term fleet solutions",
      "Commercial flexibility",
      "Well-maintained vessels",
      "Tailored charter structures",
    ],
  },
  {
    title: "Contract of Affreightment",
    summary:
      "Structured shipping programs for producers, traders, and industrial customers moving recurring cargo volumes.",
    gains: [
      "Assured transport capacity",
      "Predictable logistics costs",
      "Flexible vessel scheduling",
      "Reduced market exposure",
    ],
  },
];

const operatingModel = [
  {
    step: "01",
    title: "Cargo Review",
    text: "We assess cargo type, timing, route profile, and operational constraints before proposing a structure.",
    icon: Anchor,
  },
  {
    step: "02",
    title: "Freight Structuring",
    text: "We match the requirement to the right charter model, vessel profile, and commercial risk balance.",
    icon: Ship,
  },
  {
    step: "03",
    title: "Execution Control",
    text: "Fixture follow-up, nomination, voyage coordination, and communication stay centralized through one team.",
    icon: Clock3,
  },
  {
    step: "04",
    title: "Performance Focus",
    text: "We stay focused on safe operations, on-time delivery, and long-term commercial continuity.",
    icon: BadgeCheck,
  },
];

const partnerPoints = [
  "Commercial flexibility",
  "Safe and compliant operations",
  "Transparent communication",
  "On-time performance",
  "Global market expertise",
  "Long-term partnerships built on trust",
];

const chipStyle = {
  border: "1px solid rgba(14, 165, 233, 0.16)",
  background: "rgba(14, 165, 233, 0.06)",
  color: "#243447",
  borderRadius: "999px",
  fontSize: "13px",
  padding: "0.65rem 0.9rem",
  lineHeight: 1.25,
};

const heroMetricCardStyle = {
  background: "rgba(255, 255, 255, 0.07)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "18px",
  backdropFilter: "blur(10px)",
};

const ServicesPage = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark position-relative overflow-hidden ds-hero">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(30,174,219,0.2), transparent 30%), radial-gradient(circle at bottom right, rgba(125,211,252,0.14), transparent 34%)",
          }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5 pointer-events-none">
          <div
            className="w-100 h-100"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill border border-sky-400/25 bg-sky-400/10 text-sky-300 text-uppercase fw-semibold mb-4">
                  <span
                    className="rounded-circle"
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#7dd3fc",
                    }}
                  />
                  Service Portfolio
                </div>

                <h1 className="ds-hero-title mb-4">
                  Dry bulk shipping services with stronger commercial control
                </h1>

                <p
                  className="ds-hero-subtitle mb-4"
                  style={{ maxWidth: "640px" }}
                >
                  Hanif Maritime Limited structures freight, vessel, and
                  advisory solutions around cargo reality. The focus is simple:
                  dependable execution, flexible chartering, and responsive
                  support from planning through delivery.
                </p>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Button
                    asChild
                    className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-0"
                  >
                    <Link href="/contact">
                      Discuss a requirement
                      <ArrowRight size={16} className="ms-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-slate-900"
                  >
                    <Link href="/fleet">View our fleet</Link>
                  </Button>
                </div>

                <div className="row g-3">
                  {heroStats.map((stat) => (
                    <div className="col-sm-4" key={stat.label}>
                      <div
                        className="h-100 p-3 p-lg-4"
                        style={heroMetricCardStyle}
                      >
                        <div
                          className="fw-bold text-white mb-2"
                          style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
                        >
                          {stat.value}
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            color: "rgba(226, 232, 240, 0.8)",
                            lineHeight: 1.6,
                            fontSize: "14px",
                          }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div
                  className="position-absolute"
                  style={{
                    inset: "8% auto auto 8%",
                    width: "220px",
                    height: "220px",
                    borderRadius: "999px",
                    background: "rgba(14, 165, 233, 0.16)",
                    filter: "blur(50px)",
                  }}
                />

                <div
                  className="ds-card-dark p-2 position-relative overflow-hidden"
                  style={{ borderRadius: "28px" }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "520px", borderRadius: "24px" }}
                  >
                    <Image
                      src="/assets/images/ship/image_4.jpeg"
                      alt="Hanif Maritime vessel at sea"
                      fill
                      className="object-cover"
                      sizes="(max-width: 991px) 100vw, 48vw"
                      priority
                    />
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(5,10,18,0.05) 0%, rgba(5,10,18,0.3) 55%, rgba(5,10,18,0.92) 100%)",
                      }}
                    />

                    <div className="position-absolute top-0 start-0 w-100 p-4">
                      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                        <div
                          className="px-3 py-2 rounded-pill"
                          style={{
                            background: "rgba(2, 132, 199, 0.24)",
                            border: "1px solid rgba(125, 211, 252, 0.3)",
                            color: "#e0f2fe",
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                          }}
                        >
                          COMMERCIAL + OPERATIONAL
                        </div>
                        <div
                          className="px-3 py-2 rounded-pill"
                          style={{
                            background: "rgba(15, 23, 42, 0.45)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#f8fafc",
                            fontSize: "12px",
                          }}
                        >
                          Global dry bulk focus
                        </div>
                      </div>
                    </div>

                    <div className="position-absolute bottom-0 start-0 w-100 p-4 p-lg-5">
                      <div className="row g-3">
                        {servicePillars.slice(0, 3).map((pillar) => {
                          const Icon = pillar.icon;

                          return (
                            <div className="col-sm-4" key={pillar.id}>
                              <div
                                className="h-100 rounded-4 p-3"
                                style={{
                                  background: "rgba(255, 255, 255, 0.08)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  backdropFilter: "blur(10px)",
                                }}
                              >
                                <Icon
                                  size={18}
                                  color="#7dd3fc"
                                  className="mb-3"
                                />
                                <div className="fw-semibold text-white mb-2">
                                  {pillar.label}
                                </div>
                                <p
                                  className="mb-0"
                                  style={{
                                    color: "rgba(226, 232, 240, 0.82)",
                                    fontSize: "14px",
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {pillar.title}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="position-absolute d-none d-xl-flex align-items-center gap-3 px-3 py-3"
                  style={{
                    right: "-24px",
                    bottom: "48px",
                    background: "#ffffff",
                    color: "#16202B",
                    borderRadius: "20px",
                    boxShadow: "0 18px 36px rgba(15, 23, 42, 0.18)",
                    width: "240px",
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "rgba(14, 165, 233, 0.12)",
                      color: accent,
                    }}
                  >
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <div className="fw-semibold">Flexible market coverage</div>
                    <p className="mb-0 text-secondary small">
                      Structured freight support across cargo cycles and trading
                      windows.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-light">
        <div className="container">
          <div className="ds-section-head">
            <p className="ds-section-kicker">What We Do</p>
            <h2 className="ds-section-title">
              A service stack built around cargo movement
            </h2>
            <p
              className="mx-auto mb-0"
              style={{ maxWidth: "760px", color: "var(--bs-secondary-color)" }}
            >
              Instead of treating freight, vessel control, and advisory work as
              separate silos, we connect them into one operating model that is
              easier for customers to plan around.
            </p>
          </div>

          <div className="row g-4">
            {servicePillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <div className="col-lg-6" key={pillar.id}>
                  <div className="ds-card h-100" style={{ borderRadius: "24px" }}>
                    <div className="p-4 p-lg-5 h-100 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                        <div>
                          <p className="ds-section-kicker mb-2">
                            {pillar.label}
                          </p>
                          <h3 className="h4 mb-0">{pillar.title}</h3>
                        </div>
                        <div className="d-flex align-items-center gap-2 flex-shrink-0">
                          <span
                            className="px-3 py-2 rounded-pill"
                            style={{
                              background: "rgba(14, 165, 233, 0.08)",
                              color: "#0f172a",
                              border: "1px solid rgba(14, 165, 233, 0.14)",
                              fontSize: "12px",
                              fontWeight: 700,
                              letterSpacing: "0.1em",
                            }}
                          >
                            {pillar.id}
                          </span>
                          <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              width: "42px",
                              height: "42px",
                              background: "rgba(14, 165, 233, 0.1)",
                              color: accent,
                              border: "1px solid rgba(14, 165, 233, 0.12)",
                            }}
                          >
                            <Icon size={18} />
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-secondary mb-4"
                        style={{ lineHeight: 1.72 }}
                      >
                        {pillar.description}
                      </p>

                      <div className="d-grid gap-3 mb-4">
                        {pillar.points.map((point) => (
                          <div
                            className="d-flex align-items-start gap-3"
                            key={point}
                          >
                            <span
                              className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                              style={{
                                width: "28px",
                                height: "28px",
                                background: "rgba(14,165,233,0.1)",
                                color: accent,
                              }}
                            >
                              <BadgeCheck size={15} />
                            </span>
                            <p className="mb-0" style={{ lineHeight: 1.65 }}>
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div
                        className="mt-auto rounded-4 p-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)",
                          border: "1px solid rgba(14, 165, 233, 0.12)",
                        }}
                      >
                        <p
                          className="mb-0 small fw-semibold"
                          style={{ color: "#334155", lineHeight: 1.7 }}
                        >
                          {pillar.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="ds-panel mt-4 mt-lg-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <p className="ds-section-kicker mb-2">Cargo Coverage</p>
                <h3 className="mb-3">
                  Dry bulk cargoes we regularly work with
                </h3>
                <p className="ds-text-muted mb-0">
                  The cargo mix spans raw materials, industrial inputs, and
                  trading commodities that require reliable vessel access and
                  disciplined voyage handling.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-2">
                  {commodities.map((item) => (
                    <span key={item} style={chipStyle}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section pt-0">
        <div className="container">
          <div
            className="position-relative overflow-hidden rounded-5 p-4 p-lg-5 text-white"
            style={{
              background:
                "linear-gradient(135deg, #0b1725 0%, #12263a 48%, #0f1d2d 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              className="position-absolute top-0 end-0 h-100"
              style={{
                width: "42%",
                background:
                  "radial-gradient(circle at top right, rgba(30,174,219,0.32), transparent 58%)",
                pointerEvents: "none",
              }}
            />

            <div className="row g-4 align-items-start position-relative">
              <div className="col-lg-4">
                <p className="ds-section-kicker text-white mb-2">
                  Chartering Focus
                </p>
                <h2 className="ds-section-title text-white mb-3">
                  Flexible structures for different freight exposures
                </h2>
                <p
                  className="mb-4"
                  style={{
                    color: "rgba(234, 243, 249, 0.82)",
                    lineHeight: 1.8,
                  }}
                >
                  Chartering is not one service. It is a set of commercial
                  structures that should match volume, timing, ownership
                  preference, and market risk tolerance.
                </p>

                <div className="d-flex flex-column gap-3">
                  <div
                    className="rounded-4 p-3"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Ship size={18} color="#7dd3fc" />
                      <span className="fw-semibold text-white">
                        Responsive commercial desk
                      </span>
                    </div>
                    <p
                      className="mb-0 small"
                      style={{ color: "#d8e6f2", lineHeight: 1.7 }}
                    >
                      Freight advice, vessel options, and fixture follow-up stay
                      in one lane.
                    </p>
                  </div>

                  <div
                    className="rounded-4 p-3"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Globe2 size={18} color="#7dd3fc" />
                      <span className="fw-semibold text-white">
                        Coverage for spot and strategic programs
                      </span>
                    </div>
                    <p
                      className="mb-0 small"
                      style={{ color: "#d8e6f2", lineHeight: 1.7 }}
                    >
                      The structure can scale from a single movement to
                      recurring cargo commitments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row g-3">
                  {charteringServices.map((service) => (
                    <div className="col-md-6" key={service.title}>
                      <div
                        className="h-100 rounded-4 p-4"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <p
                          className="text-uppercase small fw-semibold mb-2"
                          style={{ color: "#7dd3fc", letterSpacing: "0.12em" }}
                        >
                          {service.title}
                        </p>
                        <p
                          className="mb-3"
                          style={{ color: "#e2e8f0", lineHeight: 1.7 }}
                        >
                          {service.summary}
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                          {service.gains.map((gain) => (
                            <span
                              key={gain}
                              style={{
                                ...chipStyle,
                                color: "#e2e8f0",
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              {gain}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-light pt-0">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <p className="ds-section-kicker">How We Work</p>
              <h2 className="ds-section-title">
                A cleaner execution model for customers
              </h2>
              <p className="ds-text-muted mb-0">
                The design principle is straightforward: simplify freight
                planning, centralize communication, and reduce avoidable
                operational noise.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-3">
                {operatingModel.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className="col-md-6" key={item.step}>
                      <div className="ds-card h-100 p-4" style={{ borderRadius: "22px" }}>
                        <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
                          <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              width: "48px",
                              height: "48px",
                              background: "rgba(14, 165, 233, 0.1)",
                              color: accent,
                            }}
                          >
                            <Icon size={20} />
                          </span>
                          <span
                            className="fw-semibold"
                            style={{
                              color: "#94a3b8",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {item.step}
                          </span>
                        </div>
                        <h3 className="h5 mb-3">{item.title}</h3>
                        <p
                          className="mb-0 text-secondary"
                          style={{ lineHeight: 1.72 }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section ds-section pt-0">
        <div className="container">
          <div
            className="position-relative overflow-hidden rounded-5 p-4 p-lg-5 text-white"
            style={{
              background:
                "linear-gradient(135deg, #102131 0%, #1b3144 55%, #12202e 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              className="position-absolute top-0 end-0 w-50 h-100 opacity-25"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(30,174,219,0.45), transparent 55%)",
                pointerEvents: "none",
              }}
            />

            <div className="row g-4 align-items-center position-relative">
              <div className="col-lg-5">
                <p className="ds-section-kicker text-white mb-2">
                  Why Partner With Us
                </p>
                <h2 className="ds-section-title text-white mb-3">
                  Dependable shipping support backed by practical experience
                </h2>
                <p
                  className="mb-4"
                  style={{
                    color: "rgba(234, 243, 249, 0.82)",
                    lineHeight: 1.8,
                  }}
                >
                  At Hanif Maritime Limited, the service promise is not just
                  vessel availability. It is commercially aware support, steady
                  communication, and operational discipline customers can plan
                  around.
                </p>

                <Button
                  asChild
                  className="bg-white text-slate-900 hover:bg-sky-100"
                >
                  <Link href="/contact">Start a conversation</Link>
                </Button>
              </div>

              <div className="col-lg-7">
                <div className="row g-3">
                  {partnerPoints.map((point) => (
                    <div className="col-sm-6" key={point}>
                      <div
                        className="d-flex align-items-start gap-3 h-100 rounded-4 p-3"
                        style={{
                          background: "rgba(255, 255, 255, 0.06)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <span
                          className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                          style={{
                            width: "30px",
                            height: "30px",
                            background: "rgba(125, 211, 252, 0.16)",
                            color: "#7dd3fc",
                          }}
                        >
                          <BadgeCheck size={16} />
                        </span>
                        <span style={{ lineHeight: 1.65, color: "#EAF3F9" }}>
                          {point}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ServicesPage;
