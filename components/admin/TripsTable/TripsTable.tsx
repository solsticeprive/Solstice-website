"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import StatusBadge from "@/components/admin/StatusBadge/StatusBadge";
import Pagination from "@/components/admin/Pagination/Pagination";
import { SearchIcon } from "@/components/admin/icons/AdminIcons";
import type { Trip, TripStatus } from "@/lib/admin/types";
import { formatCurrency, formatDate } from "@/lib/admin/format";
import styles from "./TripsTable.module.css";

const PAGE_SIZE = 6;

const statusFilters: Array<{ value: TripStatus | "all"; label: string }> = [
  { value: "all", label: "All Statuses" },
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "sold_out", label: "Sold Out" },
  { value: "archived", label: "Archived" },
];

export default function TripsTable({ trips }: { trips: Trip[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<TripStatus | "all">("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return trips.filter((trip) => {
      const matchesStatus = status === "all" || trip.status === status;
      const matchesQuery =
        !q ||
        trip.title.toLowerCase().includes(q) ||
        trip.location.toLowerCase().includes(q) ||
        trip.tag.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
  }, [trips, query, status]);

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
            placeholder="Search by title, location, or tag…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TripStatus | "all")}
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
              <th>Trip</th>
              <th>Dates</th>
              <th>Capacity</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((trip) => (
              <tr key={trip.id}>
                <td>
                  <div className={styles.tripCell}>
                    <div className={styles.thumb}>
                      <Image src={trip.image} alt={trip.title} fill sizes="56px" className={styles.thumbImage} />
                    </div>
                    <div>
                      <span className={styles.tripTitle}>{trip.title}</span>
                      <span className={styles.tripMeta}>
                        {trip.tag} · {trip.location}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  {formatDate(trip.startDate)} – {formatDate(trip.endDate)}
                </td>
                <td>
                  {trip.booked}/{trip.capacity}
                </td>
                <td>{formatCurrency(trip.price)}</td>
                <td>
                  <StatusBadge status={trip.status} />
                </td>
                <td>
                  <Link href={`/admin/trips/${trip.id}/edit`} className={styles.editLink}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className={styles.empty}>No trips match your search.</p>}
      </div>

      <Pagination page={page} pageSize={PAGE_SIZE} totalItems={filtered.length} onPageChange={setPage} />
    </div>
  );
}
