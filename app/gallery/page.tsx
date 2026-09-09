import Wrapper from "@/components/site/layout/Wrapper";
import GallerySection from "@/components/site/GallerySection";

const Gallery = () => {
  return (
    <Wrapper>
      <section className="ds-section-dark position-relative overflow-hidden ds-hero">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-white text-center">
            <h2 className="ds-hero-title text-white mb-3">
              OCEAN GOING VESSELS
            </h2>
            <p
              className="ds-hero-subtitle mx-auto"
              style={{ maxWidth: "700px", color: "var(--ds-slate)" }}
            >
              Our gallery showcases the impressive range of vessels that form
              the backbone of our shipping operations. From bulk carriers to
              tankers, each ship is equipped with advanced technology and
              maintained to the highest standards of safety and efficiency.
              These vessels are the lifeline of our business, ensuring timely
              and secure transport of goods across the world&apos;s oceans. Take
              a closer look at our fleet and see the powerful ships that help us
              connect markets and deliver excellence in maritime logistics.
            </p>
          </div>
        </div>
      </section>

      <GallerySection />
    </Wrapper>
  );
};

export default Gallery;
