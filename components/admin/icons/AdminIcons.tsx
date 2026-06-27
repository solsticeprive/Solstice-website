type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.3" />
      <rect x="13" y="3.5" width="7.5" height="4.5" rx="1.3" />
      <rect x="13" y="11" width="7.5" height="9.5" rx="1.3" />
      <rect x="3.5" y="14" width="7.5" height="6.5" rx="1.3" />
    </svg>
  );
}

export function BookingsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.8" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3.2M16 3v3.2" />
      <path d="M7.5 13h3M7.5 16.3h3M13.5 13h3M13.5 16.3h3" />
    </svg>
  );
}

export function TripsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" />
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
    </svg>
  );
}

export function LogoutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
      <path d="M15 16l4-4-4-4" />
      <path d="M19 12H9" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function WaitlistIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M16 3.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
      <path d="M9 21v-1.5A5.5 5.5 0 0 1 14.5 14H17a5.5 5.5 0 0 1 5 3" />
      <path d="M3 21v-1.2A4.8 4.8 0 0 1 7.8 15h.4" />
      <circle cx="8" cy="8.5" r="3.3" />
    </svg>
  );
}

export function RevenueIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5v19" />
      <path d="M16.8 6.8c0-1.8-2.1-3.3-4.8-3.3S7.2 5 7.2 6.8s2.1 2.7 4.8 3.2c2.7.5 4.8 1.4 4.8 3.2 0 1.8-2.1 3.3-4.8 3.3s-4.8-1.5-4.8-3.3" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.3 1.9" />
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg {...base} width={18} height={18} className={className}>
      <path d="M2.5 12S5.8 5.5 12 5.5 21.5 12 21.5 12 18.2 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function EyeOffIcon({ className }: IconProps) {
  return (
    <svg {...base} width={18} height={18} className={className}>
      <path d="M2.5 12S5.8 5.5 12 5.5c2.1 0 3.7.62 5 1.5M21.5 12S18.2 18.5 12 18.5c-2.1 0-3.7-.62-5-1.5" />
      <path d="M9.6 9.6a2.8 2.8 0 0 0 3.9 3.9" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
