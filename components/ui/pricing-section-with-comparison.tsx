"use client";

import {
  Anchor,
  Flag,
  Info,
  Navigation,
  Ruler,
  Scale,
  Ship,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type VesselDetailKey =
  | "IMO"
  | "EX_NAME"
  | "DWT"
  | "TYPE_OF_VESSEL"
  | "YEAR_OF_BUILD"
  | "FLAG"
  | "DIMENSIONS"
  | "GRT_NRT"
  | "TPC";

type VesselDetails = Record<VesselDetailKey, string>;

const vessels: {
  name: string;
  image: string;
  details: VesselDetails;
}[] = [
  {
    name: "MV ZARAAR HANIF",
    image: "/assets/images/ship/image_51.jpg",
    details: {
      IMO: "9454187",
      EX_NAME: "NORD TRUST",
      DWT: "55,693 MT ON 12.573 M DRAFT",
      TYPE_OF_VESSEL: "SINGLE DECK GEARED BULK CARRIER",
      YEAR_OF_BUILD: "2009",
      FLAG: "BANGLADESH",
      DIMENSIONS:
        "LOA / LBP: 189.990 / 182.0 M BEAM / DEPTH: 32.26 M / 17.90 M",
      GRT_NRT: "31,232 / 18,516",
      TPC: "55.8",
    },
  },
  {
    name: "MV RUBAIYAT HANIF",
    image: "/assets/images/ship/image_41.jpg",
    details: {
      IMO: "9403047",
      EX_NAME: "NEW VICTORY",
      DWT: "58,713 MT ON 12.828M SSW",
      TYPE_OF_VESSEL: "SINGLE DECK GEARED BULK CARRIER",
      YEAR_OF_BUILD: "2008",
      FLAG: "BANGLADESH",
      DIMENSIONS: "LOA / BEAM / TPC: 189.99 M / 32.26M / 57.54 MT",
      GRT_NRT: "32,379/19,353",
      TPC: "57.54",
    },
  },
  {
    name: "MV GUL BANO",
    image: "/assets/images/ship/gulbano/image_91.jpeg",
    details: {
      IMO: "9425899",
      EX_NAME: "ROYAL SAMURAI",
      DWT: "58,091 MT ON 12.826 M DRAFT",
      TYPE_OF_VESSEL: "SINGLE DECK GEARED BULK CARRIER",
      YEAR_OF_BUILD: "2010",
      FLAG: "BANGLADESH",
      DIMENSIONS:
        "LOA / LBP: 189.990 / 185.6 M BEAM / DEPTH: 32.26 M / 18.00 M",
      GRT_NRT: "32,351 / 19,458",
      TPC: "57.46",
    },
  },
];

const specs: {
  label: string;
  key: VesselDetailKey;
  icon: React.ReactElement;
}[] = [
  { label: "IMO", key: "IMO", icon: <Info className="w-4 h-4" /> },
  { label: "Ex Name", key: "EX_NAME", icon: <Ship className="w-4 h-4" /> },
  { label: "DWT", key: "DWT", icon: <Scale className="w-4 h-4" /> },
  {
    label: "Type",
    key: "TYPE_OF_VESSEL",
    icon: <Ship className="w-4 h-4" />,
  },
  {
    label: "Year",
    key: "YEAR_OF_BUILD",
    icon: <Anchor className="w-4 h-4" />,
  },
  { label: "Flag", key: "FLAG", icon: <Flag className="w-4 h-4" /> },
  {
    label: "Dimensions",
    key: "DIMENSIONS",
    icon: <Ruler className="w-4 h-4" />,
  },
  {
    label: "GRT / NRT",
    key: "GRT_NRT",
    icon: <Navigation className="w-4 h-4" />,
  },
  { label: "TPC", key: "TPC", icon: <Scale className="w-4 h-4" /> },
];

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const activeVessel = vessels[activeTab];

  return (
    <div className="w-full py-12 md:py-16 ds-section-light">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center text-center gap-2 mb-6 md:mb-8">
          <span className="ds-section-kicker">Our Fleet</span>
          <h2 className="ds-section-title">Modern Vessel Fleet</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Safe, reliable, and efficient shipping across our core vessels.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {vessels.map((vessel, index) => {
            const isActive = activeTab === index;

            return (
              <button
                key={vessel.name}
                onClick={() => setActiveTab(index)}
                className={`px-3.5 py-2 text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#0ea5e9] text-white border-[#0ea5e9] shadow-lg shadow-sky-500/10 font-semibold"
                    : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200 font-medium"
                }`}
              >
                <Ship
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-[#0ea5e9]"
                  }`}
                />
                <span>{vessel.name.replace("MV ", "")}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-sm bg-white p-2.5 border border-slate-100">
            <div className="relative h-[220px] sm:h-[260px] rounded-xl overflow-hidden shadow-inner">
              <Image
                src={activeVessel.image}
                alt={activeVessel.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className="position-absolute bottom-0 start-0 end-0 p-3"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.82) 100%)",
                }}
              >
                <h3 className="text-white text-base md:text-lg font-bold mb-0">
                  {activeVessel.name}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-3">
              <div
                className="p-2.5 rounded-xl text-center border border-slate-100"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <p className="text-[10px] font-semibold text-slate-400 uppercase mb-1">
                  DWT
                </p>
                <p className="text-sm font-bold text-slate-800 mb-0 leading-tight">
                  {activeVessel.details.DWT.split(" ")[0]}
                </p>
              </div>
              <div
                className="p-2.5 rounded-xl text-center border border-slate-100"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <p className="text-[10px] font-semibold text-slate-400 uppercase mb-1">
                  Built
                </p>
                <p className="text-sm font-bold text-slate-800 mb-0 leading-tight">
                  {activeVessel.details.YEAR_OF_BUILD}
                </p>
              </div>
              <div
                className="p-2.5 rounded-xl text-center border border-slate-100"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <p className="text-[10px] font-semibold text-slate-400 uppercase mb-1">
                  IMO
                </p>
                <p className="text-sm font-bold text-slate-800 mb-0 leading-tight">
                  {activeVessel.details.IMO}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <div
                className="px-4 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #090e17 0%, #0e1b2e 100%)",
                  color: "#FFFFFF",
                }}
              >
                <h3 className="text-sm md:text-lg font-bold mb-0 text-white">
                  VESSEL SPECS
                </h3>
              </div>

              <div className="p-3 md:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {specs.map((spec) => (
                    <div
                      key={spec.key}
                      className="rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors duration-200 p-3"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2 rounded-lg hidden sm:block shrink-0"
                          style={{
                            backgroundColor: "#f0f9ff",
                            color: "#0ea5e9",
                          }}
                        >
                          {spec.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase mb-1 tracking-wider">
                            {spec.label}
                          </h4>
                          <p className="text-sm sm:text-[15px] font-semibold text-slate-700 mb-0 break-words leading-snug">
                            {activeVessel.details[spec.key] || "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
