"use client";

import { useActionState, useState } from "react";
import { loginAction } from "@/lib/admin/actions";
import { EyeIcon, EyeOffIcon } from "@/components/admin/icons/AdminIcons";
import styles from "./LoginForm.module.css";

export default function LoginForm({ demoHint }: { demoHint: string }) {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="admin@solsticeprive.com" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <div className={styles.passwordWrap}>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      {state?.error && <p className={styles.error}>{state.error}</p>}

      <button type="submit" className={styles.submit} disabled={isPending}>
        {isPending ? "Signing In…" : "Sign In"}
      </button>

      {/* <div className={styles.demo}>
        <span className={styles.demoLabel}>Demo credentials</span>
        <code className={styles.demoValue}>{demoHint}</code>
      </div> */}
    </form>
  );
}
