import Link from "next/link";
import React from "react";
import Services from "./Services";

const Hero = () => {
  return (
    <section className="hero-section hero-bg-image-2 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header-content text-white">
              <h1 className="display-1 text-uppercase body-font fw-normal pb-3 mb-0">
                NOVO SG
              </h1>
              <hr className="trans--grow hr1 mt-0 mb-3" />
              <h3 className="">
                Your Trusted Shipping Service
              </h3>

            <Link href="/company" className="btn btn-primary">
              find out more
              <i className="icon-arrows-slim-right ps-1" />
            </Link>
            </div>
          </div>
        </div>
       
 
      </div>
    </section>
  );
};

export default Hero;
