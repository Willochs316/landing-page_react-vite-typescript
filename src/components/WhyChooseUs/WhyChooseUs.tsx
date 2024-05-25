import { Svgs } from "@assets/svgs";
import Images from "@assets/images";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <div className="why-choose-us-heading">
          <h2 className="why-choose-us-heading-title">Why choose Zwilt?</h2>

          <div className="why-choose-us-descr-container">
            <p className="why-choose-us-descr-text">
              We take complex hiring processes - and simplify them. Connecting
              you to the world&apos;s highly qualified talent pool.
            </p>
          </div>
        </div>

        <div className="why-choose-us-hero-container">
          <div className="why-choose-us-item">
            <div className="why-choose-us-hero-item-container">
              <h2 className="why-choose-us-hero-item-title">
                Onboard without the risk.
              </h2>

              <div className="why-choose-us-hero-item-content">
                <div className="why-choose-us-hero-item-content-list">
                  <Svgs.Bullet className="bullet-icon" />

                  <p className="why-choose-us-hero-item-content-list-text">
                    <span> We pick the best for you to select.</span>
                  </p>
                </div>

                <div className="why-choose-us-hero-item-content-list">
                  <Svgs.Bullet className="bullet-icon" />

                  <p className="why-choose-us-hero-item-content-list-text">
                    <span>
                      Thousands of vetted candidates in dozens of categories.
                    </span>
                  </p>
                </div>

                <div className="why-choose-us-hero-item-content-list">
                  <Svgs.Bullet className="bullet-icon" />

                  <p className="why-choose-us-hero-item-content-list-text">
                    <span>Risk-free resource swapping for the best fit.</span>
                  </p>
                </div>
              </div>

              <div className="learn-more-container">
                <button className="load-btn">
                  <Svgs.ChevronRight className="load-icon" />
                </button>
                <p className="load-text">Learn More</p>
              </div>
            </div>

            <img className="why-hero-image" src={Images.ariana} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
