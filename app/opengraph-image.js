import { ImageResponse } from "next/og";

export const alt = "Srikar Nadella, software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview card: the name, one line, and the rings from the hero
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 90px", background: "#f8f8f8", position: "relative" }}>
        {[300, 460, 640].map((d) => (
          <div key={d} style={{ position: "absolute", right: 150 - d / 2 + 150, top: 315 - d / 2, width: d, height: d, borderRadius: "50%", border: "2px solid #c9cfd4", display: "flex" }} />
        ))}
        <div style={{ fontSize: 104, fontWeight: 700, color: "#0b0b0c", letterSpacing: -3, display: "flex" }}>Srikar Nadella</div>
        <div style={{ marginTop: 18, fontSize: 38, color: "#3f6874", display: "flex" }}>Software engineer. CS and Business at UVA.</div>
        <div style={{ marginTop: 10, fontSize: 30, color: "#55606e", display: "flex" }}>F1 telemetry, market data and ML.</div>
      </div>
    ),
    size
  );
}
