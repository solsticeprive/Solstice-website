import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <span className={styles.greeting}>Welcome back, Admin</span>
      <div className={styles.user}>
        <span className={styles.avatar}>A</span>
        <span className={styles.userName}>Admin</span>
      </div>
    </header>
  );
}
