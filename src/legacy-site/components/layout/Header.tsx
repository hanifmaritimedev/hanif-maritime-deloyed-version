/* eslint-disable */
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/company", label: "Company" },
  { path: "/fleet", label: "Fleet" },
  { path: "/services", label: "Services" },
  { path: "/partners", label: "Partners" },
  { path: "/gallery", label: "Gallery" },
  { path: "/other-business", label: "Other Business" },
  { path: "https://hanif-group.com:2096", label: "Webmail" },
  { path: "/contact", label: "Contact" },
];
const Header = () => {
  const pathname = usePathname();
  return (
    <header
      id="navbar_top"
      className="hm-site-header transparent-header sticky-top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        borderBottom: "1px solid #d9e5ef",
        width: "100%",
        top: 0,
        left: 0,
        position: "sticky",
        zIndex: 1060,
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-xl navbar-light py-3 py-xl-0">
          <Link className="hm-site-logo site-logo navbar-brand" href="/" rel="home">
            <Image
              className="hm-logo-image"
              src="/assets/images/logo.png"
              width={260}
              height={32}
              alt="Hanif Maritime Limited"
              priority
            />
          </Link>
          <button
            className="hm-menu-toggle navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#main_nav"
            aria-controls="main_nav"
            style={{ backgroundColor: "transparent" }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="hm-mobile-menu offcanvas offcanvas-xl offcanvas-end p-3 p-xl-0"
            style={{ backgroundColor: "#FFFFFF", width: "300px" }}
            id="main_nav"
            tabIndex={-1}
          >
            <div className="offcanvas-body align-items-xl-center">
              <div className="offcanvas-header px-0 justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>

              <ul className="navbar-nav ms-xl-auto gap-2 gap-xl-3 align-items-xl-center">
                {navItems.map((item) => (
                  <li key={item.path} className="nav-item dropdown px-xl-1">
                    {item.path.startsWith("http") ? (
                      <a
                        className="nav-link ds-nav-link"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#334155" }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        className={
                          pathname === item.path
                            ? "nav-link ds-nav-link active"
                            : "nav-link ds-nav-link"
                        }
                        href={item.path}
                        style={
                          item.label === "Contact"
                            ? undefined
                            : { color: "#334155" }
                        }
                      >
                        {item.label === "Contact" ? (
                          <span className="ds-nav-cta">Contact</span>
                        ) : (
                          item.label
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
          {/* navbar-collapse.// */}
        </nav>
      </div>{" "}
      {/* container.// */}
    </header>
  );
};

export default Header;
