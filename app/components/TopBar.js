"use client";
import BUSINESS from "../business-config";
import { IconMapPin, IconPhone, IconMail } from "./Icons";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.item}>
            <IconMapPin size={14} color="var(--cyan-400)" />
            {BUSINESS.address.city}, {BUSINESS.address.stateAbbr}
          </span>
        </div>
        <div className={styles.right}>
          <a href={BUSINESS.phoneHref} className={styles.item}>
            <IconPhone size={14} color="var(--cyan-400)" />
            {BUSINESS.phone}
          </a>
          <span className={styles.divider}>|</span>
          <a href={BUSINESS.emailHref} className={styles.item}>
            <IconMail size={14} color="var(--cyan-400)" />
            {BUSINESS.email}
          </a>
        </div>
      </div>
    </div>
  );
}
