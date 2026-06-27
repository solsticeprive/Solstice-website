"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(current: number, total: number): Array<number | "ellipsis"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: Array<number | "ellipsis"> = [1];
  if (current > 3) pages.push("ellipsis");

  for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) {
    pages.push(p);
  }

  if (current < total - 2) pages.push("ellipsis");
  pages.push(total);

  return pages;
}

export default function Pagination({ page, pageSize, totalItems, onPageChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  if (totalPages <= 1) return null;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className={styles.wrap}>
      <span className={styles.summary}>
        Showing {start}–{end} of {totalItems}
      </span>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.nav}
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          ← Prev
        </button>
        <div className={styles.pages}>
          {getPageNumbers(page, totalPages).map((p, index) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                …
              </span>
            ) : (
              <button
                key={p}
                type="button"
                className={`${styles.page} ${p === page ? styles.active : ""}`}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            )
          )}
        </div>
        <button
          type="button"
          className={styles.nav}
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
