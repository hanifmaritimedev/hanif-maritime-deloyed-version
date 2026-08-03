import Image from "next/image";
import React from "react";
import Wrapper from "./components/layout/Wrapper";
import { motion } from "framer-motion";

const OtherBusiness = () => {
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
              OUR BUSINESS UNITS
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              At Hanif Group, we pride ourselves on our diverse range of
              business ventures, each driven by a commitment to excellence,
              innovation, and quality. Our portfolio spans various industries,
              showcasing our expertise and dedication to meeting the needs of
              our customers and partners. Explore our key business units:
            </motion.p>
          </div>
        </div>
      </section>

      <section className="partner-section ds-section ds-section-light">
        <div className="container">
          <div className="ds-section-head">
            <p className="ds-section-kicker">Group Portfolio</p>
            <h2 className="ds-section-title">Business Units</h2>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Dhaka Bank",
                description:
                  "A leading financial institution offering a wide range of banking services, including corporate banking, personal banking, loans, and digital banking solutions. We are dedicated to empowering financial growth and delivering exceptional customer service.",
              },
              {
                title: "Hanif Spinning Mills",
                description:
                  "Specializing in the production of high-quality yarn, Hanif Spinning Mills plays a crucial role in the textile industry, providing reliable and sustainable products to meet the demands of both local and international markets.",
              },
              {
                title: "Hanif Steel Mills Limited",
                description:
                  "Our state-of-the-art steel mill produces a variety of steel products, including rods, bars, and sheets, supporting infrastructure development and contributing to the growth of the construction sector.",
              },
              {
                title: "Hanif Composite Mills",
                description:
                  "A leader in the production of composite textiles, Hanif Composite Mills combines modern technology with skilled craftsmanship to deliver premium fabrics used in apparel, home textiles, and industrial applications.",
              },
            ].map((unit) => (
              <div className="col-lg-6" key={unit.title}>
                <div className="ds-card p-4 h-100">
                  <h4 className="text-underline body-font fw-normal mb-3">
                    {unit.title}
                  </h4>
                  <p className="ds-text-muted mb-0">{unit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default OtherBusiness;
