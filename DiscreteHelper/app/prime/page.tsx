"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

export default function PrimePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function handleCheck() {
    if (input.trim() === "") return setResult("Please enter a number.");

    const num = Number(input);

    if (Number.isNaN(num)) return setResult("Input must be a number.");
    if (!Number.isInteger(num)) return setResult("Please enter an integer.");
    if (num < 1) return setResult("Please enter a positive integer (> 0).");

    setResult(isPrime(num) ? `${num} is PRIME` : `${num} is NOT prime`);
  }

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 64px)",
          background: "#0f172a",
          color: "white",
          fontFamily: "system-ui",
          display: "flex",
          justifyContent: "center",
          padding: "2rem 1rem",
        }}
      >
        <div
          style={{
            width: "420px",
            maxWidth: "100%",
            background: "#020617",
            padding: "2rem",
            borderRadius: 12,
            boxShadow: "0 10px 25px rgba(0,0,0,.4)",
            border: "1px solid rgba(148,163,184,0.15)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            Prime Checker
          </h1>
          <p style={{ opacity: 0.75, marginBottom: "1.25rem" }}>
            Trial Division up to √n
          </p>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a positive integer"
            style={{
              width: "100%",
              padding: "0.6rem",
              borderRadius: 10,
              border: "none",
              outline: "none",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          />

          <button
            onClick={handleCheck}
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: 10,
              border: "none",
              background: "#38bdf8",
              color: "#020617",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Check Prime
          </button>

          {result && (
            <div style={{ marginTop: "1.2rem", fontSize: "1.1rem" }}>
              {result}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
