"use client";
import { useState } from "react";
import BUSINESS from "../business-config";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCheck,
  IconSend,
} from "../components/Icons";
import styles from "./page.module.css";

const SERVICE_OPTIONS = [
  "IT Support",
  "Computer Support",
  "Network Support",
  "Managed IT",
  "Cybersecurity",
  "Cloud Services",
  "Backup & Recovery",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to a form handler / API route
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroOverlay} />
        <div className={`container ${styles.pageHeroContent}`}>
          <span className="overline">Get in Touch</span>
          <h1 className={styles.pageHeroTitle}>Contact All Nippon IT</h1>
          <p className={styles.pageHeroSub}>
            Have a technology question or need IT support? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section section-white">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* LEFT — Business Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoName}>ALL NIPPON IT</h2>
                <p className={styles.infoTag}>{BUSINESS.tagline}</p>

                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>
                      <IconMapPin size={20} color="var(--cyan-500)" />
                    </span>
                    <div>
                      <strong>Address</strong>
                      <p>{BUSINESS.address.street}</p>
                      <p>{BUSINESS.address.city}, {BUSINESS.address.stateAbbr} {BUSINESS.address.zip}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>
                      <IconPhone size={20} color="var(--cyan-500)" />
                    </span>
                    <div>
                      <strong>Phone</strong>
                      <p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>
                      <IconMail size={20} color="var(--cyan-500)" />
                    </span>
                    <div>
                      <strong>Email</strong>
                      <p><a href={BUSINESS.emailHref}>{BUSINESS.email}</a></p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>
                      <IconClock size={20} color="var(--cyan-500)" />
                    </span>
                    <div>
                      <strong>Business Hours</strong>
                      <p>{BUSINESS.hours}</p>
                    </div>
                  </div>
                </div>

                {BUSINESS.mapDirectionsUrl && (
                  <a
                    href={BUSINESS.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ marginTop: "20px" }}
                  >
                    Get Directions
                  </a>
                )}
              </div>

              {/* Map Embed */}
              {BUSINESS.mapEmbedUrl && (
                <div className={styles.mapWrap}>
                  <iframe
                    src={BUSINESS.mapEmbedUrl}
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="All Nippon IT Location"
                  />
                </div>
              )}
            </div>

            {/* RIGHT — Form */}
            <div className={styles.formSection}>
              <h2 className={styles.formTitle}>Tell Us How We Can Help</h2>
              {submitted ? (
                <div className={styles.successMsg}>
                  <div className={styles.successIcon}>
                    <IconCheck size={36} color="var(--white)" />
                  </div>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been received. We will review your request and
                    get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-business">Business Name</label>
                      <input
                        id="contact-business"
                        name="business"
                        type="text"
                        className="form-input"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className="form-input"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(888) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">Service Needed</label>
                    <select
                      id="contact-service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your technology needs or issue..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                    Send Request
                  </button>
                  <p className={styles.privacyNote}>
                    By submitting this form, you agree to our privacy policy. Your information
                    will only be used to respond to your inquiry and will not be shared with
                    third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
