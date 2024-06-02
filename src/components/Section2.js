import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section2 ${className}`}>
      <div className="extras-container">
        <b className="extras1">Extras</b>
      </div>
      <div className="frame-parent44">
        <div className="border-container">
          <div className="border9">
            <div className="border-inner2">
              <div className="frame-parent45">
                <div className="sim-card-optsvg-group">
                  <img
                    className="sim-card-optsvg-icon1"
                    loading="lazy"
                    alt=""
                    src="/simcardoptsvg.svg"
                  />
                  <div className="unity-esim-sms-number-wrapper">
                    <b className="unity-esim-sms1">Unity eSim SMS Number</b>
                  </div>
                </div>
                <p className="get-an-sms-container2">
                  <span>
                    <span className="get-an-sms1">
                      Get an SMS number from Unity eSim Connect and receive SMS
                      anywhere
                    </span>
                    <span className="around-the-world">
                      around the world directly with your Unity eSim SIM.
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="item-annual-subscription-for-group">
              <div className="item-annual1">
                Annual subscription for inbound SMS service.
              </div>
              <p className="validity-up-to-container2">
                <span className="validity-up-to2">
                  Validity up to 365 days. The subscription price is 60
                  euro/year, billed
                </span>
                <span className="annually">annually.</span>
              </p>
            </div>
          </div>
          <div className="border10">
            <div className="frame-parent46">
              <div className="discount-optsvg-group">
                <img
                  className="discount-optsvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/discountoptsvg.svg"
                />
                <div className="unity-esim-discount-container">
                  <b className="unity-esim-discount1">Unity eSim Discount</b>
                </div>
              </div>
              <p className="annual-subscription-to-container1">
                <span>
                  <span className="annual-subscription-to1">
                    Annual subscription to Unity eSim Connect services. Save on
                    rates and use
                  </span>
                  <span className="freechat-option-all">
                    FreeChat Option all year round.
                  </span>
                </span>
              </p>
            </div>
            <div className="border-inner3">
              <div className="item-get-a-20-discount-for-group">
                <div className="item-get1">
                  Get a 20% discount for selected data plans.
                </div>
                <p className="freechat-activation-for-container1">
                  <span className="freechat-activation-for1">
                    FreeChat activation for the whole subscription period:
                    unlimited text
                  </span>
                  <span className="messages-and-emoji">
                    messages and emoji in messengers with zero balance or no
                    active
                  </span>
                  <span className="tariff-plan">tariff plan.</span>
                </p>
              </div>
            </div>
            <div className="validity-up-to-365-days-the-s-container">
              <p className="validity-up-to-container3">
                <span className="validity-up-to3">
                  Validity up to 365 days. The subscription price is 60
                  euro/year, billed
                </span>
                <span className="annually1">annually.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border11">
          <div className="free-chat-optsvg-group">
            <img
              className="free-chat-optsvg-icon1"
              loading="lazy"
              alt=""
              src="/free-chatoptsvg.svg"
            />
            <div className="free-chat-option-container">
              <b className="free-chat-option1">Free Chat Option</b>
            </div>
          </div>
          <p className="unlimited-text-messages-container1">
            <span className="unlimited-text-messages2">{`Unlimited text messages & emoji. Be in touch with your family,`}</span>
            <span className="friends-and-business">
              friends and business partners from everywhere.
            </span>
          </p>
          <div className="border-inner4">
            <div className="item-automatically-activated-group">
              <p className="item-automatically1">
                Automatically activated for 7 days with SIM card activation
              </p>
              <div className="item-extended1">
                Extended for 15 days with every balance top-up
              </div>
              <div className="item-does1">
                Does not require tariff plan activation.
              </div>
              <div className="item-work1">Work with zero balance</div>
            </div>
          </div>
          <div className="messengers-supported-group">
            <b className="messengers-supported1">Messengers supported:</b>
            <div className="telegram-optsvg-group">
              <img
                className="telegram-optsvg-icon1"
                loading="lazy"
                alt=""
                src="/telegramoptsvg.svg"
              />
              <img
                className="whatsapp-optsvg-icon1"
                loading="lazy"
                alt=""
                src="/whatsappoptsvg.svg"
              />
              <img
                className="line-optsvg-icon1"
                loading="lazy"
                alt=""
                src="/lineoptsvg1@2x.png"
              />
              <img
                className="wechat-optsvg-icon1"
                loading="lazy"
                alt=""
                src="/wechatoptsvg1@2x.png"
              />
              <img
                className="viber-optsvg-icon1"
                loading="lazy"
                alt=""
                src="/viberoptsvg.svg"
              />
            </div>
          </div>
          <p className="attention-unity-esim-container2">
            <span className="attention-unity-esim-container3">
              <span className="attention-unity-esim-onnect1">
                <b className="attention1">Attention:</b>
                <span>
                  {" "}
                  Unity eSim Сonnect SIM does not have associated phone number
                  by default
                </span>
              </span>
              <span className="therefore-cannot-be-used-for-r">
                <span>
                  therefore cannot be used for registration with some
                  messengers. User account for
                </span>
              </span>
              <span className="these-messengers-must-be-regis">
                <span>
                  these messengers must be registered to the valid mobile phone
                  number in advance.
                </span>
              </span>
              <span className="or-you-can-activate-unity-esim">
                <span>
                  Or you can activate Unity eSim SMS Number subscription to get
                  the phone number
                </span>
              </span>
              <span className="associated-with-your-sim">
                <span>associated with your SIM.</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Section2;
