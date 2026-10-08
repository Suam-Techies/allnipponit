"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BUSINESS from "../business-config";
import { IconPhone } from "./Icons";
import Logo from "./Logo";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "IT Support", href: "/it-support" },
  { label: "Managed IT", href: "/managed-it" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Service Area", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Logo variant="light" size="md" idPrefix="hdr" />

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <a href={BUSINESS.phoneHref} className={styles.phoneLink}>
            <IconPhone size={16} color="var(--cyan-500)" />
            {BUSINESS.phone}
          </a>
          <Link href="/contact" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
            Request IT Support
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileContact}>
          <a href={BUSINESS.phoneHref} className={styles.mobilePhone}>
            <IconPhone size={18} color="var(--cyan-500)" />
            {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Request IT Support
          </Link>
        </div>
      </div>
    </header>
  );
}
