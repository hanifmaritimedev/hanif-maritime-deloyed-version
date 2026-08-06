import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer-section pt-5"
      style={{
        background: "linear-gradient(180deg, #1f3346 0%, #162434 100%)",
        color: "#b7c8d8",
        borderTop: "1px solid rgba(217, 229, 239, 0.16)",
      }}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-6 col-12">
            <p
              className="mb-0"
              style={{
                color: "#EAF3F9",
                fontWeight: 500,
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              HANIF MARITIME LIMITED (HML) was established on 07th September
              2021 as a sister concern of HANIF GROUP, specializing in the
              transportation of dry bulk cargoes with International business
              standards.
            </p>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footer-links text-start">
              <h6
                className="mb-3 fw-semibold text-white text-uppercase small"
                style={{ fontSize: "12px", letterSpacing: "0.14em" }}
              >
                USEFUL LINKS
              </h6>
              <ul className="list-unstyled m-0 d-grid gap-2">
                {[
                  { href: "/company", label: "Company" },
                  { href: "/services", label: "Services" },
                  { href: "/partners", label: "Partners" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-decoration-none d-flex gap-2 align-items-center"
                      style={{ color: "#b7c8d8" }}
                    >
                      <i
                        className="bi bi-arrow-right"
                        style={{ color: "#1EAEDB" }}
                      />
                      <span style={{ fontSize: "14px" }}>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <h6
              className="mb-3 fw-semibold text-white text-uppercase small"
              style={{ fontSize: "12px", letterSpacing: "0.14em" }}
            >
              GET IN TOUCH
            </h6>
            <ul className="list-unstyled m-0 d-grid gap-3">
              <li className="d-flex align-items-start gap-2">
                <i
                  className="fa-solid fa-location-dot mt-1 flex-shrink-0"
                  style={{ color: "#1EAEDB" }}
                />
                <div>
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    Head Office:
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    House # 86, Level # 3 Road # 14, Block # B, Banani,
                    Dhaka-1213
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-start gap-2">
                <i
                  className="fa-solid fa-location-dot mt-1 flex-shrink-0"
                  style={{ color: "#1EAEDB" }}
                />
                <div>
                  <div
                    style={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: 1.5,
                    }}
                  >
                    Corporate Office:
                  </div>
                  <div style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    73/1, Hrishikesh Das Road, Narinda, Dholaikhal, Dhaka-1100
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="tel:880255033662"
                  className="text-decoration-none d-flex gap-2 align-items-center"
                  style={{ color: "#b7c8d8" }}
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
                  style={{ color: "#b7c8d8" }}
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
      </div>
      <div className="copyright" style={{ backgroundColor: "#102131" }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-wrap py-4 text-center">
            <p className="mb-0" style={{ color: "#b7c8d8", fontSize: "12px" }}>
              © {new Date().getFullYear()} Hanif Maritime Limited. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
