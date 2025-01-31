import Images from "@assets/images";
import Typography from "@commons/Typography";
import "./Strategy.css";

export default function Strategy() {
  return (
    <section className="strategy">
      <img className="strategy-icon" src={Images.halfBottomBlue} alt="" />
      <div className="strategy-container">
        <h2 className="strategy-header">
          How we ensure you&apos;re in good hands.
        </h2>
        <div className="strategy-descr">
          <Typography
            className="strategy-descr-content"
            text="With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days."
          />
        </div>

        <div className="strategy-menu">
          <div className="strategy-menu-item">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-descr">
              <span className="strategy-menu-descr-title">
                Step 1: Resume Screening
              </span>
            </p>
          </div>

          <div className="strategy-menu-item-interview interv">
            <div className="interview-header">
              <img src={Images.bluePlay} alt="" />

              <p className="strategy-menu-descr">
                <span className="strategy-menu-descr-title">
                  Step 2: Video Interview
                </span>
              </p>
            </div>

            <div className="interview-descr">
              <Typography
                className="interview-descr-content"
                text="Candidates are assessed through skill based questions in a
                virtual setting. Allowing you to gauge personality and cultural
                fit."
              />
            </div>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-descr">
              <span className="strategy-menu-descr-title">
                Step 3: Technical Evaluation
              </span>
            </p>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-descr">
              <span className="strategy-menu-descr-title">
                Step 4: Application Review
              </span>
            </p>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-descr">
              <span className="strategy-menu-descr-title">
                Step 5: Lets get to work
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
