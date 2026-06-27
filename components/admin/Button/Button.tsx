import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: never;
}

interface LinkButtonProps {
  variant?: Variant;
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

export function LinkButton({ variant = "primary", href, children, className }: LinkButtonProps) {
  return (
    <Link href={href} className={[styles.button, styles[variant], className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
