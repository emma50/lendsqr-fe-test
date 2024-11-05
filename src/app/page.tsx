import styles from "@/styles/Home.module.scss";
import CustomLink from "@/components/CustomLink";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-testid="welcome-statement">
          Welcome to lendsqr frontend assessment
        </h1>
        <CustomLink href="/login" className={styles.link} data="login-link" text="Go to Login" />
      </div>
    </main>
  );
}
