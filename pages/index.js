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
          name={`A_8_CONTACT`}
        >
          <input type="hidden" name="form-name" value="A_8_CONTACT" />
          <div className="styles_field_row__r49xc">
            <div className="styles_field_col__YW0rD">
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-16ym3lh">
                <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37"
                    data-shrink="false"
                    htmlFor="first_name_oo"
                  >
                    First Name *
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input name="first_name_oo" type="text" required={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_field_col__YW0rD">
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-16ym3lh">
                <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37"
                    data-shrink="false"
                    htmlFor="last_name"
                    id="last_name-label"
                  >
                    Last Name
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input name="last_name" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_field_row__r49xc">
            <div className="styles_field_col__YW0rD">
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-16ym3lh">
                <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37"
                    data-shrink="false"
                    htmlFor="email"
                    id="email-label"
                  >
                    Email
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input name="email" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_field_row__r49xc">
            <div className="styles_field_col__YW0rD">
              <button
                className="styles_button__VMIgL tyles_theme_default__xVJ2v styles_form_submit__UpEMC"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
