import BUSINESS from "../business-config";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | All Nippon IT",
  description: "Privacy policy for All Nippon IT, an IT support company in South Jordan, Utah.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
        </div>
      </section>
      <section className="section section-white">
        <div className={`container ${styles.legalContent}`}>
          <p className={styles.updated}>Last Updated: October 2026</p>

          <h2>Introduction</h2>
          <p>
            All Nippon IT (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
            committed to protecting the personal information you share with us. This
            Privacy Policy explains how we collect, use, and safeguard information when
            you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and business name when you submit a contact form or reach out to us directly.</li>
            <li><strong>Technical Information:</strong> Browser type, IP address, and device information collected automatically through standard web technologies.</li>
            <li><strong>Service Information:</strong> Details about your technology environment shared during the course of providing IT support services.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide requested services</li>
            <li>To deliver IT support and managed technology services</li>
            <li>To communicate with you about our services</li>
            <li>To improve our website and services</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties.
            We may share information only as necessary to provide our services or as
            required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access, alteration, or
            destruction. However, no method of transmission over the internet is 100%
            secure.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
