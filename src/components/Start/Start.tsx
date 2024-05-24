// import Images from "@assets/images";
import { Svgs } from "@assets/svgs";
import "./Start.css";

export default function Start() {
  return (
    <section className="start">
      <div className="start-container">
        <h2 className="start-heading">Start your journey today.</h2>

        <div className="start-menu-container">
          <div className="start-menu-items">
            <div className="start-journey-menu-item">
              <div className="start-number-icon-container">
                <Svgs.One className="start-number-icon" />
              </div>

              <div className="start-main">
                <p className="start-main-heading">
                  Find your next star performer.
                </p>

                <p className="start-main-text">
                  Explore the vast Zwilt marketplace to find the candidate that
                  meets your needs.
                </p>

                <div className="start-your-journey-now">
                  <button className="start-your-journey-btn">
                    <Svgs.ChevronRight className="start-your-journey-icon" />
                  </button>
                  <p className="start-your-journey-text">Join Now</p>
                </div>
              </div>
            </div>

            {/* <div className="start-banner-container">
              <img
                className="starter-banner-image"
                src={Images.menGroup}
                alt=""
              />
            </div> */}
          </div>
        </div>

        <div className="start-menu-evaluate">
          <div className="start-menu-evaluate-items">
            <div className="start-journey-menu-item">
              <div className="start-number-icon-container">
                <Svgs.Two className="start-number-icon" />
              </div>

              <div className="start-main">
                <p className="start-main-heading">
                  Evaluate to your heart&apos;s content.
                </p>

                <p className="start-main-text">
                  Assess the candidate through work history, transparent tests
                  and video interviews.
                </p>

                <div className="start-your-journey-now">
                  <button className="start-your-journey-btn">
                    <Svgs.ChevronRight className="start-your-journey-icon" />
                  </button>
                  <p className="start-your-journey-text">Browse More</p>
                </div>
              </div>
            </div>

            {/* <div className="start-banner-container">
              <img
                className="starter-banner-image"
                src={Images.menGroup}
                alt=""
              />
            </div> */}
          </div>
        </div>

        <div className="start-menu-team">
          <div className="start-menu-team-items">
            <div className="start-journey-menu-item">
              <div className="start-number-icon-container">
                <Svgs.Three className="start-number-icon" />
              </div>

              <div className="start-main">
                <p className="start-main-heading">Start building your team.</p>

                <p className="start-main-text">
                  Onboard your candidate right away and start creating the next
                  big thing.
                </p>

                <div className="start-your-journey-now">
                  <button className="start-your-journey-btn">
                    <Svgs.ChevronRight className="start-your-journey-icon" />
                  </button>
                  <p className="start-your-journey-text">Join Now</p>
                </div>
              </div>
            </div>

            {/* <div className="start-banner-container">
              <img
                className="starter-banner-image"
                src={Images.menGroup}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
