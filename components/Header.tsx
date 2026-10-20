"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon, SearchIcon } from "./Icons";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "State Onboarded", href: "/state-onboarded" },
  { label: "Career", href: "https://career.samarthx.ac.in/", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setSearchOpen(false);
  }

  return (
    <header className="site-header fixed inset-x-0 top-0 z-[100] w-full">
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="shrink-0">
            <Link href="/" className="block" aria-label="SamarthX home">
              <Image
                src="/images/logo.png"
                alt="SamarthX eGov"
                width={100}
                height={45}
                priority
                className="h-[45px] w-auto max-w-[100px] object-contain"
              />
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <nav className="flex items-center gap-5 lg:gap-8" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                const className = `inline-flex items-center whitespace-nowrap border-b-[3px] pb-1 text-base font-medium transition-colors duration-300 ${
                  active
                    ? "border-[var(--brand)] text-[var(--brand)]"
                    : "border-transparent text-black hover:text-[var(--brand)]"
                }`;

                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className={className}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden w-56 items-center gap-2 rounded-full bg-gray-100 px-4 py-2 lg:flex">
              <SearchIcon className="shrink-0 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                aria-label="Search"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            <a
              href="https://goa.samarthx.ac.in/auth/login-dhe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display hidden shrink-0 items-center rounded-full px-5 py-2.5 text-sm font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 md:inline-flex"
              style={{ backgroundColor: "var(--brand)" }}
            >
              Admin Login
            </a>

            <button
              type="button"
              className="text-gray-600 transition-colors hover:text-gray-900 md:hidden"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              {searchOpen ? <CloseIcon size={20} /> : <SearchIcon size={20} />}
            </button>

            <button
              type="button"
              className="text-gray-600 transition-colors hover:text-gray-900 md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      <nav
        className="border-b border-gray-200 bg-white pb-[5px] md:hidden"
        aria-label="Mobile navigation"
      >
        {(menuOpen || searchOpen) && (
          <div className="px-4 pb-4 shadow-sm">
            {searchOpen && (
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
                <SearchIcon className="shrink-0 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  autoFocus
                  className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>
            )}

            {menuOpen && (
              <div id="mobile-navigation" className="mt-2 flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  const className = `border-b border-gray-100 py-3 text-sm font-medium last:border-b-0 ${
                    active ? "text-[var(--brand)]" : "text-gray-800"
                  }`;

                  return item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.label} href={item.href} className={className}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
