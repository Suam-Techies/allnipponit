import Link from "next/link";
import styles from "./Logo.module.css";

export function LogoMark({ size = 36, idPrefix = "logo" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.markSvg}
    >
      <defs>
        {/* Main Background Gradient */}
        <linearGradient
          id={`${idPrefix}-bg`}
          x1="0"
          y1="0"
          x2="48"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0a0f1e" />
        </linearGradient>

        {/* Primary Cyan-to-Blue Tech Gradient */}
        <linearGradient
          id={`${idPrefix}-cyan-blue`}
          x1="6"
          y1="8"
          x2="42"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="45%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Accent Bright Cyan Gradient */}
        <linearGradient
          id={`${idPrefix}-accent`}
          x1="12"
          y1="12"
          x2="36"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#67e8f9" />
        </linearGradient>

        {/* Glow Filter */}
        <filter
          id={`${idPrefix}-glow`}
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          filterUnits="userSpaceOnUse"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#06b6d4"
            floodOpacity="0.4"
          />
        </filter>
      </defs>

      {/* Rounded Hexagon Base with subtle border */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        fill={`url(#${idPrefix}-bg)`}
        stroke={`url(#${idPrefix}-cyan-blue)`}
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />

      {/* Subtle Inner Grid / Tech Geometry Lines */}
      <path
        d="M24 6V42M6 24H42"
        stroke="#06b6d4"
        strokeWidth="0.75"
        strokeOpacity="0.15"
        strokeDasharray="2 2"
      />

      {/* Precision Geometric Monogram (Intersecting 'A' & 'N' Tech Network) */}
      <g filter={`url(#${idPrefix}-glow)`}>
        {/* Left 'A' leg extending to 'N' diagonal */}
        <path
          d="M12 36L24 12L36 36"
          stroke={`url(#${idPrefix}-cyan-blue)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 'A' Crossbar & 'N' Connection */}
        <path
          d="M16 28H32"
          stroke={`url(#${idPrefix}-accent)`}
          strokeWidth="2.75"
          strokeLinecap="round"
        />

        {/* Dynamic Central Vertical 'N' Backbone */}
        <path
          d="M24 14V34"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.95"
        />

        {/* Technology Node Pulsing Apex */}
        <circle cx="24" cy="12" r="3" fill="#ffffff" />
        <circle cx="12" cy="36" r="2.5" fill="#22d3ee" />
        <circle cx="36" cy="36" r="2.5" fill="#2563eb" />
        <circle cx="24" cy="28" r="2" fill="#67e8f9" />
      </g>
    </svg>
  );
}

export default function Logo({
  variant = "light", // 'light' (dark text for white bg) or 'dark' (white text for navy bg)
  size = "md", // 'sm', 'md', 'lg'
  showTagline = true,
  href = "/",
  idPrefix = "logo",
}) {
  const markSize = size === "sm" ? 32 : size === "lg" ? 44 : 38;

  const content = (
    <div className={`${styles.logoLink} ${styles[size]}`}>
      <span className={styles.markWrap}>
        <LogoMark size={markSize} idPrefix={idPrefix} />
      </span>
      <div className={styles.textBlock}>
        <div className={styles.nameRow}>
          <span
            className={`${styles.brandName} ${
              variant === "dark" ? styles.brandNameDark : styles.brandNameLight
            }`}
          >
            ALL NIPPON
          </span>
          <span className={styles.itBadge}>IT</span>
        </div>
        {showTagline && (
          <span
            className={`${styles.tagline} ${
              variant === "dark" ? styles.taglineDark : styles.taglineLight
            }`}
          >
            Technology Services
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
}
