import { ImageResponse } from "next/og";
import { PERSON_NAME } from "@/lib/site";

export const alt = `${PERSON_NAME} — Fullstack & AI Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#ecfdf3",
          background:
            "radial-gradient(circle at 80% 20%, rgba(92,255,149,0.22), transparent 32%), linear-gradient(135deg, #07110c 0%, #0d1913 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#5cff95",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              display: "flex",
              background: "#5cff95",
            }}
          />
          Priyapta Hub
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {PERSON_NAME}
          </div>
          <div
            style={{
              display: "flex",
              color: "#9bc5aa",
              fontSize: 34,
              letterSpacing: "0.02em",
            }}
          >
            Fullstack &amp; AI Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#7fa28e",
            fontSize: 22,
            letterSpacing: "0.08em",
          }}
        >
          BACKEND · WEB · AI · ROBOTICS
        </div>
      </div>
    ),
    size,
  );
}
