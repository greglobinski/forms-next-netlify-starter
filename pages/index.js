import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const forms = Array.apply(null, { length: 1 }).map(Number.call, Number);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert(`Sent`))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ display: `flex`, gap: `1rem` }}>
        <Header title="Welcome to my app!" />
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        {forms.map((item, idx) => (
          <form
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            name={`ACONTACT`}
          >
            <input type="hidden" name="form-name" value="ACONTACT" />
            <p>
              <label>
                Your Name:{" "}
                <input
                  type="text"
                  name="name"
                  className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37"
                />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="text" name="email" />
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
