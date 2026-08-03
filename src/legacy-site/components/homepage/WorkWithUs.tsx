import Link from "next/link";
import React from "react";

const WorkWithUs = () => {
  return (
    <section className="ds-section-dark m-2">
      <div className="container">
        <div className="text-white text-center py-60">
          {/* <p className="small text-uppercase fw-bold lh-lg letter-spacing-lg">
          We have invested $2.4 billion in 150 transactions
          <span className="d-block">across 11 countries”</span>
        </p> */}
          <h2 className="display-5 fw-bold pb-4 custom-letter-spacing-n">
            Make a Difference with our{" "}
            <span className="text-primary">NOVO </span>Expert Team
          </h2>
          <Link href="/contact" className="btn btn-lg btn-primary py-3">
            Let&apos;s work together
            <i className="icon-arrows-slim-right ps-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
