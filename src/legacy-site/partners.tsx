import React from "react";
import Wrapper from "./components/layout/Wrapper";
import BunkerPartnersList from "./components/partners/bunkerPartnersList";
import CharteringPartnersList from "./components/partners/charteringPartnersList";
import OfficialPartnersList from "./components/partners/officialPartners";
import { motion } from "framer-motion";

const Partners = () => {
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
              OUR PARTNERS
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We collaborate with industry leaders to provide exceptional
              maritime services and solutions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="ds-section ds-section-light">
        <div className="container">
          <div className="ds-section-head">
            <p className="ds-section-kicker">Network</p>
            <h3 className="ds-section-title">Partner Groups</h3>
          </div>
          <div className="row mb-4">
            <div className="col-12">
              <div className="ds-panel">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-5">
                    <p className="ds-section-kicker mb-1">Global Network</p>
                    <h4 className="mb-2">Trusted partners across regions</h4>
                    <p className="ds-text-muted mb-0">
                      We collaborate with chartering, bunker, and official
                      partners to deliver reliable maritime operations.
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ds-stats">
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Official</p>
                        <h4 className="mb-0">2+</h4>
                      </div>
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Bunker</p>
                        <h4 className="mb-0">6+</h4>
                      </div>
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Chartering</p>
                        <h4 className="mb-0">20+</h4>
                      </div>
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Regions</p>
                        <h4 className="mb-0">Global</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <OfficialPartnersList />
            </div>
            <div className="col-lg-6">
              <BunkerPartnersList />
            </div>
            <div className="col-12">
              <CharteringPartnersList />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Partners;
