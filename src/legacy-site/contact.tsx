import React from "react";
import Wrapper from "./components/layout/Wrapper";

const contact = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark ds-hero">
        <div className="container">
          <div className="text-white text-center">
            <h3 className="ds-hero-title text-white">CONTACT US</h3>
            <p
              className="ds-hero-subtitle"
              style={{ color: "var(--ds-slate)" }}
            >
              We are here to assist you with any inquiries or support you may
              need. Reach out to us through the following contact details, and
              our team will be more than happy to help.Feel free to get in touch
              with us for any business inquiries, partnership opportunities, or
              customer support. We look forward to hearing from you!
            </p>
          </div>
        </div>
      </section>
      <section className="news-section ds-section ds-section-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="ds-card p-4 text-start">
                <h1 className="fw-bold fs-2 mb-4">Get in Touch</h1>
                <ul className="list-unstyled m-0 d-grid gap-3">
                  <li className="d-flex align-items-start gap-3">
                    <i
                      className="fa-solid fa-location-dot mt-1 flex-shrink-0"
                      style={{ color: "#1EAEDB" }}
                    />
                    <div>
                      <div
                        style={{
                          color: "#16202B",
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        Head Office:
                      </div>
                      <div
                        style={{
                          color: "var(--ds-slate)",
                          lineHeight: 1.65,
                        }}
                      >
                        House # 86, Level # 3 Road # 14, Block # B, Banani,
                        Dhaka-1213
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3">
                    <i
                      className="fa-solid fa-location-dot mt-1 flex-shrink-0"
                      style={{ color: "#1EAEDB" }}
                    />
                    <div>
                      <div
                        style={{
                          color: "#16202B",
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        Corporate Office:
                      </div>
                      <div
                        style={{
                          color: "var(--ds-slate)",
                          lineHeight: 1.65,
                        }}
                      >
                        73/1, Hrishikesh Das Road, Narinda, Dholaikhal,
                        Dhaka-1100
                      </div>
                    </div>
                  </li>

                  <li>
                    <a
                      href="tel:880255033662"
                      className="text-decoration-none d-flex gap-2 align-items-center"
                      style={{ color: "#334155" }}
                    >
                      <i
                        className="fa-solid fa-phone"
                        style={{ color: "#1EAEDB" }}
                      />
                      <span>+880255033662</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:chartering.hml@hanif-group.com"
                      className="text-decoration-none d-flex gap-2 align-items-center"
                      style={{ color: "#334155" }}
                    >
                      <i
                        className="fa-solid fa-envelope-open-text"
                        style={{ color: "#1EAEDB" }}
                      />
                      <span>chartering.hml@hanif-group.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="ds-card p-3">
                <div
                  className="ds-section-head"
                  style={{ marginBottom: "16px" }}
                >
                  <p className="ds-section-kicker">Locations</p>
                  <h3 className="ds-section-title">OUR OFFICES</h3>
                </div>
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
                      <span>Head Office</span>
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
                      <span>Corporate Office</span>
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
                    <div>
                      <iframe
                        className="w-100"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3650.6595723788027!2d90.40003207533731!3d23.795133978639907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ3JzQyLjUiTiA5MMKwMjQnMDkuNCJF!5e0!3m2!1sen!2sbd!4v1782650506318!5m2!1sen!2sbd"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabIndex={0}
                  >
                    <div>
                      <iframe
                        className="w-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.3152553771094!2d90.41779544652215!3d23.71011964834106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ac11781ed3%3A0xce5f90a9f0ea3bea!2sHanif%20Spinning%20Mills%20Limited!5e0!3m2!1sen!2sbd!4v1753003817806!5m2!1sen!2sbd"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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

export default contact;
