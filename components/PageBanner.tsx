import Link from "next/link";

export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="page-banner">
      <div className="page-banner__inner">
        <h1 className="page-banner__title">{title}</h1>
        <nav className="page-banner__breadcrumb" aria-label="Breadcrumb">
          <Link className="page-banner__breadcrumb-link" href="/">
            Home
          </Link>
          <span className="page-banner__breadcrumb-sep">/</span>
          <span className="page-banner__breadcrumb-current">{title}</span>
        </nav>
      </div>
    </div>
  );
}
