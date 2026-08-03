import Wrapper from "./components/layout/Wrapper";
import Image from "next/image";
import PricingDemo from "./components/ShipsComparison";
import { motion } from "framer-motion";

const index = () => {
  return (
    <Wrapper>
      <section
        className="relative overflow-hidden ds-section-dark"
        style={{ minHeight: "50vh" }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/assets/images/ship/grid-pattern.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Floating ship silhouette */}
        <div className="absolute -bottom-10 right-0 w-1/3 opacity-10 hidden lg:block">
          <Image
            src="/assets/images/ship/ship-silhouette.png"
            alt="Ship silhouette"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[50vh] py-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-wide">
                OUR FLEET
              </h1>

              <div
                className="w-20 h-1 mx-auto mb-5"
                style={{ backgroundColor: "#1EAEDB" }}
              ></div>

              <h3
                className="text-lg md:text-xl mb-5 font-light"
                style={{ color: "#C9D7E4" }}
              >
                Modern Vessels for Global Shipping Solutions
              </h3>

              <div
                className="p-4 md:p-5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <p
                  className="text-gray-100 text-sm md:text-base leading-relaxed mb-4"
                  style={{ color: "#F7FBFE" }}
                >
                  Hanif Maritime Limited operates a focused fleet of dry bulk
                  carriers built for performance, safety, and reliable global
                  service.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="px-3 py-2 rounded-full bg-sky-500/15 border border-sky-400/25 text-white d-flex align-items-center gap-2">
                    <span
                      className="inline-flex items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: "#1EAEDB",
                      }}
                    >
                      3
                    </span>
                    <span className="text-sm md:text-base">
                      Supramax vessels in operation
                    </span>
                  </div>

                  <div className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white d-flex align-items-center gap-2">
                    <span
                      className="inline-flex items-center justify-center rounded-full text-xs font-bold text-gray-900"
                      style={{
                        width: "28px",
                        height: "28px",
                        backgroundColor: "#4CC0EA",
                      }}
                    >
                      +
                    </span>
                    <span className="text-sm md:text-base">
                      More vessels in the pipeline
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="fleet-details">
        <PricingDemo />
      </div>
    </Wrapper>
  );
};

export default index;
