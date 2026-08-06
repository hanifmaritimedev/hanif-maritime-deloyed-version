"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    src: "/assets/images/ship/image_51.jpg",
    alt: "MV Zaraar Hanif at sea",
    label: "MV ZARAAR HANIF",
  },
  {
    src: "/assets/images/ship/image_41.jpg",
    alt: "MV Rubaiyat Hanif cargo view",
    label: "MV RUBAIYAT HANIF",
  },
  {
    src: "/assets/images/ship/image_20.jpeg",
    alt: "MV Gul Bano in operation",
    label: "MV GUL BANO",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="ds-section-dark ds-hero overflow-hidden position-relative">
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5 pointer-events-none">
        <div
          className="w-100 h-100"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container position-relative z-10">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <div className="text-start">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse d-inline-block" />
                Established 2021
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="ds-hero-title mb-4"
              >
                Hanif Maritime Limited
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="ds-hero-subtitle mb-4 text-slate-300"
              >
                A sister concern of the renowned HANIF GROUP, specializing in
                the transportation of dry bulk cargoes with International
                business standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="d-flex flex-wrap gap-3 mt-4"
              >
                <Link
                  href="https://drive.google.com/file/d/1EH9jsnxZBYm-rXIF8TGogLyCkY8cxq7F/view?usp=drive_link"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <Button className="ds-pill px-4 py-2.5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white border-0 shadow-lg shadow-sky-500/20 font-semibold transition-all">
                    Download Profile
                  </Button>
                </Link>
                <Link href="/fleet" className="text-decoration-none">
                  <Button
                    variant="outline"
                    className="ds-pill px-4 py-2.5 border-white/20 text-white bg-white/10 font-semibold"
                  >
                    Explore Our Fleet
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              <div
                className="ds-card-dark p-2 overflow-hidden position-relative"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ borderRadius: "20px", height: "400px" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, scale: 1.03, x: 18 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.98, x: -18 }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                      className="position-absolute top-0 start-0 w-100 h-100"
                    >
                      <Image
                        src={heroSlides[activeSlide].src}
                        alt={heroSlides[activeSlide].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={activeSlide === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div
                    className="position-absolute bottom-0 start-0 end-0 p-4"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
                    }}
                  >
                    <span
                      className="badge bg-sky-500/20 border border-sky-400/30 text-sky-300 uppercase tracking-wider mb-2 px-2.5 py-1"
                      style={{ fontSize: "10px", fontWeight: "600" }}
                    >
                      {heroSlides[activeSlide].label}
                    </span>
                  </div>

                  <div
                    className="position-absolute top-3 end-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 d-flex align-items-center gap-2"
                    style={{ borderRadius: "50px" }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse d-inline-block" />
                    <span
                      className="text-white font-mono text-uppercase tracking-wider fw-bold"
                      style={{ fontSize: "10px", letterSpacing: "0.05em" }}
                    >
                      IN OPERATION
                    </span>
                  </div>

                  <div
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center gap-2"
                    style={{ zIndex: 2 }}
                  >
                    {heroSlides.map((slide, index) => (
                      <button
                        key={slide.src}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className="border-0 p-0 bg-transparent"
                        style={{
                          width: index === activeSlide ? "22px" : "8px",
                          height: "8px",
                          borderRadius: "999px",
                          background:
                            index === activeSlide
                              ? "rgba(14, 165, 233, 1)"
                              : "rgba(255, 255, 255, 0.35)",
                          transition: "all 0.25s ease",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-sky-500/10 rounded-full blur-3xl -z-10"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
