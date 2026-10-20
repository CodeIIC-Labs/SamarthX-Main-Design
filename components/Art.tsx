type ArtProps = {
  size?: number;
  className?: string;
};

function base({ size = 32, className }: ArtProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true,
    focusable: "false" as const,
  };
}

export function OneLoginArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <rect x="5" y="4" width="22" height="32" rx="4.5" fill="#0D43A7" />
      <rect x="9" y="8" width="14" height="24" rx="2.6" fill="#FFFFFF" />
      <circle cx="15" cy="19" r="2.6" fill="#0D43A7" />
      <path
        d="M15 21.4V26"
        stroke="#0D43A7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="10" r="4.6" fill="#FFAA01" />
      <path
        d="M33.3 13.3 37 17M35.2 15.2 36.8 13.6"
        stroke="#FFAA01"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DashboardArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <rect
        x="3.5"
        y="6.5"
        width="33"
        height="27"
        rx="5"
        fill="#FFFFFF"
        stroke="#0D43A7"
        strokeWidth="2.4"
      />
      <path d="M3.5 14.5h33" stroke="#C7DAF6" strokeWidth="2" />
      <circle cx="8.6" cy="10.5" r="1.3" fill="#1A73E9" />
      <circle cx="12.6" cy="10.5" r="1.3" fill="#FFAA01" />
      <circle cx="16.6" cy="10.5" r="1.3" fill="#1A73E9" />
      <rect x="8.5" y="19" width="5.5" height="9.5" rx="2" fill="#0D43A7" />
      <rect x="17.2" y="22" width="5.5" height="6.5" rx="2" fill="#FFB733" />
      <rect x="25.9" y="17.5" width="5.5" height="11" rx="2" fill="#1A73E9" />
    </svg>
  );
}

export function RecordsArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <rect x="11" y="11" width="21" height="25" rx="3.5" fill="#C7DAF6" />
      <rect
        x="7.5"
        y="7"
        width="21"
        height="25"
        rx="3.5"
        fill="#FFFFFF"
        stroke="#0D43A7"
        strokeWidth="2.2"
      />
      <path
        d="M12 13h12M12 17.2h12M12 21.4h7.5"
        stroke="#82A9E4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="28" cy="27.5" r="5.4" fill="#FFAA01" />
      <path
        d="M25.4 27.5 27.4 29.5 30.8 25.8"
        stroke="#FFFFFF"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AuditArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M20 3.5 33 9v9.5c0 8.6-5.5 14.4-13 18.3-7.5-3.9-13-9.7-13-18.3V9l13-5.5Z"
        fill="#0D43A7"
      />
      <path
        d="M14 20.2 18.3 24.5 26.5 15.8"
        stroke="#FFFFFF"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33.5" cy="7.5" r="2.6" fill="#FFAA01" />
    </svg>
  );
}

export function GrowthArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="26.5" width="9" height="9" rx="2.4" fill="#C7DAF6" />
      <rect x="15.5" y="21" width="9" height="14.5" rx="2.4" fill="#4C86D9" />
      <rect x="27" y="14.5" width="9" height="21" rx="2.4" fill="#0D43A7" />
      <path
        d="M8 21c6-1 12-5 18-11"
        stroke="#FFB733"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M22 8.5 27.5 8 27 13.5"
        stroke="#FFB733"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GovernanceArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 4 4.5 12.5h31L20 4Z" fill="#0D43A7" />
      <rect x="7" y="15" width="4.2" height="12" rx="1.4" fill="#82A9E4" />
      <rect x="14.3" y="15" width="4.2" height="12" rx="1.4" fill="#82A9E4" />
      <rect x="21.6" y="15" width="4.2" height="12" rx="1.4" fill="#82A9E4" />
      <rect x="28.9" y="15" width="4.2" height="12" rx="1.4" fill="#82A9E4" />
      <rect x="4.5" y="29" width="31" height="4.4" rx="2.2" fill="#0D43A7" />
      <circle cx="33.5" cy="6.5" r="3" fill="#FFAA01" />
    </svg>
  );
}

export function AdmissionsArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <circle cx="16.5" cy="13.5" r="6.6" fill="#FFB733" />
      <path
        d="M4.5 33c0-7 5.4-10.6 12-10.6S28.5 26 28.5 33"
        fill="#0D43A7"
      />
      <circle cx="30.5" cy="11" r="6.2" fill="#1A73E9" />
      <path
        d="M30.5 7.6v6.8M27.1 11h6.8"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeopleArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <circle cx="13.5" cy="14.5" r="5.8" fill="#0D43A7" />
      <path
        d="M3.5 32.5c0-6.2 4.6-9.7 10-9.7s10 3.5 10 9.7"
        fill="#82A9E4"
      />
      <circle cx="28.5" cy="13" r="4.8" fill="#FFB733" />
      <path
        d="M22 31.5c0-5.4 3.9-8.4 8-8.4s8 3 8 8.4"
        fill="#FFD98A"
      />
    </svg>
  );
}

export function AcademicsArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M20 12.5C16.2 9.6 11 9 5.5 10.3v19.4c5.5-1.3 10.7-.7 14.5 2.2 3.8-2.9 9-3.5 14.5-2.2V10.3C29 9 23.8 9.6 20 12.5Z"
        fill="#0D43A7"
      />
      <path d="M20 12.5v19.4" stroke="#FFFFFF" strokeWidth="2" />
      <path
        d="M9.5 15.8c2.8-.4 5.6.1 7.5 1.4M9.5 21.3c2.8-.4 5.6.1 7.5 1.4M30.5 15.8c-2.8-.4-5.6.1-7.5 1.4M30.5 21.3c-2.8-.4-5.6.1-7.5 1.4"
        stroke="#C7DAF6"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M31.5 5.5l1.2 3.3 3.3 1.2-3.3 1.2-1.2 3.3-1.2-3.3-3.3-1.2 3.3-1.2 1.2-3.3Z"
        fill="#FFAA01"
      />
    </svg>
  );
}

export function WalletArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <rect x="4.5" y="12.5" width="28.5" height="21" rx="4.5" fill="#0D43A7" />
      <path d="M4.5 18.5h28.5" stroke="#08307E" strokeWidth="2" />
      <rect x="9" y="22" width="9.5" height="5.5" rx="2.2" fill="#C7DAF6" />
      <rect x="23.5" y="21" width="10" height="8" rx="2.6" fill="#FFAA01" />
      <circle cx="28.5" cy="25" r="1.5" fill="#8A5A00" />
      <circle cx="32" cy="7.5" r="5" fill="#FFB733" />
      <path
        d="M32 5.6v3.8M30.1 7.5h3.8"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SecurityArt(props: ArtProps) {
  return (
    <svg {...base(props)}>
      <path
        d="M13 17.5v-4a7 7 0 0 1 14 0v4"
        stroke="#82A9E4"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect x="6.5" y="17.5" width="27" height="19" rx="5" fill="#0D43A7" />
      <circle cx="20" cy="25" r="3.1" fill="#FFFFFF" />
      <path
        d="M20 27.4v3.4"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="32.5" cy="8.5" r="2.8" fill="#FFAA01" />
    </svg>
  );
}

export function Sparkle(props: ArtProps) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2c1.3 5.6 4.4 8.7 10 10-5.6 1.3-8.7 4.4-10 10-1.3-5.6-4.4-8.7-10-10 5.6-1.3 8.7-4.4 10-10Z" />
    </svg>
  );
}

export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 20C13 16 25 11 39 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M31 4l9 1-2 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BulbDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 3.5a11 11 0 0 1 6.4 19.9c-1 .8-1.6 1.7-1.8 2.9h-9.2c-.2-1.2-.8-2.1-1.8-2.9A11 11 0 0 1 16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 30.5h7M14 34.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CapDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 11.5 20 3.5l18 8-18 8-18-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.5V23c0 2.2 4.5 4 10 4s10-1.8 10-4v-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M36.5 13v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
