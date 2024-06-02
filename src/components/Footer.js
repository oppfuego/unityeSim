import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  className = "",
  itemLinkContacHref,
  itemLinkContacTarget,
  propDebugCommit,
  propMarginTop,
}) => {
  const footerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      marginTop: propMarginTop,
    };
  }, [propDebugCommit, propMarginTop]);

  return (
    <footer className={`footer ${className}`} style={footerStyle}>
      <div className="container1">
        <div className="list5">
          <div className="list-inner">
            <div className="item-link-company-informat-parent">
              <div className="item-link14">Company information</div>
              <a
                className="item-link15"
                href="https://www.figma.com/design/frPwFp4z5x6Hs15LHq3hEn?node-id=1-9414"
                target="_blank"
              >
                Conditions
              </a>
              <a className="item-link16">Contact Us</a>
            </div>
          </div>
          <div className="horizontal-divider1" />
        </div>
        <div className="unity-esim-connect-wrapper">
          <div className="unity-esim-connect">© 2024 Unity eSim Connect</div>
        </div>
        <div className="image-12-layerstyle-wrapper">
          <img
            className="image-12-layerstyle-icon"
            alt=""
            src="/image-12-layerstyle.svg"
          />
        </div>
      </div>
    </footer>
  );
};


export default Footer;
