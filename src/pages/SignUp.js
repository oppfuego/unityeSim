import SignIn from "../components/SignIn";
import Footer from "../components/Footer";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Header />
      <section className="sign-up-desktop">
        <SignIn />
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
