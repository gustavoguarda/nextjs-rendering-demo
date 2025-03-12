import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Home</h1>
      <p>Choose one of the options:</p>
      <ul style={{ marginTop: "10px" }}>
        <li>
          <Link href="/ssg">Access a build-generated page (SSG)</Link>
        </li>
        <li>
          <Link href="/ssr">Access a server-rendered page (SSR)</Link>
        </li>
        <li>
          <Link href="/isr">
            Access an incrementally static regenerated page (ISR)
          </Link>
        </li>
      </ul>
    </div>
  );
}
