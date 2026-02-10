"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/navbar";

const MAX_N = 9;

export default function PermutationsPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [perms, setPerms] = useState<number[][]>([]);

  const countText = useMemo(() => {
    if (!perms.length) return null;
    return `Generated ${perms.length.toLocaleString()} permutations.`;
  }, [perms]);

  function parsePositiveInt(raw: string): { ok: true; n: number } | { ok: false; msg: string } {
    if (raw.trim() === "") return { ok: false, msg: "Please enter a number." };
    const num = Number(raw);
    if (Number.isNaN(num)) return { ok: false, msg: "Input must be a number." };
    if (!Number.isInteger(num)) return { ok: false, msg: "Please enter an integer." };
    if (num < 1) return { ok: false, msg: "Please enter a positive integer (> 0)." };
    return { ok: true, n: num };
  }

  function nextPermutation(a: number[]): boolean {
    // Finds next lexicographic permutation in-place.
    // Returns false if already at last permutation.
    let i = a.length - 2;
    while (i >= 0 && a[i] >= a[i + 1]) i--;
    if (i < 0) return false;

    let j = a.length - 1;
    while (a[j] <= a[i]) j--;

    [a[i], a[j]] = [a[j], a[i]];

    // reverse suffix
    let l = i + 1,
      r = a.length - 1;
    while (l < r) {
      [a[l], a[r]] = [a[r], a[l]];
      l++;
      r--;
    }
    return true;
  }

  function handleGenerate() {
    setError(null);
    setPerms([]);

    const parsed = parsePositiveInt(input);
    if (!parsed.ok) return setError(parsed.msg);

    const n = parsed.n;
    if (n > MAX_N) {
      return setError(
        `n is too large for a demo. Please use n ≤ ${MAX_N}.`
      );
    }

    const a = Array.from({ length: n }, (_, i) => i + 1);
    const out: number[][] = [a.slice()];

    while (nextPermutation(a)) {
      out.push(a.slice());
    }

    setPerms(out);
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
          padding: "2rem 1rem",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h1 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            Permutations of {"{1,2,...,n}"} (Lexicographic)
          </h1>
          <p style={{ opacity: 0.75, marginBottom: "1.25rem" }}>
            Generates permutations in lexicographic order using next-permutation.
          </p>

          <div
            style={{
              background: "#020617",
              border: "1px solid rgba(148,163,184,0.15)",
              borderRadius: 12,
              padding: "1rem",
              boxShadow: "0 10px 25px rgba(0,0,0,.35)",
              display: "grid",
              gap: "0.75rem",
              maxWidth: 560,
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter n (max ${MAX_N})`}
              style={{
                width: "100%",
                padding: "0.7rem",
                borderRadius: 10,
                border: "none",
                outline: "none",
                fontSize: "1rem",
              }}
            />

            <button
              onClick={handleGenerate}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: 10,
                border: "none",
                background: "#38bdf8",
                color: "#020617",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Generate Permutations
            </button>

            {error && <div style={{ color: "#fca5a5", fontWeight: 700 }}>{error}</div>}
            {countText && <div style={{ opacity: 0.85 }}>{countText}</div>}
          </div>

          {perms.length > 0 && (
            <div
              style={{
                marginTop: "1.25rem",
                background: "#020617",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: 12,
                padding: "1rem",
                boxShadow: "0 10px 25px rgba(0,0,0,.35)",
                maxHeight: "55vh",
                overflow: "auto",
              }}
            >
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>
                {perms.map((p) => `(${p.join(", ")})`).join("\n")}
              </pre>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
