import Footer from "./Footer";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section1 ${className}`}>
      <div className="section-inner">
        <div className="heading-3-enjoy-unlimited-in-parent">
          <div className="heading-3">
            Enjoy unlimited internet anywhere you go:
          </div>
          <div className="europe-asia-americas-container">
            <p className="europe-asia-americas">
              Europe, Asia, Americas, CIS, Africa
            </p>
            <p className="and-more">and more*</p>
          </div>
          <div className="we-cover-major">
            We cover major countries seamlessly
          </div>
          <p className="a-full-list-container">
            <span className="a-full-list-container1">
              {`*A full list of countries and regions is available on our `}
              <span className="interactive-map">interactive map</span>.
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};


export default Section;
