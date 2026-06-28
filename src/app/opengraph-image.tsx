import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tachyon — SAT tutoring in Cambridge, MA";
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
          background: "#F7F5F0",
          padding: "72px",
          fontFamily: "Helvetica, Arial, sans-serif",
          // faint grid
          backgroundImage:
            "linear-gradient(to right, rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 70, height: 4, background: "#0A0A0A", borderRadius: 4 }} />
              <div style={{ width: 44, height: 18, borderRadius: 9, background: "#1E36E0" }} />
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              fontWeight: 700,
              color: "#0A0A0A",
              fontFamily: "monospace",
            }}
          >
            TACHYON
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 96, fontWeight: 700, textTransform: "uppercase", color: "#0A0A0A", lineHeight: 0.95, letterSpacing: -4 }}>
            Human expertise,
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, textTransform: "uppercase", color: "#1E36E0", lineHeight: 0.95, letterSpacing: -4 }}>
            amplified by AI.
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#33322E", fontFamily: "monospace", letterSpacing: 1 }}>
          SAT tutoring · Cambridge, MA · online or in person
        </div>
      </div>
    ),
    { ...size }
  );
}
