import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "School of Athens — one-on-one SAT tutoring in Cambridge, MA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ECE6D6",
          padding: "72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          // faint grid, echoing the site's graph-paper motif
          backgroundImage:
            "linear-gradient(to right, rgba(36,27,18,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,27,18,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            fontWeight: 700,
            color: "#241B12",
            textTransform: "uppercase",
          }}
        >
          School of Athens
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 100, fontWeight: 700, color: "#241B12", lineHeight: 0.98, letterSpacing: -3 }}>
            Two 1560s,
          </div>
          <div style={{ fontSize: 100, fontWeight: 700, color: "#B23A22", lineHeight: 0.98, letterSpacing: -3 }}>
            in your corner.
          </div>
        </div>

        <div style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: 24, color: "#3E3122", letterSpacing: 1 }}>
          Cambridge Rindge &amp; Latin tutors · digital SAT prep · Cambridge, MA
        </div>
      </div>
    ),
    { ...size }
  );
}
