import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CompanyPage = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark position-relative overflow-hidden ds-hero">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-white text-center">
            <motion.h2
              className="ds-hero-title text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              COMPANY PROFILE
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Specialization: Dry Bulk Shipping
            </motion.p>
          </div>
        </div>
      </section>

      <section className="work-process-section py-60 ds-section-light">
        <div className="container">
          <div className="row gx-5 gy-30">
            <div className="col-lg-9">
              <div>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      <span>Vision</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      <span>Mission</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      <span>Core Values</span>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex={0}
                  >
                    <div className="row">
                      <p>
                        To be a global leader and the most trusted and reliable
                        dry bulk shipping partner, providing unparalleled
                        service and innovative solutions to our clients, while
                        maintaining the highest standards of safety and
                        environmental stewardship.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex={0}
                  >
                    <div className="col-lg-12">
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">Safety</p>
                        <p className="small">
                          Prioritizing the safety of our crew, vessels, and
                          cargo through stringent safety standards and
                          continuous training.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">Efficiency</p>
                        <p className="small">
                          Maximizing operational efficiency and minimizing
                          downtime to provide cost-effective shipping solutions
                          to our clients.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">
                          Sustainability
                        </p>
                        <p className="small">
                          Committing to environmentally responsible practices
                          and investing in green technologies to reduce our
                          carbon footprint
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">
                          Customer Focus
                        </p>
                        <p className="small">
                          Delivering tailored services that meet the unique
                          needs of our clients, ensuring timely and secure
                          delivery of goods.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                    tabIndex={0}
                  >
                    <div className="col-lg-12">
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">Integrity</p>
                        <p className="small">
                          Upholding the highest standards of professionalism and
                          ethical behavior in all our operations.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">
                          Service Focus
                        </p>
                        <p className="small">
                          Delivering superior service and value to our clients
                          through tailored shipping solutions.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">
                          Sustainability
                        </p>
                        <p className="small">
                          Promoting eco-friendly practices and investing in
                          green technologies to minimize our environmental
                          impact.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">Innovation</p>
                        <p className="small">
                          Continuously improving and innovating to stay ahead in
                          the competitive shipping industry.
                        </p>
                      </div>
                      <div className="ps-3 mb-30 position-relative">
                        <span className="square-primary"></span>
                        <p className="mb-10 heading-font fw-bold">Security</p>
                        <p className="small">
                          Ensuring the highest levels of and security for our
                          crew, vessels, and cargo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-60 ds-section-light">
        <div className="container">
          <div className="row gy-30">
            <div className="col-lg-6">
              <div className="">
                <div className="flex flex-row justify-between">
                  <h2 className="text-underline-sm pb-3 mb-3">
                    <span className="text-primary pe-2">Who</span> We Are
                  </h2>
                  <Link
                    href="https://drive.google.com/file/d/1EH9jsnxZBYm-rXIF8TGogLyCkY8cxq7F/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button>Download Company Profile</Button>
                  </Link>
                </div>

                <p className="text-muted pb-3">
                  Hanif Maritime Limited is a young global player in the dry
                  bulk shipping industry, renowned for its commitment to
                  excellence, efficiency, and sustainability. Founded in 2021 it
                  has consistently delivered top-tier maritime transportation
                  solutions, specializing in the carriage of bulk commodities
                  such as coal, grain, iron ore, and other essential raw
                  materials. With a commitment to excellence, safety, and
                  sustainability, Hanif Maritime Limited has established a
                  robust presence in the international maritime trade sector.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/assets/images/ship/image_6.jpeg"
                alt="service image"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="py-3">
            <p className="text-muted pb-3">
              Hanif Maritime Limited believes that by owning and commercially
              and technically managing its fleet the company can provide a
              superior service to its clients in offering innovative, creative,
              flexible and safe freight solutions. The commercial team delivers
              reliable and cost effective freight solutions to
              customers/partners while seeking to optimize revenue through the
              execution of a well-diversified and risk- adjusted hands on
              approach to chartering. Despite our relatively recent market
              entry, Hanif Maritime Limited is already involved in active fixing
              and continuously growing credibility among industry’s key players
              thanks to our team of professionals, all with strong shipping
              backgrounds, networks and experiences
            </p>
          </div>
        </div>
      </section>
      <section className="ds-section ds-section-light">
        <div className="container">
          <div className="ds-section-head">
            <p className="ds-section-kicker">Company Focus</p>
            <h2 className="ds-section-title">Strategic Pillars</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Operational</span>
                  Excellence
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>24/7 Operations:</strong> A dedicated operations
                    team available round the clock to manage voyages and address
                    any client concerns.
                  </li>
                  <li className="mb-3">
                    <strong>
                      Advanced Navigation and Communication Systems:
                    </strong>
                    State-of-the-art technology to ensure safe and efficient
                    voyages.
                  </li>
                  <li className="mb-3">
                    <strong>Fleet Maintenance:</strong> Regular and rigorous
                    maintenance schedules to ensure all vessels meet
                    international safety and environmental standards.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Sustainability</span>
                  Initiatives
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Green Shipping Program:</strong> Investing in
                    energy-efficient technologies and alternative fuels to
                    reduce emissions.
                  </li>
                  <li className="mb-3">
                    <strong>Waste Management:</strong> Implementing
                    comprehensive waste management practices to minimize
                    environmental impact.
                  </li>
                  <li className="mb-3">
                    <strong>Community Engagement:</strong> Supporting maritime
                    communities through education, employment, and
                    sustainability projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Global</span> Presence
                </h3>
                <p className="text-muted">
                  With offices and agents strategically located in major port
                  cities around the world, Hanif Maritime Ltd ensures seamless
                  and efficient global operations. Our extensive network allows
                  us to offer unparalleled service and support to clients
                  worldwide.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Markets</span> Served
                </h3>
                <p className="text-muted">
                  Hanif Maritime Ltd serves a diverse range of clients across
                  various industries, including mining, agriculture, and
                  manufacturing. Our extensive network spans major global trade
                  routes, connecting key markets in Asia, Europe, the Americas,
                  and Africa.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Corporate</span> Social
                  Responsibility
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Maritime Education:</strong> Partnering with
                    educational institutions to promote maritime careers and
                    provide training opportunities.
                  </li>
                  <li className="mb-3">
                    <strong>Employee Welfare:</strong> Ensuring a safe,
                    inclusive, and rewarding work environment for all employees.
                  </li>
                  <li className="mb-3">
                    <strong>Community Support:</strong> Engaging in various
                    community development and environmental conservation
                    projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Leadership</span> Team
                </h3>
                <p className="text-muted">
                  Hanif Maritime Ltd is guided by a team of seasoned industry
                  professionals with extensive experience in maritime
                  operations, logistics, and corporate governance. Their
                  collective expertise drives the company&apos;s strategic
                  direction and operational success.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ds-card p-4 h-100">
                <h3 className="text-underline-sm pb-3 mb-3">
                  <span className="text-primary pe-2">Future</span> Plans
                </h3>
                <p className="text-muted">
                  Hanif Maritime Ltd aims to expand its fleet with
                  next-generation eco-friendly vessels and explore new markets
                  to enhance our service offerings. We are committed to
                  leveraging technological advancements to improve operational
                  efficiency and environmental performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default CompanyPage;
