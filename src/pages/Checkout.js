import FrameComponent3 from "../components/FrameComponent3";
import FormHeader from "../components/FormHeader";
import OrderDetails from "../components/OrderDetails";
import Footer2 from "../components/Footer2";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <FrameComponent3 />
      <section className="checkout-inner">
        <form className="form-header-parent">
          <FormHeader />
          <OrderDetails />
        </form>
      </section>
      <Footer2 />
    </div>
  );
};

export default Checkout;
