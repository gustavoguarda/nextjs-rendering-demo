export const dynamic = "force-dynamic"; // Ensures SSR behavior (forces regeneration on every request)

import formatTimestamp from "@/utils/formatTimestamp";
import CurrentTime from "@/components/CurrentTime";
import Link from "next/link";

// Simulates server-side delay (e.g., fetching data from an API)
async function delay(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const SSRPage = async () => {
  await delay(2); // Introduces a 2-second delay to simulate server processing

  // Captures the exact timestamp when the server rendered the page
  const serverRenderTime = new Date().toISOString();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Server-Side Rendering (SSR) Page</h1>

      <p>
        <strong>🖥️ Server Render Timestamp (Static for Each Request):</strong>{" "}
        {formatTimestamp(serverRenderTime)}
      </p>

      <p>
        <strong>⏰ Live Timestamp (Real-Time Update):</strong> <CurrentTime />
      </p>

      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
};

export default SSRPage;
