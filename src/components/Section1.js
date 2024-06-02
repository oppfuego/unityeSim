import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>

      <div className="planet-optsvg-fill" />
      <div className="internet-all-over-the-world-wrapper">
        <h1 className="internet-all-over-container">
          <p className="internet-all-over">Internet all over</p>
          <p className="the-world">the world —</p>
          <p className="with-one-esim">with one eSIM</p>
        </h1>
      </div>
    </section>
  );
};


export default Section1;
