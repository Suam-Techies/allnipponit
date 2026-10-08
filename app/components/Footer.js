import Link from "next/link";
import BUSINESS from "../business-config";
import { IconMapPin, IconPhone, IconMail } from "./Icons";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const SERVICE_LINKS = [
  { label: "IT Support", href: "/it-support" },
  { label: "Managed IT", href: "/managed-it" },
  { label: "Computer Support", href: "/services" },
  { label: "Network Support", href: "/services" },
  { label: "Cybersecurity", href: "/services" },
  { label: "Cloud Services", href: "/services" },
  { label: "Backup & Recovery", href: "/services" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <div style={{ marginBottom: "16px" }}>
            <Logo variant="dark" size="md" idPrefix="ftr" />
          </div>
          <p className={styles.brandDesc}>{BUSINESS.tagline}</p>
          <p className={styles.brandCity}>{BUSINESS.address.city}, {BUSINESS.address.state}</p>
        </div>

        {/* Services Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul>
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.colLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <IconMapPin size={16} color="var(--cyan-400)" />
              <span>{BUSINESS.address.full}</span>
            </li>
            <li>
              <IconPhone size={16} color="var(--cyan-400)" />
              <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            </li>
            <li>
              <IconMail size={16} color="var(--cyan-400)" />
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </li>
          </ul>
          <div className={styles.hours}>
            <strong>Business Hours</strong>
            <p>{BUSINESS.hours}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p>© 2026 {BUSINESS.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
