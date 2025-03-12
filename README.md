# 🚀 Next.js Rendering Strategies - SSG, SSR & ISR

This project demonstrates the three main **rendering strategies** available in Next.js:

1. **SSR (Server-Side Rendering)**
2. **SSG (Static Site Generation)**
3. **ISR (Incremental Static Regeneration)**

Each page displays:

- A **static timestamp** (when the page was generated).
- A **real-time updating timestamp** (to demonstrate client-side updates).

## 🎥 **Visual Demonstration**

<div align="center">
  <img src="./public/nextjs-rendering-demo.gif" alt="Demonstration of Next.js Functionalities" />
</div>

---

## 📌 **Project Setup**

To get started, clone this repository and install dependencies:

```sh
git clone git@github.com:gustavoguarda/nextjs-rendering-demo.git
cd nextjs-rendering-demo
npm install
```

---

## 🚀 **Running the Project**

### 🔧 **Development Mode** (Behaves like SSR for testing)

```sh
npm run dev
```

- Open `http://localhost:3000/ssg`, `http://localhost:3000/ssr`, or `http://localhost:3000/isr` to see each rendering type.
- In dev mode, **SSG and ISR behave like SSR** (pages regenerate on each request).

### 🔥 **Production Mode (Correct ISR & SSG Behavior)**

```sh
npm run build
npm start
```

- Open `http://localhost:3000/isr` and refresh the page.
- The **timestamp will remain static** for **60 seconds** before regenerating.

---

## 📄 **Pages & Their Rendering Strategies**

### 🟢 **1. Static Site Generation (SSG)**

📂 **`/ssg`**

- The page is **generated at build time** and does **not change until the next deployment**.
- **Fastest performance** because it's pure static HTML.
- **Example Use Cases**: Blogs, documentation, product pages.

```jsx
export const revalidate = false; // Fully static
```

### 🔵 **2. Server-Side Rendering (SSR)**

📂 **`/ssr`**

- The page is **re-generated on every request**.
- Ensures fresh content but has **higher server load**.
- **Example Use Cases**: Real-time dashboards, personalized content.

```jsx
export const dynamic = "force-dynamic"; // Forces SSR
```

### 🟠 **3. Incremental Static Regeneration (ISR)**

📂 **`/isr`**

- The page is **generated at build time**, but **can be updated periodically** without a full rebuild.
- **Best of both worlds:** Static speed + periodic updates.
- **Example Use Cases**: E-commerce product pages, pricing tables, blogs with frequent updates.

```jsx
export const revalidate = 10; // Regenerates every 10 seconds
```

---

## 📌 **How to Test Rendering Differences**

| Feature         | **SSG**             | **SSR**         | **ISR**                               |
| --------------- | ------------------- | --------------- | ------------------------------------- |
| **Generation**  | Build time          | Every request   | Build time + updates                  |
| **Performance** | ⚡ Fastest          | 🏎️ Slower       | ⚡ Fast, updates periodically         |
| **Fresh Data**  | ❌ Only on redeploy | ✅ Always fresh | ✅ Updated every `revalidate` seconds |

---

## 🎯 **Demo Features**

Each page displays:

- **🛠️ A static timestamp** → Shows when the page was generated.
- **⏰ A real-time timestamp** → Shows client-side updates.

---

## 🔗 **Useful Next.js Links**

- [Next.js Official Documentation](https://nextjs.org/docs)
- [Data Fetching in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching)
