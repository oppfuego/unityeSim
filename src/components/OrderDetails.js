import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./OrderDetails.css";

const OrderDetails = ({ className = "" }) => {
  return (
    <div className={`order-details ${className}`}>
      <div className="checkout-details">
        <div className="header-wrapper">
          <Button
            className="header4"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#312d2d",
              borderRadius: "5px",
              "&:hover": { background: "#312d2d" },
            }}
          >
            Checkout Details
          </Button>
        </div>
        <div className="subtotal-total-labels-wrapper">
          <div className="subtotal-total-labels">
            <div className="cart-subtotal">Cart Subtotal</div>
            <div className="subtotal-placeholder">$360.00</div>
          </div>
        </div>
        <div className="shipping-labels-wrapper">
          <div className="shipping-labels">
            <div className="shipping-tax-labels">
              <div className="shipping-handling">{`Shipping & Handling`}</div>
              <div className="other-taxes">Other Taxes</div>
            </div>
            <div className="shipping-tax-labels1">
              <div className="div">$0.00</div>
              <div className="div1">$0.00</div>
            </div>
          </div>
        </div>
        <div className="order-details-divider">
          <div className="order-details-divider-child" />
        </div>
        <div className="checkout-details-inner">
          <div className="grand-total-parent">
            <div className="grand-total">Grand Total</div>
            <div className="div2">$360.00</div>
          </div>
        </div>
      </div>
      <div className="transfer-options">
        <TextField
          className="header5"
          placeholder="Transfer Options"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#312d2d",
              borderRadius: "5px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
        <div className="checkout-details1">
          <div className="logos-block">
            <div className="block-13">
              <div className="logo-block">
                <img
                  className="image-1-icon"
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="bank-transfer">
                <p className="bank">Bank</p>
                <p className="transfer">Transfer</p>
              </div>
            </div>
            <div className="block-25">
              <div className="logo-block1">
                <img
                  className="image-2-icon"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="google-pay">
                <p className="google">Google</p>
                <p className="pay">Pay</p>
              </div>
            </div>
            <div className="block-3">
              <div className="logo-block2">
                <img
                  className="image-3-icon"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="apple-pay">
                <p className="apple">Apple</p>
                <p className="pay1">Pay</p>
              </div>
            </div>
            <div className="block-4">
              <div className="logo-block3">
                <img
                  className="image-4-icon"
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="paypal">PayPal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout3">
        <TextField
          className="header6"
          placeholder="Checkout"
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "54px",
              backgroundColor: "#312d2d",
              borderRadius: "5px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { color: "#fff" },
          }}
        />
        <div className="checkout-details2">
          <div className="your-personal-data">
            Your Personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our product
          </div>
          <div className="button6">
            <img className="tag-icon2" alt="" src="/tag-icon1.svg" />
            <b className="button7">Checkout</b>
            <img className="tag-icon3" alt="" src="/tag-icon1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default OrderDetails;
