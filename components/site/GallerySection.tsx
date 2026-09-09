"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "@/app/gallery/gallery.module.css";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGroup = {
  title: string;
  images: GalleryImage[];
};

const INITIAL_VISIBLE_IMAGES = 3;
const IMAGE_BATCH_SIZE = 3;

const galleryGroups: GalleryGroup[] = [
  {
    title: "RUBAIYAT HANIF",
    images: [
      "rubaiyat/image_80.jpeg",
      "rubaiyat/image_81.jpeg",
      "rubaiyat/image_82.jpeg",
      "image_41.jpg",
      "image_43.jpg",
      "image_44.jpg",
      "image_45.jpg",
    ].map((image, index) => ({
      src: `/assets/images/ship/${image}`,
      alt: `Rubaiyat Hanif vessel photo ${index + 1}`,
    })),
  },
  {
    title: "ZARAAR HANIF",
    images: [
      "image_56.jpg",
      "image_58.jpg",
      "image_61.jpg",
      "image_62.jpg",
      "image_63.jpg",
    ].map((image, index) => ({
      src: `/assets/images/ship/${image}`,
      alt: `Zaraar Hanif vessel photo ${index + 1}`,
    })),
  },
  {
    title: "GUL BANO",
    images: [
      "gulbano/image_91.jpeg",
      "gulbano/image_92.jpeg",
      "gulbano/image_93.jpeg",
      "image_14.jpeg",
      "image_21.jpeg",
      "image_18.jpeg",
      "image_20.jpeg",
      "image_22.jpeg",
      "image_16.jpeg",
    ].map((image, index) => ({
      src: `/assets/images/ship/${image}`,
      alt: `Gul Bano vessel photo ${index + 1}`,
    })),
  },
];

function VesselGallery({ group }: { group: GalleryGroup }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_IMAGES);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const visibleImages = group.images.slice(0, visibleCount);
  const remainingCount = group.images.length - visibleImages.length;
  const hasMoreImages = remainingCount > 0;

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !hasMoreImages) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setVisibleCount((count) =>
          Math.min(count + IMAGE_BATCH_SIZE, group.images.length),
        );
      },
      {
        rootMargin: "600px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [group.images.length, hasMoreImages]);

  return (
    <section className="casestudies-section py-60 ds-section-light">
      <div className="container">
        <div className="ds-section-head text-start ms-0">
          <p className="ds-section-kicker">Fleet Gallery</p>
          <h2 className="ds-section-title">{group.title}</h2>
        </div>

        <div className="row g-4">
          {visibleImages.map((image, index) => (
            <div className="col-lg-4 col-md-6 content-center" key={image.src}>
              <div
                className={`${styles.galleryCard} item-inner position-relative overflow-hidden ds-card`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="background-item"
                  fill
                  sizes="(max-width: 767px) 92vw, (max-width: 1199px) 45vw, 360px"
                  quality={70}
                  loading={index < INITIAL_VISIBLE_IMAGES ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>

        {hasMoreImages ? (
          <div
            aria-hidden="true"
            className={styles.scrollSentinel}
            ref={sentinelRef}
          />
        ) : null}
      </div>
    </section>
  );
}

export default function GallerySection() {
  return galleryGroups.map((group) => (
    <VesselGallery group={group} key={group.title} />
  ));
}
