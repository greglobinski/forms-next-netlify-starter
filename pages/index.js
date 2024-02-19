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
        <form
          //  action="/fleet-services/commercial-fleet-leasing-finance"
          name={`A2CONTACT`}
          data-netlify="true"
          method="POST"
          // name="Pardot: Short Form Capabilities Brochure"
          data-netlify-honeypot="bot-field"
          className="styles_form_wrapper__AI73A"
        >
          <input type="hidden" name="form-name" value="A2CONTACT" />
          <div className="styles_field_row__r49xc">
            <div className="styles_field_col__YW0rD">
              <div className="MuiFormControl-root MuiFormControl-fullWidth css-16ym3lh">
                <div className="MuiFormControl-root MuiTextField-root css-i44wyl">
                  <label
                    className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-p0rm37"
                    data-shrink="false"
                    for="first_name"
                    id="first_name-label"
                  >
                    First Name
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input
                      aria-invalid="false"
                      autocomplete="first_name"
                      id="first_name"
                      name="first_name"
                      placeholder=""
                      required=""
                      type="text"
                      className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      className="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                      <legend className="css-yjsfm1">
                        <span>First Name</span>
                      </legend>
                    </fieldset>
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
                    for="last_name"
                    id="last_name-label"
                  >
                    Last Name
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input
                      aria-invalid="false"
                      autocomplete="last_name"
                      id="last_name"
                      name="last_name"
                      placeholder=""
                      required=""
                      type="text"
                      className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      className="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                      <legend className="css-yjsfm1">
                        <span>Last Name</span>
                      </legend>
                    </fieldset>
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
                    for="email"
                    id="email-label"
                  >
                    Email
                    <span
                      aria-hidden="true"
                      className="MuiFormLabel-asterisk MuiInputLabel-asterisk css-sp68t1"
                    ></span>
                  </label>
                  <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1v4ccyo">
                    <input
                      aria-invalid="false"
                      autocomplete="email"
                      id="email"
                      name="email"
                      placeholder=""
                      required=""
                      type="email"
                      className="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      className="MuiOutlinedInput-notchedOutline css-igs3ac"
                    >
                      <legend className="css-yjsfm1">
                        <span>Email</span>
                      </legend>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_field_row__r49xc">
            <div className="styles_field_col__YW0rD">
              <div className="styles_recaptcha__LLCos">
                <div>
                  <div>
                    <div
                    // style="width: 304px; height: 78px;"
                    >
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        // style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles_field_col__YW0rD">
              <button
                className="styles_button__VMIgL tyles_theme_default__xVJ2v styles_form_submit__UpEMC"
                type="submit"
                disabled=""
              >
                Submit
              </button>
            </div>
          </div>
          <div
          //</form> style="height: 0px; visibility: hidden;"
          >
            <label>
              Don't fill this out if you are human
              <input name="bot-field" id="bot-field" />
            </label>
          </div>
          <input type="hidden" name="lt_utm_source" />
          <input type="hidden" name="lt_utm_campaign" />
          <input type="hidden" name="lt_utm_medium" />
          <input type="hidden" name="lt_utm_keyword" />
          <input type="hidden" name="lt_utm_content" />
          <input type="hidden" name="lt_utm_adname" />
          <input type="hidden" name="pathname" />
          <input type="hidden" name="gaid" />
          <input type="hidden" name="pardot-endpoint" />
        </form>
      </main>

      <Footer />
    </div>
  );
}
