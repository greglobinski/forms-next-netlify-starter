import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: `grid`, gap: `1rem` }}>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <form
          class="form"
          method="POST"
          name="contact-1"
          action="/success"
          data-netlify="true"
          style={{ display: `flex`, flexGap: `1rem` }}
        >
          <input name="name" style={{ fontSize: `1rem`, padding: `0.5rem` }} />
          <button>Save</button>
        </form>

        <form
          class="form"
          method="POST"
          name="contact-2"
          action="/success"
          data-netlify="true"
          style={{ display: `flex`, flexGap: `1rem` }}
        >
          <input name="name" style={{ fontSize: `1rem`, padding: `0.5rem` }} />
          <button>Save</button>
        </form>

        <form
          class="form"
          method="POST"
          name="contact-3"
          action="/success"
          data-netlify="true"
          style={{ display: `flex`, flexGap: `1rem` }}
        >
          <input name="name" style={{ fontSize: `1rem`, padding: `0.5rem` }} />
          <button>Save</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
