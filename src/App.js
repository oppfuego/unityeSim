import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Coverage from "./pages/Coverage";
import Conditions from "./pages/Conditions";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import SignUp1 from "./pages/SignUp1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/coverage":
        title = "";
        metaDescription = "";
        break;
      case "/conditions":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/pricing":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
          'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sign-up" element={<SignUp1 />} />
      </Routes>
  );
}

export default App;