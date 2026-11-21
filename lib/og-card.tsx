import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

const regularFontPromise = readFile(
  join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.ttf")
);
const boldFontPromise = readFile(
  join(process.cwd(), "assets/fonts/JetBrainsMono-Bold.ttf")
);

export async function renderOgCard({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const [regularFont, boldFont] = await Promise.all([
    regularFontPromise,
    boldFontPromise,
  ]);

  const titleFontSize = title.length > 36 ? 46 : 54;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111113",
          color: "#ececef",
          padding: "64px 72px",
          fontFamily: "JetBrains Mono",
          border: "1px solid #27272a",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "9999px",
                backgroundColor: "#f43f5e",
              }}
            />
            <span
              style={{
                fontSize: "34px",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fafafa",
              }}
            >
              ojotakon.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#a1a1aa",
              border: "1px solid #27272a",
              borderRadius: "8px",
              padding: "6px 14px",
              backgroundColor: "#18181b",
            }}
          >
            {path}
          </div>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: `${titleFontSize}px`,
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "#fafafa",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: 1.55,
              color: "#a1a1aa",
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
            fontSize: "19px",
            color: "#71717a",
          }}
        >
          <span>cara takon · ojo takon, langsung AI saja</span>
          <span style={{ color: "#fafafa", fontWeight: 700 }}>ojotakon.</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        {
          name: "JetBrains Mono",
          data: regularFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "JetBrains Mono",
          data: boldFont,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
