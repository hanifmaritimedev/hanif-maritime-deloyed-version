"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import MapSection from "@/components/site/MapSection";
import { Button } from "@/components/ui/button";

export default function DeferredMapSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="py-10 md:py-40 bg-white w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:w-1/2 md:pr-8">
            <p className="font-bold text-2xl md:text-4xl text-black">
              Want to hire a <span className="text-neutral-400">Vessel</span>
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 font-mono w-11/12">
              Managing a shipping business is challenging. Simplify your
              operations by renting a vessel from us. Our goal is to provide
              you with reliable and efficient shipping solutions, making your
              business smoother and more profitable.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="gap-4 font-semibold uppercase ">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div
              className="max-w-4xl aspect-[2/1] rounded-lg"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.08), transparent 35%), radial-gradient(circle at 80% 35%, rgba(14,165,233,0.1), transparent 30%), linear-gradient(180deg, rgba(248,250,252,0.95) 0%, rgba(255,255,255,1) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return <MapSection />;
}
