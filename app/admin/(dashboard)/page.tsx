import Link from "next/link";
import PageHeader from "@/components/admin/PageHeader/PageHeader";
import StatCard from "@/components/admin/StatCard/StatCard";
import StatusBadge from "@/components/admin/StatusBadge/StatusBadge";
import {
  BookingsIcon,
  RevenueIcon,
  ClockIcon,
  TripsIcon,
  WaitlistIcon,
} from "@/components/admin/icons/AdminIcons";
import { getBookings, getDashboardStats, getTrips } from "@/lib/admin/data";
import { formatCurrency, formatDate } from "@/lib/admin/format";
import styles from "./dashboard.module.css";

export default async function AdminDashboardPage() {
  const [stats, bookings, trips] = await Promise.all([
    getDashboardStats(),
    getBookings(),
    getTrips(),
  ]);

  const recentBookings = [...bookings]
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 5);

  const upcomingTrips = trips
    .filter((trip) => trip.status === "published")
    .sort((a, b) => (a.startDate < b.startDate ? -1 : 1))
    .slice(0, 4);

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="A snapshot of bookings and trip activity across Solstice Privé."
      />

      <div className={styles.stats}>
        <StatCard label="Total Bookings" value={String(stats.totalBookings)} icon={BookingsIcon} tone="green" />
        <StatCard
          label="Confirmed Revenue"
          value={formatCurrency(stats.totalRevenue)}
          icon={RevenueIcon}
          tone="gold"
        />
        <StatCard
          label="Pending Bookings"
          value={String(stats.pendingBookings)}
          hint="Awaiting confirmation"
          icon={ClockIcon}
          tone="warning"
        />
        <StatCard
          label="Upcoming Trips"
          value={String(stats.upcomingTrips)}
          hint="Currently published"
          icon={TripsIcon}
          tone="info"
        />
        <StatCard
          label="Waitlist Signups"
          value={String(stats.waitlistSignups)}
          hint="Total to date"
          icon={WaitlistIcon}
          tone="clay"
        />
      </div>

      <div className={styles.panels}>
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>
              <BookingsIcon className={styles.panelIcon} />
              Recent Bookings
            </h2>
            <Link href="/admin/bookings" className={styles.panelLink}>
              View all →
            </Link>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Trip</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <Link href={`/admin/bookings/${booking.id}`} className={styles.rowLink}>
                      {booking.customerName}
                    </Link>
                  </td>
                  <td>{booking.tripTitle}</td>
                  <td>{formatCurrency(booking.amount)}</td>
                  <td>
                    <StatusBadge status={booking.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <h2 className={styles.panelTitle}>
              <TripsIcon className={styles.panelIcon} />
              Upcoming Trips
            </h2>
            <Link href="/admin/trips" className={styles.panelLink}>
              View all →
            </Link>
          </div>
          <ul className={styles.tripList}>
            {upcomingTrips.map((trip) => (
              <li key={trip.id} className={styles.tripItem}>
                <div>
                  <span className={styles.tripTitle}>{trip.title}</span>
                  <span className={styles.tripMeta}>
                    {formatDate(trip.startDate)} · {trip.booked}/{trip.capacity} booked
                  </span>
                </div>
                <StatusBadge status={trip.status} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
