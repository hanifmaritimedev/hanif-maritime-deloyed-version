import React from "react";

const ServiceDetails = () => {
  return (
    <section className="isotop-section ds-section-dark">
      <div
        className="d-flex justify-content-between flex-wrap py-30 ps-20 pe-4 mb-20"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
      >
        <h2 className="text-white mb-0">SERVICES WE PROVIDE</h2>
      </div>
      <div className="px-20 pb-20">
        <div className="row g-1 item-details ">
          <div className="col-lg-4 col-md-6 item energy all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                CHARTERING
              </h4>
              <p className="small mb-20">
                The Company’s Chartering team is having strong background and
                long experience in Chartering. The Chartering Team is
                responsible for establishing and maintaining close relationships
                with reputable brokers and charterers, ship owners and cargo
                owners.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item financials all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                POST FIXING OPERATION
              </h4>
              <p className="small mb-20">
                The Team consists of highly professional and experienced members
                who can support 24x7 according to customer needs and to perform
                the voyage and settlement the file according to governing
                Charter Party. The team delivers reliable and efficient
                solutions to customers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item industrial all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                COMMERCIAL MANAGEMENT
              </h4>
              <p className="small mb-20">
                The highly professional team can manage third-party owner’s
                fleets and ensure best hire rate in the Market. Our Global
                market coverage together with hard work and dedication enables
                us to negotiate the best hire rates for the customers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item information-tehnology all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                TECHNICAL MANAGEMENT
              </h4>
              <p className="small mb-20">
                The Team consists of highly professional and experienced Marine
                Engineers members who can manage the vessels world class
                standard with cost effective manner and to maintain the ship’s
                according to budget.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 item materials all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                SALE AND PURCHASE
              </h4>
              <p className="small mb-20">
                The Team consists of long experienced Sale and Purchase members
                who can support to choose the ships with right specifications
                and right price. The Team also having extensive experience with
                registration in different Flags.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 item materials all">
            <div className="px-30 ds-card-dark text-white pt-4 pb-20 h-100 isotop-block">
              <h4 className="text-underline-sm lh-1 pb-3 mb-3 pt-0">
                BUNKER SUPPLY
              </h4>
              <p className="small mb-20">
                The Team consists of long experienced Bunker supply members who
                can support by supplying the Bunkers with right specifications
                and right price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
