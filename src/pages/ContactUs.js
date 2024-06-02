import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header frameFormControlDebugCommit="unset" propDebugCommit="unset" />
      <section className="background-wrapper">
        <div className="background1">
          <h1 className="heading-11">Contact us</h1>
        </div>
      </section>
      <section className="contact-us-inner">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="service-is-provided-by-unity-e-parent">
              <div className="service-is-provided">
                Service is provided by Unity eSim Connect S.a r.l.
              </div>
              <div className="grand-rue-l-4393-container">
                <p className="grand-rue">37 Grand Rue</p>
                <p className="l-4393-pontpierre">L-4393 Pontpierre</p>
                <p className="luxembourg">Luxembourg</p>
              </div>
            </div>
            <div className="should-you-have-any-questions-parent">
              <p className="should-you-have-container">
                <span>
                  <span className="should-you-have">
                    Should you have any questions about Unity eSim Connect you
                    can use the
                  </span>
                  <span className="form-below-to">
                    form below to contact our customer service team.
                  </span>
                </span>
              </p>
              <TextField
                className="input"
                placeholder={`First & Last Name`}
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(51, 153, 255, 0.8)" },
                  "& .MuiInputBase-root": {
                    height: "51.4px",
                    backgroundColor: "#fff",
                    borderRadius: "30px",
                    fontSize: "17.4px",
                  },
                  "& .MuiInputBase-input": { color: "#9a9e9e" },
                }}
              />
            </div>
          </div>
          <div className="frame-div">
            <div className="frame-wrapper1">
              <div className="frame-parent1">
                <div className="contact-us-parent">
                  <div className="contact-us1">Contact us</div>
                  <p className="tel-352-2021-container">
                    <span className="tel-352-2021">Tel +352 2021 0072</span>
                    <span className="our-customer-support">
                      Our customer support is open during business hours CET
                      (Central
                    </span>
                    <span className="european-time-time">
                      European Time) time.
                    </span>
                  </p>
                </div>
                <div className="email-parent">
                  <div className="email">Email</div>
                  <div className="link-helpmtxceu-parent">
                    <div className="link-helpmtxceu">help@Unity eSimc.eu</div>
                    <div className="link-telegram">Telegram</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-parent">
              <TextField
                className="input1"
                placeholder="Phone / Email address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(51, 153, 255, 0.8)" },
                  "& .MuiInputBase-root": {
                    height: "61.4px",
                    backgroundColor: "#fff",
                    borderRadius: "30px",
                    fontSize: "17px",
                  },
                  "& .MuiInputBase-input": { color: "#9a9e9e" },
                }}
              />
              <textarea className="textarea" rows={8} cols={27} />
              <Button
                className="button1"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#999",
                  fontSize: "18.3",
                  background: "#f5f5f5",
                  border: "#f0d35b solid 2px",
                  borderRadius: "30px",
                  "&:hover": { background: "#f5f5f5" },
                  width: 158,
                  height: 64,
                }}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer
        itemLinkContacHref="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9863"
        itemLinkContacTarget="_blank"
        propDebugCommit="unset"
        propMarginTop="unset"
      />
    </div>
  );
};

export default ContactUs;
