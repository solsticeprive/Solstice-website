import styles from "./StatCard.module.css";

type Tone = "green" | "gold" | "warning" | "info" | "clay";

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone?: Tone;
}

export default function StatCard({ label, value, hint, icon: Icon, tone = "gold" }: StatCardProps) {
  return (
    <div className={styles.card}>
      <span className={`${styles.iconBadge} ${styles[tone]}`}>
        <Icon className={styles.icon} />
      </span>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
}
