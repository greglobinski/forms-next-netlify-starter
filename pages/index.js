import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/navigation";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

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
        <form
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          name={`A_1_MUI`}
        >
          <input type="hidden" name="form-name" value="A_1_MUI" />
          <div
            style={{ display: `flex`, flexDirection: `column`, gap: `1rem` }}
          >
            <TextField
              id="name-field-id"
              name="name-field"
              label="Name label"
              variant="outlined"
              //     required={true}
            />

            <Button type="submit" variant="contained">
              Text
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
