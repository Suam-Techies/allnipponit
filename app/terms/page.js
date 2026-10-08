import BUSINESS from "../business-config";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms of Service | All Nippon IT",
  description: "Terms of service for All Nippon IT, an IT support company in South Jordan, Utah.",
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Terms of Service</h1>
        </div>
      </section>
      <section className="section section-white">
        <div className={`container ${styles.legalContent}`}>
          <p className={styles.updated}>Last Updated: October 2026</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the All Nippon IT website and services, you agree
            to be bound by these Terms of Service. If you do not agree with any part
            of these terms, please do not use our website or services.
          </p>

          <h2>Services</h2>
          <p>
            All Nippon IT provides IT support, managed IT services, and related
            technology services for businesses. The specific scope, terms, and
            pricing of services are defined in individual service agreements
            between All Nippon IT and each client.
          </p>

          <h2>Use of Website</h2>
          <p>
            You may use our website for lawful purposes only. You agree not to use
            the website in any way that could damage, disable, or impair the
            website or interfere with any other party&apos;s use of the website.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of All Nippon IT or its content suppliers and
            is protected by intellectual property laws.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            All Nippon IT shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use
            of or inability to use our website or services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to the website. Your continued
            use of the website constitutes acceptance of the modified terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms of Service may be directed to:
          </p>
          <p>
            {BUSINESS.name}<br />
            {BUSINESS.address.full}<br />
            <a href={BUSINESS.emailHref}>{BUSINESS.email}</a><br />
            <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
