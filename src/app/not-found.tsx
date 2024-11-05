"use client";

import Link from "next/link";
import styles from "@/styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          {
            "Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track."
          }
        </p>
        <div className={styles.actions}>
          <Link href="/">
            <button className={`${styles.button} ${styles.primary}`}>Back to Home</button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className={`${styles.button} ${styles.secondary}`}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
