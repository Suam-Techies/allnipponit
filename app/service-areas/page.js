import Link from "next/link";
import BUSINESS from "../business-config";
import { IconMapPin, IconPhone } from "../components/Icons";
import styles from "./page.module.css";

export const metadata = {
  title: "IT Support Service Area | South Jordan, UT | All Nippon IT",
  description:
    "All Nippon IT provides dedicated IT support, managed IT services, and business technology solutions in South Jordan, Utah.",
};

const AREAS = [
  {
    name: "South Jordan, Utah",
    primary: true,
    desc: "1124 South Jordan Pkwy, South Jordan, UT 84095. Comprehensive on-site and remote IT support, computer troubleshooting, and managed technology services for local South Jordan businesses.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">Where We Serve</span>
          <h1 className={styles.pageHeroTitle}>IT Support Service Area</h1>
          <p className={styles.pageHeroSub}>
            All Nippon IT provides dedicated IT support and technology services exclusively
            for businesses in South Jordan, Utah.
          </p>
        </div>
      </section>

      {/* Primary Location */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="overline">Primary Service Location</span>
            <h2>South Jordan, Utah</h2>
            <p>
              Located at 1124 South Jordan Pkwy, All Nippon IT delivers responsive IT support,
              proactive maintenance, and managed technology services tailored for South Jordan businesses.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {AREAS.map((area, i) => (
              <div key={i} className={`card ${styles.areaCard} ${area.primary ? styles.areaPrimary : ""}`}>
                {area.primary && <span className={styles.primaryBadge}>Main Office</span>}
                <div className={styles.areaIcon}>
                  <IconMapPin size={22} color="var(--cyan-500)" />
                </div>
                <h3 className={styles.areaName}>{area.name}</h3>
                <p className={styles.areaDesc}>{area.desc}</p>
                <Link href="/contact" className="link-cyan" style={{ fontSize: "0.875rem" }}>
                  Get Support →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Need IT Support in Your Area?</h2>
          <p className={styles.ctaSub}>
            Contact us to discuss how we can support your business technology needs.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact All Nippon IT</Link>
            <a href={BUSINESS.phoneHref} className="btn btn-outline btn-lg">
              <IconPhone size={18} color="var(--cyan-400)" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
