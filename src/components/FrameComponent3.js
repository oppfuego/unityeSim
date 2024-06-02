import Header2 from "./Header2";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header2 />
      <div className="checkout-parent">
        <b className="checkout1">Checkout</b>
        <div className="indulge-your-furry1">
          we look forward to many more moments of happiness and connection in
          the pawsome journey ahead.
        </div>
      </div>
    </section>
  );
};


export default FrameComponent3;
