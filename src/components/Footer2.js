import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="container2">
        <div className="list8">
          <div className="list-inner1">
            <div className="item-link-company-informat-container">
              <div className="item-link27">Company information</div>
              <a
                className="item-link28"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9414"
                target="_blank"
              >
                Conditions
              </a>
              <a
                className="item-link29"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9863"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="horizontal-divider5" />
        </div>
        <div className="unity-esim-connect-wrapper1">
          <div className="unity-esim-connect5">© 2024 Unity eSim Connect</div>
        </div>
        <div className="image-12-layerstyle-frame">
          <img
            className="image-12-layerstyle-icon2"
            loading="lazy"
            alt=""
            src="/image-12-layerstyle.svg"
          />
        </div>
      </div>
    </footer>
  );
};


export default Footer2;
