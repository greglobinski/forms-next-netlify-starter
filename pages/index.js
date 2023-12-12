import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  const forms = Array.apply(null, { length: 130 }).map(Number.call, Number);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: `flex`, gap: `1rem` }}>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {forms.map((item, idx) => (
          <form
            class="form"
            method="POST"
            name={`form-${idx + 1}`}
            action="/success"
            data-netlify="true"
            style={{ display: `flex`, flexGap: `1rem` }}
          >
            <input
              name="name"
              style={{ fontSize: `1rem`, padding: `0.5rem` }}
            />
            <button>Save</button>
          </form>
        ))}
      </main>

      <Footer />
    </div>
  );
}
