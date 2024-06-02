import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent41 ${className}`}>
      <div className="frame-parent42">
        <div className="backgroundborder-container">
          <div className="backgroundborder2" />
          <div className="backgroundborder3" />
        </div>
        <div className="general-coverage-parent">
          <div className="general-coverage">General Coverage*</div>
          <div className="one-time-pass-coverage-wrapper">
            <div className="one-time-pass-coverage">One-time Pass coverage</div>
          </div>
        </div>
      </div>
      <div className="ask-our-customer-container">
        <span>{`(Ask our `}</span>
        <span className="customer-service">customer service</span>
        <span> to check price)</span>
      </div>
      <div className="frame-parent43">
        <div className="backgroundborder-wrapper">
          <div className="backgroundborder4" />
        </div>
        <div className="no-coverage">No coverage</div>
      </div>
    </div>
  );
};


export default FrameComponent1;
