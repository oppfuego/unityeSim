import { Button } from "@mui/material";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-parent6 ${className}`}>
      <div className="header-container">
        <div className="header7">
          <div className="header-child" />
          <div className="product-wrapper">
            <div className="product">Product</div>
          </div>
          <div className="price-wrapper">
            <div className="price">Price</div>
          </div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        <FrameComponent5
          frame1000006755="/frame-1000006755@2x.png"
          food="Food"
        />
        <FrameComponent5
          frame1000006755="/frame-1000006755-1@2x.png"
          food="Car"
        />
        <FrameComponent5
          frame1000006755="/frame-1000006755-2@2x.png"
          food="Travels"
        />
        <div className="line-parent">
          <div className="frame-inner" />
          <div className="button-group">
            <Button
              className="button8"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#010007",
                fontSize: "16",
                borderColor: "#010007",
                borderRadius: "4px",
                "&:hover": { borderColor: "#010007" },
                width: 123,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button9"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#312d2d",
                borderRadius: "4px",
                "&:hover": { background: "#312d2d" },
                width: 127,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="checkout-details3">
        <div className="header-frame">
          <Button
            className="header8"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#000",
              borderRadius: "5px",
              "&:hover": { background: "#000" },
            }}
          >
            Checkout Details
          </Button>
        </div>
        <div className="checkout-details-child">
          <div className="cart-subtotal-parent">
            <b className="cart-subtotal1">Cart Subtotal</b>
            <b className="b2">$360.00</b>
          </div>
        </div>
        <div className="checkout-details-inner1">
          <div className="frame-parent7">
            <div className="shipping-handling-parent">
              <b className="shipping-handling1">{`Shipping & Handling`}</b>
              <b className="other-taxes1">Other Taxes</b>
            </div>
            <div className="parent2">
              <b className="b3">$0.00</b>
              <b className="b4">$0.00</b>
            </div>
          </div>
        </div>
        <div className="checkout-details-inner2">
          <div className="line-div" />
        </div>
        <div className="checkout-details-inner3">
          <div className="grand-total-group">
            <b className="grand-total1">Grand Total</b>
            <b className="b5">$360.00</b>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent4;
