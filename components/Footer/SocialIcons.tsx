type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={className}>
      <path d="M16.6 2h-3.2v13.9a2.9 2.9 0 1 1-2.05-2.77v-3.3a6.2 6.2 0 1 0 5.25 6.13V9.13a7.9 7.9 0 0 0 4.6 1.48V7.4a4.7 4.7 0 0 1-4.6-4.7V2z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15.5 2h-2A4.5 4.5 0 0 0 9 6.5V9H6.5v4H9v9h4v-9h2.8l.7-4H13V6.5a1 1 0 0 1 1-1h1.5V2Z" />
    </svg>
  );
}
