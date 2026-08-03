import React from "react";
import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const index = () => {
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
              ABOUT HANIF MARITIME LIMITED
            </motion.h2>
            <motion.p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leadership, Company Approach, and Commitment to Excellence in
              Maritime Operations
            </motion.p>
          </div>
        </div>
      </section>
      {/* <section className="ds-section-dark ds-hero">
        <div className="container">
          <div className="text-white text-center">
            <h3 className="ds-hero-title text-white">HANIF MARITIME LIMITED</h3>
          </div>
        </div>
      </section> */}

      <section className="ds-section ds-section-light">
        <div className="container">
          {/* <div className="ds-section-head">
            <p className="ds-section-kicker">Leadership</p>
            <h2 className="ds-section-title">About the Chairman</h2>
          </div> */}
          <div className="row mb-4">
            <div className="col-lg-12">
              <div className="ds-panel">
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                  <div>
                    <p className="ds-section-kicker mb-1">
                      Leadership Highlights
                    </p>
                    <h3 className="mb-0">Trusted, Experienced, Visionary</h3>
                  </div>
                  <div className="ds-stats d-flex flex-wrap justify-content-end gap-3 w-100">
                    <div className="ds-stat">
                      <p className="ds-section-kicker mb-1">Experience</p>
                      <h4 className="mb-0">50+ Years</h4>
                    </div>
                    <div className="ds-stat">
                      <p className="ds-section-kicker mb-1">Leadership</p>
                      <h4 className="mb-0">Board Member</h4>
                    </div>
                    <div className="ds-stat">
                      <p className="ds-section-kicker mb-1">Focus</p>
                      <h4 className="mb-0">Maritime</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 align-items-stretch">
            <div className="col-lg-5">
              <div className="ds-card p-3 h-100">
                <Image
                  src="/assets/images/members/5.jpg"
                  alt="service image"
                  width={600}
                  height={700}
                  className="w-100 h-auto"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ds-card p-4 h-100">
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
                  <h3 className="mb-0">About the chairman</h3>
                  <Link
                    href="https://drive.google.com/file/d/1EH9jsnxZBYm-rXIF8TGogLyCkY8cxq7F/view?usp=drive_link"
                    target="_blank"
                  >
                    <Button>Download Company Profile</Button>
                  </Link>
                </div>
                <p className="mt-3 ds-text-muted">
                  <b>Mr. Mohammed Hanif</b> is the Vice-Chairman of the Dhaka
                  Bank PLC. An experienced businessman, Mr. Mohammed Hanif is a
                  renowned industrialist in the country. He has made remarkable
                  contribution towards business and Banking in Bangladesh. The
                  industrialist has a business career that extends over as long
                  as 54 years. He is the Managing Director of Hanif Maritime
                  Ltd., Hanif Steels Ltd., Hanif Spinning Mills Ltd incorporated
                  with Marubeni Corporation since 2002, and National Foundry &
                  Engineering Works (Pvt.) Ltd. Mr. Hanif is a Sponsor Director
                  and one of the long serving Board Members of Dhaka Bank
                  Limited. He was elected the Vice Chairman of the Bank in the
                  134th Board Meeting held in April 2008. He was first appointed
                  a Director of the Board on April 6, 1995. He is also a Founder
                  Member of the Board of Trustees of Dhaka Bank Foundation and
                  an erstwhile member of Audit Committee of the Bank. He is
                  associated with different socio-cultural activities and has
                  travelled extensively all over the world for his businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="ds-panel">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-7">
                    <h4 className="mb-2">Company Approach</h4>
                    <p className="ds-text-muted mb-0">
                      Hanif Maritime Limited believes that by owning and
                      commercially and technically managing its fleet the
                      company can provide a superior service to its clients in
                      offering innovative, creative, flexible and safe freight
                      solutions. The commercial team delivers reliable and cost
                      effective freight solutions to customers/partners while
                      seeking to optimize revenue through the execution of a
                      well-diversified and risk-adjusted hands on approach to
                      chartering. Despite our relatively recent market entry,
                      Hanif Maritime Limited is already involved in active
                      fixing and continuously growing credibility among
                      industry’s key players thanks to our team of
                      professionals, all with strong shipping backgrounds,
                      networks and experiences.
                    </p>
                  </div>
                  <div className="col-lg-5">
                    <div className="ds-stats">
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Founded</p>
                        <h4 className="mb-0">2021</h4>
                      </div>
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Focus</p>
                        <h4 className="mb-0">Dry Bulk</h4>
                      </div>
                      <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Operations</p>
                        <h4 className="mb-0">Global</h4>
                      </div>
                      {/* <div className="ds-stat">
                        <p className="ds-section-kicker mb-1">Teams</p>
                        <h4 className="mb-0">Experienced</h4>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default index;
