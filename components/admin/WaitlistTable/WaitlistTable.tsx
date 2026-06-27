"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/admin/Pagination/Pagination";
import { SearchIcon } from "@/components/admin/icons/AdminIcons";
import type { WaitlistSignup } from "@/lib/admin/types";
import { formatDate } from "@/lib/admin/format";
import styles from "./WaitlistTable.module.css";

const PAGE_SIZE = 6;

export default function WaitlistTable({ signups }: { signups: WaitlistSignup[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return signups;
    return signups.filter(
      (signup) =>
        signup.name.toLowerCase().includes(q) ||
        signup.email.toLowerCase().includes(q) ||
        signup.interest.toLowerCase().includes(q)
    );
  }, [signups, query]);

  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setPage(1);
  }

  const paginated = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by name, email, or interest…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Interested In</th>
              <th>Signed Up</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((signup) => (
              <tr key={signup.id}>
                <td className={styles.name}>{signup.name}</td>
                <td>{signup.email}</td>
                <td>{signup.interest}</td>
                <td>{formatDate(signup.signedUpAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className={styles.empty}>No signups match your search.</p>}
      </div>

      <Pagination page={page} pageSize={PAGE_SIZE} totalItems={filtered.length} onPageChange={setPage} />
    </div>
  );
}
