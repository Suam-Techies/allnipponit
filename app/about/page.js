import Link from "next/link";
import BUSINESS from "../business-config";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
} from "../components/Icons";
import styles from "./page.module.css";

export const metadata = {
  title: "About All Nippon IT | IT Support Company in South Jordan, UT",
  description:
    "Learn about All Nippon IT, an IT support and technology services company based in South Jordan, Utah providing practical, security-minded technology solutions for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">About Us</span>
          <h1 className={styles.pageHeroTitle}>About All Nippon IT</h1>
          <p className={styles.pageHeroSub}>
            A South Jordan, Utah IT support and technology services company focused on
            practical, reliable technology solutions for local businesses.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section section-white">
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.contentMain}>
              <h2 className={styles.h2}>Technology Support Built Around Your Business</h2>
              <p>
                All Nippon IT is an IT support and technology services company based in
                South Jordan, Utah. We provide a range of technology services designed to
                help businesses manage, maintain, and improve their IT environments —
                from everyday troubleshooting to ongoing managed support.
              </p>

              <h3 className={styles.h3}>What We Do</h3>
              <p>
                We offer IT support, managed IT services, computer and device assistance,
                network support, email and communication setup, cloud services, cybersecurity
                guidance, and backup and data recovery planning. Our services are designed
                for small and growing businesses that need dependable technology support
                without the complexity and overhead of a large enterprise IT department.
              </p>

              <h3 className={styles.h3}>Our Approach to IT Support</h3>
              <p>
                We believe IT support should be straightforward, accessible, and focused on
                solving real business problems. Our approach is built on a few core principles:
              </p>
              <ul className={styles.valuesList}>
                <li>
                  <strong>Clear Communication</strong> — We explain technology issues in plain
                  language, without unnecessary jargon. You should always understand what&apos;s
                  happening with your technology and why we recommend a particular course of action.
                </li>
                <li>
                  <strong>Practical Solutions</strong> — We recommend technology solutions based
                  on your actual business needs, not the latest trends or the most expensive
                  options. Every recommendation should make sense for your organization.
                </li>
                <li>
                  <strong>Security Awareness</strong> — Security is not an afterthought. We
                  integrate sensible security practices into our everyday support, helping
                  protect your business from common threats and vulnerabilities.
                </li>
                <li>
                  <strong>Reliability</strong> — Dependable technology and dependable support
                  go hand-in-hand. We focus on building consistent, predictable support
                  relationships that our clients can count on.
                </li>
                <li>
                  <strong>Long-Term Thinking</strong> — We help businesses think beyond
                  immediate fixes, providing guidance that supports long-term operational
                  reliability and growth.
                </li>
              </ul>

              <h3 className={styles.h3}>Local Presence &amp; Remote Capabilities</h3>
              <p>
                We provide both remote and on-site support for businesses, ensuring swift response
                times, secure systems, and dependable technical guidance whenever your team needs assistance.
              </p>

              <h3 className={styles.h3}>Who We Serve</h3>
              <p>
                Our services are designed for small and mid-sized businesses, professional
                offices, and organizations that rely on technology for their daily operations.
                Whether you have a team of five or fifty, we provide the same level of
                attention, professionalism, and practical support.
              </p>
            </div>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>{BUSINESS.name}</h4>
                <p className={styles.sidebarTag}>{BUSINESS.tagline}</p>
                <ul className={styles.sidebarContact}>
                  <li>
                    <IconMapPin size={16} color="var(--cyan-500)" />
                    <span>{BUSINESS.address.full}</span>
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
                  Contact Us
                </Link>
              </div>
              <div className={styles.sidebarCard}>
                <h4>Our Services</h4>
                <ul className={styles.sidebarLinks}>
                  <li><Link href="/it-support">IT Support</Link></li>
                  <li><Link href="/managed-it">Managed IT</Link></li>
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
          <h2 className={styles.ctaTitle}>Let&apos;s Talk About Your Technology Needs</h2>
          <p className={styles.ctaSub}>
            Contact All Nippon IT to learn how we can support your business.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
