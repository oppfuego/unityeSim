import Footer from "../components/Footer";
import "./Conditions.css";

const Conditions = () => {
  return (
    <div className="conditions">
      <section className="container">
        <Header frameFormControlDebugCommit="unset" propDebugCommit="unset" />
        <div className="content-container">
          <div className="content-wrapper">
            <div className="heading-1-conditions-parent">
              <h1 className="heading-1">Conditions</h1>
              <div className="conditions-content">
                <div className="legal-links-container">
                  <div className="item-strong-link">
                    <a
                      className="terms-and-conditions"
                      href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-10328"
                      target="_blank"
                    >
                      Terms and Conditions
                    </a>
                  </div>
                  <div className="item-strong-link1">
                    <a
                      className="description-of-services"
                      href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-11089"
                      target="_blank"
                    >
                      Description of Services
                    </a>
                  </div>
                  <div className="item-strong-link2">
                    <b className="privacy-policy">Privacy Policy</b>
                  </div>
                  <div className="item-strong-link3">
                    <b className="fiches-signaletique">Fiches Signaletique</b>
                  </div>
                  <div className="item-strong-link4">
                    <b className="contract-summary">Contract summary</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-container">
              <div className="horizontal-divider" />
            </div>
          </div>
        </div>
      </section>
      <Footer
        itemLinkContacHref="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9863"
        itemLinkContacTarget="_blank"
        propDebugCommit="unset"
        propMarginTop="-184px"
      />
    </div>
  );
};

export default Conditions;
