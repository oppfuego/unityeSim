import Header2 from "./Header2";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`header-group ${className}`}>
      <Header2 />
      <div className="your-cart-wrapper">
        <b className="your-cart">Your Cart</b>
      </div>
    </section>
  );
};


export default FrameComponent6;
