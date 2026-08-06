import Wrapper from "@/components/site/layout/Wrapper";
import Image from "next/image";

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

      <section className="casestudies-section py-60 ds-section-light">
        <div className="container">
          <div
            className="ds-section-head"
            style={{ textAlign: "left", marginLeft: 0 }}
          >
            <p className="ds-section-kicker">Fleet Gallery</p>
            <h2 className="ds-section-title">RUBAIYAT HANIF</h2>
          </div>

          <div className="row">
            {[
              "rubaiyat/image_80.jpeg",
              "rubaiyat/image_81.jpeg",
              "rubaiyat/image_82.jpeg",
              // "rubaiyat/image_83.jpeg",
              // "rubaiyat/image_84.jpeg",
              "image_41.jpg",
              // "image_42.jpg",
              "image_43.jpg",
              "image_44.jpg",
              "image_45.jpg",
            ].map((image, index) => (
              <div className="col-lg-4 content-center" key={index}>
                <div className="item-inner position-relative overflow-hidden gap-2 mb-2 ds-card">
                  <Image
                    src={`/assets/images/ship/${image}`}
                    alt={`ship ${index + 1}`}
                    className="background-item w-100 h-100"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="casestudies-section py-60 ds-section-light">
        <div className="container">
          <div
            className="ds-section-head"
            style={{ textAlign: "left", marginLeft: 0 }}
          >
            <p className="ds-section-kicker">Fleet Gallery</p>
            <h2 className="ds-section-title">ZARAAR HANIF</h2>
          </div>
          <div className="row">
            {[
              "image_56.jpg",
              // "image_57.jpg",
              "image_58.jpg",
              // "image_59.jpg",
              // "image_60.jpg",
              "image_61.jpg",
              "image_62.jpg",
              "image_63.jpg",
            ].map((image, index) => (
              <div className="col-lg-4 content-center" key={index}>
                <div className="item-inner position-relative overflow-hidden gap-2 mb-2 ds-card">
                  <Image
                    src={`/assets/images/ship/${image}`}
                    alt={`ship ${index + 1}`}
                    className="background-item w-100 h-100"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="casestudies-section py-60 ds-section-light">
        <div className="container">
          <div
            className="ds-section-head"
            style={{ textAlign: "left", marginLeft: 0 }}
          >
            <p className="ds-section-kicker">Fleet Gallery</p>
            <h2 className="ds-section-title">GUL BANO</h2>
          </div>
          <div className="row">
            {[
              // "gulbano/image_91.jpeg",
              "gulbano/image_91.jpeg",
              "gulbano/image_92.jpeg",
              "gulbano/image_93.jpeg",
              "image_14.jpeg",
              // "image_17.jpeg",
              "image_21.jpeg",
              "image_18.jpeg",
              // "image_19.jpeg",
              "image_20.jpeg",
              // "image_15.jpeg",
              "image_22.jpeg",
              "image_16.jpeg",
            ].map((image, index) => (
              <div className="col-lg-4 content-center" key={index}>
                <div className="item-inner position-relative overflow-hidden gap-2 mb-2 ds-card">
                  <Image
                    src={`/assets/images/ship/${image}`}
                    alt={`ship ${index + 1}`}
                    className="background-item w-100 h-100"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Gallery;
