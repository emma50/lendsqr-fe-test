"use client";

import { useEffect } from "react";
import styles from "@/styles/ErrorBoundary.module.scss";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h2 className={styles.errorTitle}>Something went wrong!</h2>
        <p className={styles.errorMessage}>{error.message || "An unexpected error occurred"}</p>
        {error.digest && <p className={styles.errorDigest}>Error ID: {error.digest}</p>}
        <button onClick={reset} className={styles.resetButton}>
          Try again
        </button>
      </div>
    </div>
  );
}
