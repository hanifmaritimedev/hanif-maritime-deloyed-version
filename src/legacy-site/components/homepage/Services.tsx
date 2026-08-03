import React from "react";
import { RiShip2Line } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { RiShipLine } from "react-icons/ri";

import { AiOutlineTool } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
const Services = () => {
  return (
    <section className="isotop-section p-20 ds-section-light">
      <div className="ds-section-dark d-flex justify-content-between flex-wrap py-30 ps-20 pe-4 mb-20">
        <h2 className="text-white mb-0">SERVICES WE PROVIDE</h2>
      </div>
      <div className="row g-1 py-30 my-40 d-flex justify-center">
        <div className="col-lg-3 col-6">
          <div className="square-menu position-relative w-100 h-100">
            <div className="figure-block position-relative d-grid gap-10 text-white">
              <span>
                <RiShipLine style={{ fontSize: "50px" }} />
              </span>
              <h5 className="small text-uppercase">Chartering & Operation </h5>
            </div>
            <div className="figcaption mw-100 w-100 pe-0 position-absolute">
              <Link
                href="/services"
                className="btn btn-sm btn-outline-secondary"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="square-menu position-relative w-100 h-100">
            <div className="figure-block position-relative d-grid gap-10 text-white">
              <span>
                <MdManageAccounts style={{ fontSize: "50px" }} />
              </span>
              <h5 className="small text-uppercase">Commercial Management </h5>
            </div>
            <div className="figcaption mw-100 w-100 pe-0 position-absolute">
              <Link
                href="/services"
                className="btn btn-sm btn-outline-secondary"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="square-menu position-relative w-100 h-100">
            <div className="figure-block position-relative d-grid gap-10 text-white">
              <span>
                <AiOutlineShoppingCart style={{ fontSize: "50px" }} />
              </span>
              <h5 className="small text-uppercase">Sale and Purchase</h5>
            </div>
            <div className="figcaption mw-100 w-100 pe-0 position-absolute">
              <Link
                href="/services"
                className="btn btn-sm btn-outline-secondary"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="square-menu position-relative w-100 h-100">
            <div className="figure-block position-relative d-grid gap-10 text-white">
              <span>
                <RiShip2Line style={{ fontSize: "50px" }} />
              </span>
              <h5 className="small text-uppercase">Bunker Supply </h5>
            </div>
            <div className="figcaption mw-100 w-100 pe-0 position-absolute">
              <Link
                href="/services"
                className="btn btn-sm btn-outline-secondary"
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
