import { LinkButton } from "@/components/admin/Button/Button";
import styles from "./admin-not-found.module.css";

export default function AdminNotFound() {
  return (
    <div className={styles.wrap}>
      <span className={styles.eyebrow}>404</span>
      <h1 className={styles.heading}>That record doesn&apos;t exist</h1>
      <p className={styles.copy}>
        It may have been removed, or the link you followed is out of date.
      </p>
      <LinkButton href="/admin/trips">Back to Trips</LinkButton>
    </div>
  );
}
