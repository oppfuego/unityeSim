import Section1 from "../components/Section1";
import FrameComponent from "../components/FrameComponent";
import Section from "../components/Section";
import "./Landing.css";
import Header from "../components/header/Header";

const Landing = () => {
  return (
      <>
          <Header />
          <div className="landing">
              <main className="background">
                  <Section1/>
                  <section className="background-inner">
                      <FrameComponent/>
                  </section>
                  <Section/>
              </main>
          </div>
      </>

  );
};

export default Landing;
