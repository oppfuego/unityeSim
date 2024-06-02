import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import "./SignUp1.css";

const SignUp1 = () => {
  return (
    <div className="sign-up1">
      <Header1 />
      <section className="sign-in-desktop">
        <div className="sign-in">
          <FrameComponent />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default SignUp1;
