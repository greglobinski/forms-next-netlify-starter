import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  const forms = Array.apply(null, { length: 25 }).map(Number.call, Number);

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
          <form name={`NEW-form-${idx + 1}`} method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]">
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          // <form
          //   class="form"
          //   method="POST"
          //   name={`form-${idx + 1}`}
          //   action="/success"
          //   data-netlify="true"
          //   style={{ display: `flex`, flexGap: `1rem` }}
          // >
          //   {idx % 2 === 0 && (
          //     <input
          //       type="hidden"
          //       name="subject"
          //       value="Sales inquiry from mysitename.netlify.app"
          //     />
          //   )}

          //   <input
          //     name="name"
          //     style={{ fontSize: `1rem`, padding: `0.5rem` }}
          //   />
          //   <button>Save</button>
          // </form>
        ))}
      </main>

      <Footer />
    </div>
  );
}
