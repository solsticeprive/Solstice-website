"use client";

import { useActionState } from "react";
import { submitInquiryAction, type InquiryFormState } from "@/lib/actions/inquiry";
import styles from "./InquiryModal.module.css";

const COUNTRY_CODES = [
  { code: "+234", label: "Nigeria (+234)" },
  { code: "+233", label: "Ghana (+233)" },
  { code: "+1", label: "US / Canada (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+27", label: "South Africa (+27)" },
  { code: "+254", label: "Kenya (+254)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+966", label: "Saudi Arabia (+966)" },
  { code: "+91", label: "India (+91)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+33", label: "France (+33)" },
  { code: "+49", label: "Germany (+49)" },
  { code: "+351", label: "Portugal (+351)" },
  { code: "+30", label: "Greece (+30)" },
  { code: "+20", label: "Egypt (+20)" },
  { code: "+212", label: "Morocco (+212)" },
  { code: "+57", label: "Colombia (+57)" },
  { code: "+55", label: "Brazil (+55)" },
  { code: "+81", label: "Japan (+81)" },
  { code: "+82", label: "South Korea (+82)" },
];

const initialState: InquiryFormState = { status: "idle" };

interface InquiryModalProps {
  topic: string;
}

export default function InquiryModal({ topic }: InquiryModalProps) {
  const [state, formAction, isPending] = useActionState(submitInquiryAction, initialState);

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
      <input type="hidden" name="topic" value={topic} />

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" required className={styles.input} />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" name="lastName" type="text" required className={styles.input} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone number</label>
        <div className={styles.phoneRow}>
          <select
            name="countryCode"
            id="countryCode"
            defaultValue="+234"
            className={styles.countrySelect}
            aria-label="Country code"
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="801 234 5678"
            required
            className={styles.phoneInput}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="question">Your question</label>
        <textarea
          id="question"
          name="question"
          rows={4}
          required
          className={styles.textarea}
          placeholder="What would you like to know?"
        />
      </div>

      {state.status === "error" && <p className={styles.error}>{state.message}</p>}

      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? "Sending…" : "Send Question →"}
      </button>
    </form>
  );
}
