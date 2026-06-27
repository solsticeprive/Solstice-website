"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import StatusBadge from "@/components/admin/StatusBadge/StatusBadge";
import Pagination from "@/components/admin/Pagination/Pagination";
import { SearchIcon } from "@/components/admin/icons/AdminIcons";
import type { Booking, BookingStatus } from "@/lib/admin/types";
import { formatCurrency, formatDate } from "@/lib/admin/format";
import styles from "./BookingsTable.module.css";

const PAGE_SIZE = 8;

const statusFilters: Array<{ value: BookingStatus | "all"; label: string }> = [
  { value: "all", label: "All Statuses" },
  { value: "confirmed", label: "Confirmed" },
  { value: "pending", label: "Pending" },
  { value: "cancelled", label: "Cancelled" },
  { value: "refunded", label: "Refunded" },
];

export default function BookingsTable({ bookings }: { bookings: Booking[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<BookingStatus | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return bookings.filter((booking) => {
      const matchesStatus = status === "all" || booking.status === status;
      const matchesQuery =
        !q ||
        booking.customerName.toLowerCase().includes(q) ||
        booking.email.toLowerCase().includes(q) ||
        booking.tripTitle.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [bookings, query, status]);

  const [prevQuery, setPrevQuery] = useState(query);
  const [prevStatus, setPrevStatus] = useState(status);
  if (query !== prevQuery || status !== prevStatus) {
    setPrevQuery(query);
    setPrevStatus(status);
    setPage(1);
  }

  const paginated = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by customer, email, or trip…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as BookingStatus | "all")}
          className={styles.select}
        >
          {statusFilters.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Trip</th>
              <th>Travel Date</th>
              <th>Guests</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Booked On</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <Link href={`/admin/bookings/${booking.id}`} className={styles.customerLink}>
                    <span className={styles.customerName}>{booking.customerName}</span>
                    <span className={styles.customerEmail}>{booking.email}</span>
                  </Link>
                </td>
                <td>{booking.tripTitle}</td>
                <td>{formatDate(booking.travelDate)}</td>
                <td>{booking.guests}</td>
                <td>{formatCurrency(booking.amount)}</td>
                <td>
                  <StatusBadge status={booking.status} />
                </td>
                <td>{formatDate(booking.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className={styles.empty}>No bookings match your search.</p>}
      </div>

      <Pagination page={page} pageSize={PAGE_SIZE} totalItems={filtered.length} onPageChange={setPage} />
    </div>
  );
}
