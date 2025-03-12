export const revalidate = 10; // Regenerates the page every 10 seconds

import formatTimestamp from "@/utils/formatTimestamp";
import CurrentTime from "@/components/CurrentTime";
import Link from "next/link";

async function delay(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const ISRPage = async () => {
  await delay(2); // Simulating processing delay

  const buildTime = new Date().toISOString(); // Capturing ISR generation timestamp

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Incremental Static Regeneration (ISR) Page</h1>

      <p>
        <strong>📌 Last Regeneration Timestamp (Static for 60s):</strong>
        {formatTimestamp(buildTime)}
      </p>

      <p>
        <strong>⏰ Live Timestamp (Real-Time Update):</strong>
        <CurrentTime />
      </p>

      <p>
        <em>
          🔄 This page will regenerate in the background every 10 seconds.
        </em>
      </p>

      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
};

export default ISRPage;
