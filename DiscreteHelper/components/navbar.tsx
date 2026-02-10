"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(148,163,184,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0.9rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontWeight: 800, letterSpacing: 0.2 }}>
          Discrete Math Toolkit
        </div>

        <nav style={{ display: "flex", gap: "0.75rem" }}>
          <Link
            href="/"
            style={{
              padding: "0.45rem 0.75rem",
              borderRadius: 10,
              border: "1px solid rgba(148,163,184,0.25)",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
