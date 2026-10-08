import Link from "next/link";
import BUSINESS from "../business-config";
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconClock,
  IconActivity,
  IconSettings,
  IconNetwork,
  IconCloud,
  IconDatabase,
  IconLock,
} from "../components/Icons";
import styles from "./page.module.css";

export const metadata = {
  title: "Managed IT Services in South Jordan, UT | All Nippon IT",
  description:
    "All Nippon IT offers managed IT services including ongoing support, maintenance, monitoring, and technology management for businesses in South Jordan, Utah.",
};

export default function ManagedITPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">Managed IT Services</span>
          <h1 className={styles.pageHeroTitle}>Managed IT Services in South Jordan, UT</h1>
          <p className={styles.pageHeroSub}>
            Ongoing technology management, maintenance, and support so your business
            can focus on what matters most.
          </p>
          <div className={styles.pageHeroBtns}>
            <Link href="/contact" className="btn btn-primary btn-lg">Discuss Managed IT</Link>
            <a href={BUSINESS.phoneHref} className="btn btn-outline btn-lg">
              <IconPhone size={18} color="var(--cyan-400)" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2 className={styles.h2}>Proactive Technology Management for Growing Businesses</h2>
              <p>
                Rather than waiting for technology problems to disrupt your workday, 
                managed IT services provide an ongoing, proactive approach to maintaining 
                your business technology environment. All Nippon IT offers managed IT 
                services designed to help South Jordan businesses keep their systems running 
                reliably.
              </p>
              <p>
                With managed IT, you gain a dedicated technology partner who understands 
                your systems, monitors for potential issues, handles maintenance, and 
                provides strategic technology guidance — all as part of a consistent 
                support relationship.
              </p>

              <h3 className={styles.h3}>What Managed IT Includes</h3>
              <div className="grid-2">
                {[
                  {
                    icon: <IconActivity size={24} color="var(--cyan-500)" />,
                    title: "System Monitoring",
                    desc: "Ongoing monitoring of your technology environment to identify issues before they cause disruptions.",
                  },
                  {
                    icon: <IconSettings size={24} color="var(--cyan-500)" />,
                    title: "Maintenance & Updates",
                    desc: "Regular updates, patches, and maintenance tasks to keep systems current and secure.",
                  },
                  {
                    icon: <IconNetwork size={24} color="var(--cyan-500)" />,
                    title: "Network Management",
                    desc: "Configuration, monitoring, and maintenance of your business network infrastructure.",
                  },
                  {
                    icon: <IconCloud size={24} color="var(--cyan-500)" />,
                    title: "Cloud Management",
                    desc: "Administration and support for cloud applications, accounts, and services.",
                  },
                  {
                    icon: <IconDatabase size={24} color="var(--cyan-500)" />,
                    title: "Backup Management",
                    desc: "Configuration and monitoring of backup solutions to protect business data.",
                  },
                  {
                    icon: <IconLock size={24} color="var(--cyan-500)" />,
                    title: "Security Management",
                    desc: "Ongoing security monitoring, configuration, and best-practice implementation.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`card ${styles.featureCard}`}>
                    <div className="icon-circle">{item.icon}</div>
                    <h4 className={styles.featureTitle}>{item.title}</h4>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className={styles.h3}>Benefits of Managed IT Services</h3>
              <p>
                With managed IT services, your business benefits from consistent, 
                reliable technology management without the overhead of a full internal 
                IT department. You get a predictable support relationship, proactive 
                maintenance, and a technology partner who learns your environment and 
                adapts to your business needs over time.
              </p>
              <p>
                All Nippon IT focuses on clear communication, practical technology 
                recommendations, and building a support relationship that genuinely 
                helps your business operate more effectively.
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
                  Request Consultation
                </Link>
              </div>
              <div className={styles.sidebarCard}>
                <h4>Other Services</h4>
                <ul className={styles.sidebarLinks}>
                  <li><Link href="/it-support">IT Support</Link></li>
                  <li><Link href="/services">All Services</Link></li>
                  <li><Link href="/service-areas">Service Areas</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Ready for Managed IT?</h2>
          <p className={styles.ctaSub}>Let&apos;s discuss how managed IT services can support your business.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start the Conversation</Link>
        </div>
      </section>
    </>
  );
}
