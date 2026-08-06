import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function CharteringPartnersList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const partners = [
    {
      title: "OLDENDORFF GMBH & CO. KG, LUEBECK, GERMANY",
      logoUrl: "/assets/images/partners/oldendorff-logo.png",
      siteUrl: "https://www.oldendorff.com/",
    },
    {
      title: "TONGLI SHIPPING PTE. LTD.",
      logoUrl: "/assets/images/partners/TongLiLogo_Coloured.png",
      siteUrl: "https://tongli-shipping.com/",
    },
    {
      title: "MULTIMAX SHIPPING PTE. LTD.",
      logoUrl: "/assets/images/partners/multimax-logo.png",
      siteUrl: "https://www.multimax.com/",
    },
    {
      title: "LYNUX SHIPPING LIMITED",
      logoUrl: "/assets/images/partners/Linx2_02.jpg",
      siteUrl: "https://www.lynxshipping.com/",
    },
    {
      title: "NORVIC SHIPPING ASIA PTE LTD",
      logoUrl: "/assets/images/partners/norvic.png",
      siteUrl: "https://norvicshipping.com/",
    },
    {
      title: "CRYSTAL SEA SHIPPING CO LTD",
      logoUrl: "/assets/images/partners/Crystal_Logo_01.png",
      siteUrl: "https://www.crystalshippinginc.com/",
    },
    {
      title: "AGROCORP INTERNATIONAL PTE LTD SINGAPORE",
      logoUrl: "/assets/images/partners/agrocorp-logo.png",
      siteUrl: "https://agrocorp.com.sg/",
    },
    {
      title: "SIGMA SHIPPING INTERNATIONAL S.A.",
      logoUrl: "/assets/images/partners/sigma-shipping.jpg",
      siteUrl: "https://www.sigma-shipping.com/",
    },
    {
      title: "OILMAR (DREAM SEA NAVIGATION)",
      logoUrl: "/assets/images/partners/olimar.png",
      siteUrl: "https://dreamseanavigation.com/",
    },
    {
      title: "PROPEL SHIPPING PTE LTD",
      logoUrl: "/assets/images/partners/propel.png",
      siteUrl: "https://www.propelship.com/",
    },
    {
      title: "VIETSEA COMPANY PTE LTD",
      logoUrl: "/assets/images/partners/vietsea.png",
      siteUrl: "https://www.vietsea.net/",
    },
    {
      title: "SILK ROAD SHIPPING & CHARTERING LTD",
      logoUrl: "/assets/images/partners/silkroadlogo.png",
      siteUrl: "https://www.silkgroup.com.jo/",
    },

    // done
    {
      title: "GUARDIAN BULK SHIPPING CO.,LTD.",
      logoUrl: "/assets/images/partners/guardina.jpg",
      siteUrl: "http://www.guardianintlshipping.com/",
    },
    {
      title: "CAPITAL WORLD MARITIME LIMITED",
      logoUrl: "/assets/images/partners/capital-world.png",
      siteUrl: "https://ssgil.com/",
    },
    {
      title: "CAMBRIAN BULK LIMITED",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "https://www.cambrian.com/",
    }, //not found
    {
      title: "LOCH SHIPPING INTERMEDIARY FZE, U.A.E",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "https://www.lochshipping.com/",
    }, // not found
    {
      title: "ALLIANZ BULK CFR8 PTE. LTD.",
      logoUrl: "/assets/images/partners/Allianz-Bulk-CFR8-2x.png",
      siteUrl: "https://www.allianzwithus.com/",
    },
    {
      title: "TEAM BULK CARRIERS PTE LTD , SINGAPORE",
      logoUrl: "/assets/images/partners/team-bulk-carriers.png",
      siteUrl: "https://www.teambulkcarriers.com/",
    },
    {
      title: "BAINBRIDGE NAVIGATION DMCC",
      logoUrl: "/assets/images/partners/bainbridge.png",
      siteUrl: "https://bainbridgenav.com/",
    },
    {
      title: "M/S. JAHAZ SHIPPING LINES DMCC",
      logoUrl: "/assets/images/partners/jahaz.png",
      siteUrl: "https://jahazshipping.com/",
    },
    {
      title: "BULK ASIA PTE LTD",
      logoUrl: "/assets/images/partners/bulk-asia.png",
      siteUrl: "https://www.keralapdf.xyz/",
    },
    {
      title: "WEALTH CREATION GENERAL TRADING LLC",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "https://www.wealthcreation.com/",
    }, // not found
    {
      title: "EVER GLORY SHIP CHARTER LLC",
      logoUrl: "/assets/images/partners/EVERHLORY-LOGO-WHITE-LOGO.png",
      siteUrl: "https://old.everglory.ae/",
    },
    {
      title: "FORTUNE BULK SHIPPING LIMITED",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "HARMONY BULKER DMCC",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "MIDSTAR SHIPPING FZE, U.A.E",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "CENTURY SCOPE GROUP PTE.LTD.",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "ELDER TRIUMPHANT SHIPPING LINES PTE LIMITED",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "SEAPOL SHIPPING FZCO",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "INMAR SHIPPING AND LOGISTICS FZCO",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "AVENIR MARITIME - FZCO",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
    {
      title: "GLOBE OCEAN SHIPPING PTE.LTD.",
      logoUrl: "/assets/images/partners/ship-icon-sample.png",
      siteUrl: "/partners",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="ds-panel"
    >
      <h3 className="text-2xl font-bold mb-6" style={{ color: "#1E2026" }}>
        Chartering Partners
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {partners.map((partner, index) => (
          <Partner
            key={index}
            title={partner.title}
            delay={index * 0.05}
            inView={inView}
            logoUrl={partner.logoUrl}
            siteUrl={partner.siteUrl}
          />
        ))}
      </div>
    </motion.div>
  );
}

const Partner = ({
  title,
  delay,
  inView,
  logoUrl,
  siteUrl,
}: {
  title: string;
  delay: number;
  inView: boolean;
  logoUrl?: string;
  siteUrl?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 rounded-lg hover:bg-[#F5F5F5] transition-colors"
    >
      <Link
        href={siteUrl || "/partners"}
        className="flex items-center gap-3 p-4"
        target="_blank"
      >
        <Logo logoUrl={logoUrl} />
        <span
          className="text-lg font-semibold no-underline"
          style={{ color: "#1E2026" }}
        >
          {title}
        </span>
      </Link>
    </motion.div>
  );
};

const Logo = ({ logoUrl }: { logoUrl?: string }) => {
  return (
    <div
      className="p-1"
      style={{ backgroundColor: "#F5F5F5", border: "1px solid #E6E8EA" }}
    >
      <Image
        src={logoUrl || "/default-logo.png"} // Fallback to a default logo if logoUrl is not provided
        alt="Company Logo"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};
