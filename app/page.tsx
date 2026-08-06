import HomeHero from "@/components/site/HomeHero";
import Wrapper from "@/components/site/layout/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MapSection from "@/components/site/MapSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Wrapper>
      <HomeHero />

      {/* Services Section */}
      <section className="service-section ds-section ds-section-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ds-section-head">
                <span className="ds-section-kicker">Our Capabilities</span>
                <h2 className="ds-section-title">
                  Shipping &amp; Maritime Services
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base">
                  Delivering reliable, safe, and efficient cargo shipping
                  solutions across the world&apos;s oceans with professional
                  commercial and technical management.
                </p>
              </div>

              <div className="row g-4 mt-2">
                {[
                  {
                    id: 1,
                    title: "Transportation of Dry Bulk",
                    desc: "Carrying key raw materials globally like cement, fertilizers, grain, aggregate and iron ore.",
                    image: "/assets/images/ship/image_1.jpeg",
                  },
                  {
                    id: 2,
                    title: "Fleet Management",
                    desc: "Professional technical, safety, compliance, and crew management for ocean vessels.",
                    image: "/assets/images/ship/image_2.jpeg",
                  },
                  {
                    id: 3,
                    title: "Chartering Services",
                    desc: "Offering Voyage Charter, Time Charter, Bareboat Charter, and Contracts of Affreightment (COA).",
                    image: "/assets/images/ship/image_4.jpeg",
                  },
                  {
                    id: 4,
                    title: "Consulting Services",
                    desc: "Expert maritime consulting in market analysis, operational efficiency, and regulatory compliance.",
                    image: "/assets/images/ship/image_5.jpeg",
                  },
                ].map((service, index) => (
                  <div className="col-md-6 col-lg-3" key={service.id}>
                    <Link
                      href="/services"
                      className="text-decoration-none h-100 d-block"
                    >
                      <div className="ds-card h-100 overflow-hidden d-flex flex-column">
                        <div
                          className="position-relative overflow-hidden"
                          style={{ height: "200px" }}
                        >
                          <Image
                            width={300}
                            height={200}
                            src={service.image}
                            className="card-img-top w-100 h-100 object-cover"
                            alt={service.title}
                          />
                          <div
                            className="position-absolute top-3 start-3 bg-black/60 backdrop-blur-sm text-white font-bold px-2.5 py-1 rounded text-xs"
                            style={{ fontFamily: "monospace" }}
                          >
                            {`0${service.id}`}
                          </div>
                        </div>
                        <div className="card-body p-4 d-flex flex-column justify-between flex-grow-1">
                          <div>
                            <h5 className="font-semibold text-lg text-slate-800 mb-2 leading-snug">
                              {service.title}
                            </h5>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">
                              {service.desc}
                            </p>
                          </div>
                          <span className="text-sky-500 text-xs font-semibold uppercase d-flex align-items-center gap-1.5 mt-auto">
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <MapSection />
    </Wrapper>
  );
}
