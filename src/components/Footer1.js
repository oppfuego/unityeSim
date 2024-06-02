import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer1 ${className}`}>
      <div className="container2">
        <div className="list8">
          <div className="list-child">
            <div className="item-link-company-informat-group">
              <div className="item-link24">Company information</div>
              <a
                className="item-link25"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9414"
                target="_blank"
              >
                Conditions
              </a>
              <a
                className="item-link26"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9863"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="horizontal-divider2" />
        </div>
        <div className="unity-esim-connect-container">
          <div className="unity-esim-connect1">© 2024 Unity eSim Connect</div>
        </div>
        <div className="image-12-layerstyle-container">
          <img
            className="image-12-layerstyle-icon1"
            loading="lazy"
            alt=""
            src="/image-12-layerstyle.svg"
          />
        </div>
      </div>
    </footer>
  );
};


export default Footer1;
