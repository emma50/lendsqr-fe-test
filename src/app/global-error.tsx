"use client";

import { useEffect } from "react";
import styles from "@/styles/ErrorBoundary.module.scss";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles.globalErrorContainer}>
          <div className={styles.globalErrorContent}>
            <h2 className={styles.globalErrorTitle}>Something went terribly wrong!</h2>
            <p className={styles.errorMessage}>A critical error occurred. Please try again.</p>
            <button onClick={reset} className={styles.resetButton}>
              Refresh page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
