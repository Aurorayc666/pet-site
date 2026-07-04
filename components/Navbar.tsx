"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Our Story", href: "#our-story" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.2em] text-foreground"
        >
          LATTE &amp; CO.
        </Link>

        <ul className="hidden items-center gap-10 text-sm tracking-wide text-foreground/80 sm:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleCart}
          aria-label="View cart"
          className="relative text-foreground transition-colors hover:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M6 6h15l-1.5 9h-12z" />
            <path d="M6 6 5 3H2" />
            <circle cx="9.5" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-medium text-background">
              {itemCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
