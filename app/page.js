import Link from "next/link";
import Image from "next/image";
import BUSINESS from "./business-config";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCheck,
  IconShield,
  IconBriefcase,
  IconLock,
  IconMonitor,
  IconSettings,
  IconLaptop,
  IconNetwork,
  IconCloud,
  IconDatabase,
  IconArrowRight,
} from "./components/Icons";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className="overline">IT Support &amp; Technology Services — South Jordan, UT</span>
            <h1 className={styles.heroTitle}>
              Reliable IT Support for South Jordan Businesses
            </h1>
            <p className={styles.heroSub}>
              Professional IT support, managed technology services, network assistance,
              and business technology solutions for organizations in South Jordan, Utah.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request IT Support
              </Link>
              <a href={BUSINESS.phoneHref} className="btn btn-outline btn-lg">
                <IconPhone size={18} color="var(--cyan-400)" />
                Call {BUSINESS.phone}
              </a>
            </div>
            <div className={styles.heroMeta}>
              <span>
                <IconMapPin size={16} color="var(--cyan-400)" />
                South Jordan, Utah
              </span>
              <span>
                <IconPhone size={16} color="var(--cyan-400)" />
                {BUSINESS.phone}
              </span>
              <span>
                <IconMail size={16} color="var(--cyan-400)" />
                {BUSINESS.email}
              </span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/hero-it-environment.jpg"
              alt="Professional IT support environment with network monitoring and cybersecurity dashboards"
              width={640}
              height={400}
              priority
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* ===== BUSINESS INFO CARD ===== */}
      <section className={styles.bizCard}>
        <div className="container">
          <div className={styles.bizCardInner}>
            <div className={styles.bizCardLeft}>
              <h2 className={styles.bizCardName}>{BUSINESS.name}</h2>
              <p className={styles.bizCardTag}>{BUSINESS.tagline}</p>
            </div>
            <div className={styles.bizCardInfo}>
              <span>
                <IconMapPin size={18} color="var(--cyan-500)" />
                <a
                  href={BUSINESS.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BUSINESS.address.full}
                </a>
              </span>
              <span>
                <IconPhone size={18} color="var(--cyan-500)" />
                <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
              </span>
              <span>
                <IconMail size={18} color="var(--cyan-500)" />
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
              </span>
              <span>
                <IconClock size={18} color="var(--cyan-500)" />
                {BUSINESS.hours}
              </span>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Contact All Nippon IT
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="overline">Why All Nippon IT</span>
            <h2>Technology Support You Can Rely On</h2>
            <p>
              All Nippon IT provides practical technology support and IT services designed
              to help businesses maintain reliable, secure, and productive technology
              environments.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: <IconShield size={28} color="var(--cyan-500)" />,
                title: "Reliable Support",
                desc: "Technical assistance for everyday computer, software, connectivity, and technology issues.",
              },
              {
                icon: <IconBriefcase size={28} color="var(--cyan-500)" />,
                title: "Business Technology",
                desc: "Technology solutions designed around the practical needs of small and growing businesses.",
              },
              {
                icon: <IconLock size={28} color="var(--cyan-500)" />,
                title: "Security-Minded Service",
                desc: "Support with a focus on sensible security practices and responsible technology management.",
              },
            ].map((item, i) => (
              <div key={i} className={`card ${styles.valueCard}`}>
                <div className="icon-circle">{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section section-gray" id="services-section">
        <div className="container">
          <div className="section-header">
            <span className="overline">What We Do</span>
            <h2>Our IT Services</h2>
            <p>Professional technology support for the systems your business depends on.</p>
          </div>
          <div className="grid-4">
            {[
              {
                icon: <IconMonitor size={32} color="var(--cyan-500)" />,
                title: "IT Support",
                desc: "Computer troubleshooting, software assistance, user support, and general technology help for your team.",
                href: "/it-support",
              },
              {
                icon: <IconSettings size={32} color="var(--cyan-500)" />,
                title: "Managed IT Services",
                desc: "Ongoing technology management, maintenance, monitoring, and support to keep your business running smoothly.",
                href: "/managed-it",
              },
              {
                icon: <IconLaptop size={32} color="var(--cyan-500)" />,
                title: "Computer & Device Support",
                desc: "Desktop, laptop, printer, peripheral, and business-device assistance when your team needs it most.",
                href: "/services",
              },
              {
                icon: <IconNetwork size={32} color="var(--cyan-500)" />,
                title: "Network Support",
                desc: "Network troubleshooting, Wi-Fi assistance, connectivity, and network configuration for reliable access.",
                href: "/services",
              },
              {
                icon: <IconMail size={32} color="var(--cyan-500)" />,
                title: "Email & Communication",
                desc: "Assistance with business email, communications setup, calendar synchronization, and digital tools.",
                href: "/services",
              },
              {
                icon: <IconCloud size={32} color="var(--cyan-500)" />,
                title: "Cloud Services",
                desc: "Cloud applications, account configuration, access management, and business cloud support.",
                href: "/services",
              },
              {
                icon: <IconLock size={32} color="var(--cyan-500)" />,
                title: "Cybersecurity",
                desc: "Security-focused configuration, account protection, endpoint security, and security best practices guidance.",
                href: "/services",
              },
              {
                icon: <IconDatabase size={32} color="var(--cyan-500)" />,
                title: "Backup & Data Recovery",
                desc: "Backup planning, configuration assistance, and recovery preparedness to protect your critical business data.",
                href: "/services",
              },
            ].map((svc, i) => (
              <div key={i} className={`card ${styles.serviceCard}`}>
                <div className="icon-circle icon-circle-lg">{svc.icon}</div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
                <Link href={svc.href} className={`link-cyan ${styles.serviceLink}`}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING / PACKAGES ===== */}
      <section className="section section-navy">
        <div className="container">
          <div className="section-header">
            <span className="overline">Get Started</span>
            <h2>IT Support Options</h2>
          </div>
          <div className="grid-3">
            {[
              {
                tier: "ESSENTIAL",
                name: "Essential IT Support",
                features: [
                  "Remote technical assistance",
                  "Computer and software troubleshooting",
                  "Device guidance",
                  "Basic technology recommendations",
                ],
              },
              {
                tier: "MANAGED",
                name: "Managed IT Support",
                featured: true,
                features: [
                  "Ongoing IT support",
                  "Network assistance",
                  "Device management",
                  "Maintenance and monitoring",
                  "Cloud and backup support",
                ],
              },
              {
                tier: "STRATEGIC",
                name: "Technology Partnership",
                features: [
                  "Technology planning",
                  "IT consulting",
                  "Security guidance",
                  "Infrastructure planning",
                  "Business technology strategy",
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`${styles.pricingCard} ${pkg.featured ? styles.pricingFeatured : ""}`}
              >
                <span className={styles.pricingTier}>{pkg.tier}</span>
                <h3 className={styles.pricingName}>{pkg.name}</h3>
                <p className={styles.pricingPrice}>Contact us for a customized plan</p>
                <ul className={styles.pricingFeatures}>
                  {pkg.features.map((f, j) => (
                    <li key={j}>
                      <span className={styles.checkIcon}>
                        <IconCheck size={16} color="var(--cyan-400)" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${pkg.featured ? "btn-primary" : "btn-outline"} ${styles.pricingBtn}`}>
                  Discuss Your IT Needs
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header">
            <span className="overline">The All Nippon IT Difference</span>
            <h2>Why Businesses Choose All Nippon IT</h2>
          </div>
          <div className="grid-3">
            {[
              { num: "01", title: "Local Focus", desc: "Dedicated technology support designed for modern growing businesses." },
              { num: "02", title: "Clear Communication", desc: "Straightforward explanations without unnecessary technical jargon." },
              { num: "03", title: "Practical Solutions", desc: "Technology recommendations based on actual business requirements." },
              { num: "04", title: "Responsive Support", desc: "A straightforward process for getting prompt technical assistance." },
              { num: "05", title: "Security Awareness", desc: "Security considerations integrated into everyday technology support." },
              { num: "06", title: "Long-Term Thinking", desc: "Solutions designed to support reliable, scalable business operations." },
            ].map((item, i) => (
              <div key={i} className={`card ${styles.whyCard}`}>
                <span className={styles.whyNum}>{item.num}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <span className="overline">How It Works</span>
            <h2>Simple IT Support Process</h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { step: "01", title: "Contact Us", desc: "Tell us about your technology issue or business requirement." },
              { step: "02", title: "Understand", desc: "We review your requirements and identify the appropriate support approach." },
              { step: "03", title: "Resolve", desc: "We work toward resolving the issue or implementing the requested solution." },
              { step: "04", title: "Support", desc: "Receive practical guidance for maintaining reliable business technology." },
            ].map((item, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.processNum}>{item.step}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processTitle}>{item.title}</h3>
                  <p className={styles.processDesc}>{item.desc}</p>
                </div>
                {i < 3 && <div className={styles.processConnector} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className={styles.localSection}>
        <div className={`container ${styles.localContent}`}>
          <span className="overline">Your Local IT Provider</span>
          <h2 className={styles.localTitle}>
            IT Support in {BUSINESS.address.city}, {BUSINESS.address.state}
          </h2>
          <p className={styles.localText}>
            All Nippon IT is based in {BUSINESS.address.city}, {BUSINESS.address.state},
            serving local businesses with on-site and remote IT support. Find our business
            address and contact details below.
          </p>
          <div className={styles.localMeta}>
            <span>
              <IconMapPin size={18} color="var(--cyan-400)" />
              {BUSINESS.address.full}
            </span>
            <span>
              <IconPhone size={18} color="var(--cyan-400)" />
              <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
            </span>
            <span>
              <IconMail size={18} color="var(--cyan-400)" />
              <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </span>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Our IT Support Team
          </Link>
          <a
            href={BUSINESS.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSub}>
            Contact All Nippon IT today to discuss how we can help with your
            technology needs.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Request IT Support
            </Link>
            <a href={BUSINESS.phoneHref} className="btn btn-secondary btn-lg">
              <IconPhone size={18} color="var(--cyan-500)" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
