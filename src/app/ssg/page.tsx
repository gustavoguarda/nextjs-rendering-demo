// This page uses Incremental Static Regeneration (ISR) with `revalidate = false`,
// meaning it is generated once at build time and remains static until the next deployment.

export const revalidate = false; // Forces static generation at build time

import formatTimestamp from "@/utils/formatTimestamp";
import CurrentTime from "@/components/CurrentTime";
import Link from "next/link";

async function delay(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const SSGPage = async () => {
  await delay(2); // Simulates a build-time delay

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Static Site Generation (SSG) Page</h1>

      <p>
        <strong>🛠️ Build Timestamp (Static):</strong> {formatTimestamp()}
      </p>

      <p>
        <strong>⏰ Live Timestamp (Real-Time):</strong> <CurrentTime />
      </p>

      <p>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
};

export default SSGPage;
