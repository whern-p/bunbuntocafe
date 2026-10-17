import { ImageResponse } from "next/og";

// รูปตัวอย่างตอนแชร์ลิงก์ลง LINE / Facebook
export const alt = "Bunbun — fresh bakery for cafés";
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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#fffaf1",
          color: "#4a2f1d",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -2 }}>Bunbun</div>
          <div style={{ fontSize: 44, color: "#c8602a", marginTop: 8 }}>Fresh bakery for cafés</div>
          <div style={{ fontSize: 32, color: "#6d7a3e", marginTop: 24 }}>Croissants · Bread · Baked daily</div>
        </div>
        <div
          style={{
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: "#f7e7bf",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="320" height="224" viewBox="0 0 200 140">
            <g stroke="#b06a2c" strokeWidth="3" strokeLinejoin="round">
              <ellipse cx="38" cy="96" rx="15" ry="21" transform="rotate(-50 38 96)" fill="#d89443" />
              <ellipse cx="162" cy="96" rx="15" ry="21" transform="rotate(50 162 96)" fill="#d89443" />
              <ellipse cx="64" cy="80" rx="23" ry="32" transform="rotate(-28 64 80)" fill="#e0a458" />
              <ellipse cx="136" cy="80" rx="23" ry="32" transform="rotate(28 136 80)" fill="#e0a458" />
              <ellipse cx="100" cy="70" rx="31" ry="40" fill="#e9b36a" />
            </g>
          </svg>
        </div>
      </div>
    ),
    size,
  );
}
