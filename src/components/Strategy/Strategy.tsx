import Images from "@assets/images";
import "./Strategy.css";

const Strategy: React.FC = () => {
  return (
    <section className="strategy">
      <div className="strategy-container">
        <h2 className="strategy-header">
          How we ensure you&apos;re in good hands.
        </h2>
        <div className="strategy-text-container">
          <p className="strategy-text">
            With our comprehensive screening process, we hand-pick highly
            skilled candidates so you can onboard them in a matter of days.
          </p>
        </div>

        <div className="strategy-menu">
          <div className="strategy-menu-item">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-item-descr">
              <span className="strategy-menu-item-text">
                Step 1: Resume Screening
              </span>
            </p>
          </div>

          <div className="strategy-menu-item-interview interv">
            <div className="interview-header">
              <img src={Images.bluePlay} alt="" />

              <p className="strategy-menu-item-descr">
                <span className="strategy-menu-item-text">
                  Step 2: Video Interview
                </span>
              </p>
            </div>

            <div className="interview-descr">
              <p className="interview-descr-text">
                Candidates are assessed through skill based questions in a
                virtual setting. Allowing you to gauge personality and cultural
                fit.
              </p>
            </div>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-item-descr">
              <span className="strategy-menu-item-text">
                Step 3: Technical Evaluation
              </span>
            </p>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-item-descr">
              <span className="strategy-menu-item-text">
                Step 4: Application Review
              </span>
            </p>
          </div>

          <div className="strategy-menu-item strategy-space">
            <img src={Images.play} alt="" />

            <p className="strategy-menu-item-descr">
              <span className="strategy-menu-item-text">
                Step 5: Lets get to work
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
