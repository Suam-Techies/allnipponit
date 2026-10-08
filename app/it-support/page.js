import Link from "next/link";
import BUSINESS from "../business-config";
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconClock,
  IconMonitor,
  IconNetwork,
  IconShield,
  IconSettings,
  IconHardDrive,
  IconLaptop,
} from "../components/Icons";
import styles from "./page.module.css";

export const metadata = {
  title: "IT Support Services in South Jordan, UT | All Nippon IT",
  description:
    "All Nippon IT provides reliable IT support services including computer troubleshooting, software assistance, and technical help for businesses in South Jordan, UT.",
};

export default function ITSupportPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">IT Support</span>
          <h1 className={styles.pageHeroTitle}>IT Support Services in South Jordan, UT</h1>
          <p className={styles.pageHeroSub}>
            Responsive, professional IT support for businesses that need technology
            assistance they can count on.
          </p>
          <div className={styles.pageHeroBtns}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request IT Support
            </Link>
            <a href={BUSINESS.phoneHref} className="btn btn-outline btn-lg">
              <IconPhone size={18} color="var(--cyan-400)" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section section-white">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2 className={styles.h2}>Dependable Technology Support for Your Business</h2>
              <p>
                Technology issues affect productivity, communication, and day-to-day operations. 
                All Nippon IT provides responsive IT support services to help businesses in 
                South Jordan address technical challenges quickly and effectively.
              </p>
              <p>
                Whether your team is dealing with a slow computer, software errors, 
                connectivity issues, email problems, or other technology frustrations, our 
                support services are designed to minimize disruption and help your team get 
                back to work.
              </p>

              <h3 className={styles.h3}>What Our IT Support Covers</h3>
              <div className="grid-2">
                {[
                  {
                    icon: <IconMonitor size={24} color="var(--cyan-500)" />,
                    title: "Computer Troubleshooting",
                    desc: "Diagnosing and resolving hardware and software issues on desktops, laptops, and workstations.",
                  },
                  {
                    icon: <IconMail size={24} color="var(--cyan-500)" />,
                    title: "Email & Communication",
                    desc: "Assistance with email configuration, calendar issues, and business communication tools.",
                  },
                  {
                    icon: <IconNetwork size={24} color="var(--cyan-500)" />,
                    title: "Connectivity Issues",
                    desc: "Troubleshooting internet, Wi-Fi, VPN, and network connectivity problems.",
                  },
                  {
                    icon: <IconShield size={24} color="var(--cyan-500)" />,
                    title: "Security Support",
                    desc: "Virus removal, malware cleanup, and security configuration assistance.",
                  },
                  {
                    icon: <IconHardDrive size={24} color="var(--cyan-500)" />,
                    title: "Printer & Peripheral Help",
                    desc: "Setup, configuration, and troubleshooting for printers, scanners, and other devices.",
                  },
                  {
                    icon: <IconLaptop size={24} color="var(--cyan-500)" />,
                    title: "Software Assistance",
                    desc: "Help with software installation, updates, licensing, and application-specific issues.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`card ${styles.featureCard}`}>
                    <div className="icon-circle">{item.icon}</div>
                    <h4 className={styles.featureTitle}>{item.title}</h4>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className={styles.h3}>How IT Support Works</h3>
              <p>
                Getting IT support from All Nippon IT is straightforward. Contact us by
                phone, email, or through our website to describe the issue. We will work
                with you to understand the problem and provide the appropriate level of 
                support — whether that means remote troubleshooting, guided assistance, 
                or on-site help.
              </p>
              <p>
                Our goal is to resolve issues effectively while communicating clearly 
                about what we find and what steps we recommend. We believe that good IT 
                support should be accessible and easy to understand, not full of confusing 
                technical jargon.
              </p>
            </div>
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Contact All Nippon IT</h4>
                <ul className={styles.sidebarContact}>
                  <li>
                    <IconMapPin size={16} color="var(--cyan-500)" />
                    <span>{BUSINESS.address.city}, {BUSINESS.address.stateAbbr}</span>
                  </li>
                  <li>
                    <IconPhone size={16} color="var(--cyan-500)" />
                    <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
                  </li>
                  <li>
                    <IconMail size={16} color="var(--cyan-500)" />
                    <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
                  </li>
                  <li>
                    <IconClock size={16} color="var(--cyan-500)" />
                    <span>{BUSINESS.hours}</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: "100%" }}>
                  Request Support
                </Link>
              </div>
              <div className={styles.sidebarCard}>
                <h4>Other Services</h4>
                <ul className={styles.sidebarLinks}>
                  <li><Link href="/managed-it">Managed IT Services</Link></li>
                  <li><Link href="/services">All Services</Link></li>
                  <li><Link href="/service-areas">Service Areas</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Need IT Support?</h2>
          <p className={styles.ctaSub}>Contact All Nippon IT for professional technology support in South Jordan, Utah.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
