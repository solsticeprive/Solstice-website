"use client";

import { useActionState } from "react";
import { joinWaitlistAction, type WaitlistFormState } from "@/lib/actions/waitlist";
import { collections } from "@/lib/content";
import styles from "./WaitlistForm.module.css";

const initialState: WaitlistFormState = { status: "idle" };

export default function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlistAction, initialState);

  if (state.status === "success") {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <p className={styles.successText}>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.row}>
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
          className={styles.input}
          aria-label="Full name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className={styles.input}
          aria-label="Email address"
        />
      </div>
      <select name="interest" defaultValue="" className={styles.select} aria-label="Interested in">
        <option value="" disabled>
          I&apos;m interested in… (optional)
        </option>
        <option value="General">General waitlist</option>
        {collections.map((collection) => (
          <option key={collection.title} value={collection.title}>
            {collection.title}
          </option>
        ))}
      </select>

      {state.status === "error" && <p className={styles.error}>{state.message}</p>}

      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? "Joining…" : "Join the VIP Waitlist →"}
      </button>
      <p className={styles.note}>We&apos;ll never share your email. Unsubscribe anytime.</p>
    </form>
  );
}
