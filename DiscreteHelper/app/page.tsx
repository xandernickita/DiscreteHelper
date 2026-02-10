import Link from "next/link";

export default function Home() {
  const cardStyle: React.CSSProperties = {
    background: "#020617",
    padding: "1.2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,.35)",
    border: "1px solid rgba(148,163,184,0.15)",
  };

  const buttonStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "0.9rem 1rem",
    borderRadius: "10px",
    border: "none",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: 800,
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "system-ui",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div style={{ width: "420px", maxWidth: "100%" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Discrete Math Fun シ
        </h1>
        <p style={{ opacity: 0.75, marginBottom: "1.5rem" }}>
          Choose a function:
        </p>

        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={cardStyle}>
            <Link href="/prime" style={buttonStyle}>
              Prime Checker (Trial Division)
            </Link>
            <p style={{ opacity: 0.75, marginTop: "0.7rem", marginBottom: 0 }}>
              Determine whether a number is prime.
            </p>
          </div>

          <div style={cardStyle}>
            <Link href="/combinations" style={buttonStyle}>
              Combinations (All Subsets)
            </Link>
            <p style={{ opacity: 0.75, marginTop: "0.7rem", marginBottom: 0 }}>
              List every subset of {"{1,2,...,n}"}.
            </p>
          </div>

          <div style={cardStyle}>
            <Link href="/permutations" style={buttonStyle}>
              Permutations (Lexicographic)
            </Link>
            <p style={{ opacity: 0.75, marginTop: "0.7rem", marginBottom: 0 }}>
              List all permutations in lexicographic order.
            </p>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 w-full p-6 text-center text-sm opacity-70">
        © 2026 Alexander Nickita
      </footer>
    </main>
  );
}
