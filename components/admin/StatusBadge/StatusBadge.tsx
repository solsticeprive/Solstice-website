import type { BookingStatus, TripStatus } from "@/lib/admin/types";
import styles from "./StatusBadge.module.css";

type Status = BookingStatus | TripStatus;

const labels: Record<Status, string> = {
  confirmed: "Confirmed",
  pending: "Pending",
  cancelled: "Cancelled",
  refunded: "Refunded",
  draft: "Draft",
  published: "Published",
  sold_out: "Sold Out",
  archived: "Archived",
};

const tones: Record<Status, string> = {
  confirmed: styles.success,
  published: styles.success,
  pending: styles.warning,
  draft: styles.warning,
  cancelled: styles.danger,
  sold_out: styles.danger,
  refunded: styles.info,
  archived: styles.info,
};

export default function StatusBadge({ status }: { status: Status }) {
  return <span className={`${styles.badge} ${tones[status]}`}>{labels[status]}</span>;
}
