import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/admin/PageHeader/PageHeader";
import StatusBadge from "@/components/admin/StatusBadge/StatusBadge";
import Button from "@/components/admin/Button/Button";
import { getBookingById } from "@/lib/admin/data";
import { updateBookingStatusAction } from "@/lib/admin/actions";
import { formatCurrency, formatDate } from "@/lib/admin/format";
import type { BookingStatus } from "@/lib/admin/types";
import styles from "./booking-detail.module.css";

const actionsByStatus: Record<
  BookingStatus,
  Array<{ label: string; status: BookingStatus; variant: "primary" | "secondary" }>
> = {
  pending: [
    { label: "Confirm Booking", status: "confirmed", variant: "primary" },
    { label: "Cancel Booking", status: "cancelled", variant: "secondary" },
  ],
  confirmed: [
    { label: "Mark Refunded", status: "refunded", variant: "secondary" },
    { label: "Cancel Booking", status: "cancelled", variant: "secondary" },
  ],
  cancelled: [],
  refunded: [],
};

export default async function BookingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const booking = await getBookingById(id);

  if (!booking) {
    notFound();
  }

  const availableActions = actionsByStatus[booking.status];

  return (
    <>
      <PageHeader
        title={`Booking ${booking.id}`}
        description="Review the booking details and update its status."
      />

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Customer</h2>
          <dl className={styles.dl}>
            <dt>Name</dt>
            <dd>{booking.customerName}</dd>
            <dt>Email</dt>
            <dd>{booking.email}</dd>
          </dl>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Trip</h2>
          <dl className={styles.dl}>
            <dt>Trip</dt>
            <dd>{booking.tripTitle}</dd>
            <dt>Travel Date</dt>
            <dd>{formatDate(booking.travelDate)}</dd>
            <dt>Guests</dt>
            <dd>{booking.guests}</dd>
          </dl>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Payment</h2>
          <dl className={styles.dl}>
            <dt>Amount</dt>
            <dd>{formatCurrency(booking.amount)}</dd>
            <dt>Status</dt>
            <dd>
              <StatusBadge status={booking.status} />
            </dd>
            <dt>Booked On</dt>
            <dd>{formatDate(booking.createdAt)}</dd>
          </dl>
        </section>
      </div>

      <div className={styles.actions}>
        {availableActions.map((action) => (
          <form key={action.status} action={updateBookingStatusAction.bind(null, booking.id, action.status)}>
            <Button type="submit" variant={action.variant}>
              {action.label}
            </Button>
          </form>
        ))}
        {availableActions.length === 0 && (
          <p className={styles.terminal}>This booking is in a final state and can&apos;t be changed.</p>
        )}
        <Link href="/admin/bookings" className={styles.backLink}>
          ← Back to Bookings
        </Link>
      </div>
    </>
  );
}
