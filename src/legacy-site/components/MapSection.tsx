"use client";
import { Button } from "@/components/ui/button";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function MapSection() {
  return (
    <div className="py-10 md:py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:w-1/2 md:pr-8">
          <p className="font-bold text-2xl md:text-4xl dark:text-white text-black">
            Want to hire a{" "}
            <span className="text-neutral-400">
              {"Vessel".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4 font-mono w-11/12">
            Managing a shipping business is challenging. Simplify your
            operations by renting a vessel from us. Our goal is to provide you
            with reliable and efficient shipping solutions, making your business
            smoother and more profitable.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="gap-4 font-semibold uppercase ">
                Contact Us <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
