import Link from "next/link";
import BUSINESS from "../business-config";
import {
  IconPhone,
  IconMonitor,
  IconSettings,
  IconLaptop,
  IconNetwork,
  IconMail,
  IconCloud,
  IconLock,
  IconDatabase,
} from "../components/Icons";
import styles from "./page.module.css";

export const metadata = {
  title: "IT Services | All Nippon IT",
  description:
    "Explore All Nippon IT's full range of IT services: computer support, network support, cloud services, cybersecurity, and backup & recovery.",
};

const SERVICES = [
  {
    icon: <IconMonitor size={32} color="var(--cyan-500)" />,
    title: "IT Support",
    desc: "Computer troubleshooting, software assistance, user support, and general technology help. We assist with the everyday technical challenges your team encounters, providing clear guidance and effective solutions.",
    href: "/it-support",
  },
  {
    icon: <IconSettings size={32} color="var(--cyan-500)" />,
    title: "Managed IT Services",
    desc: "Ongoing technology management, maintenance, monitoring, and support. Managed IT provides a proactive approach to keeping your business technology environment running reliably with consistent, predictable support.",
    href: "/managed-it",
  },
  {
    icon: <IconLaptop size={32} color="var(--cyan-500)" />,
    title: "Computer & Device Support",
    desc: "Desktop, laptop, printer, peripheral, and business-device assistance. From initial setup and configuration to troubleshooting hardware and software issues, we help keep your devices working properly.",
  },
  {
    icon: <IconNetwork size={32} color="var(--cyan-500)" />,
    title: "Network Support",
    desc: "Network troubleshooting, Wi-Fi assistance, connectivity, and network configuration. Reliable network connectivity is essential for modern business — we help ensure your team stays connected.",
  },
  {
    icon: <IconMail size={32} color="var(--cyan-500)" />,
    title: "Email & Collaboration Support",
    desc: "Support for business email platforms, account configuration, calendar synchronization, and digital collaboration tools to keep your team connected and productive.",
  },
  {
    icon: <IconCloud size={32} color="var(--cyan-500)" />,
    title: "Cloud Services",
    desc: "Cloud applications, account configuration, access management, and business cloud support. We help businesses navigate cloud platforms and make practical decisions about cloud-based tools and services.",
  },
  {
    icon: <IconLock size={32} color="var(--cyan-500)" />,
    title: "Cybersecurity",
    desc: "Security-focused configuration, account protection, endpoint security, and security best practices. We integrate sensible security measures into your technology environment to help reduce risk.",
  },
  {
    icon: <IconDatabase size={32} color="var(--cyan-500)" />,
    title: "Backup & Data Recovery",
    desc: "Backup planning, configuration assistance, and recovery preparedness. Protecting your business data is essential — we help implement and maintain backup solutions that fit your needs.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">Our Services</span>
          <h1 className={styles.pageHeroTitle}>IT Services &amp; Technology Solutions</h1>
          <p className={styles.pageHeroSub}>
            Comprehensive technology support covering the systems, devices, and
            applications your business depends on every day.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className={styles.servicesFullGrid}>
            {SERVICES.map((svc, i) => (
              <div key={i} className={`card ${styles.serviceFullCard}`}>
                <div className="icon-circle icon-circle-lg">{svc.icon}</div>
                <div>
                  <h3 className={styles.serviceFullTitle}>{svc.title}</h3>
                  <p className={styles.serviceFullDesc}>{svc.desc}</p>
                  {svc.href ? (
                    <Link href={svc.href} className="link-cyan" style={{ fontSize: "0.875rem" }}>
                      Learn More →
                    </Link>
                  ) : (
                    <Link href="/contact" className="link-cyan" style={{ fontSize: "0.875rem" }}>
                      Contact Us →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Need Technology Support?</h2>
          <p className={styles.ctaSub}>Contact All Nippon IT to discuss your technology requirements.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
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
