// import Images from "@assets/images";
import { Svgs } from "@assets/svgs";
import "./WhyChooseUs.css";
import Images from "@assets/images";

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-choose-content">
        <div className="why-choose-descr">
          <h2 className="why-choose-header">Why choose Zwilt?</h2>

          <div className="why-choose-descr-container">
            <p className="why-choose-descr-text">
              We take complex hiring processes - and simplify them. Connecting
              you to the world&apos;s highly qualified talent pool.
            </p>
          </div>
        </div>

        <div className="why-choose-us-scroll">
          <div className="why-choose-us-item">
            <div className="">
              <h2 className="onboard-header">Onboard without the risk.</h2>

              <div className="our-benefits">
                <div className="benefit-content">
                  <Svgs.Bullet />

                  <p className="benefit-content-text">
                    <span> We pick the best for you to select.</span>
                  </p>
                </div>

                <div className="benefit-content">
                  <Svgs.Bullet />

                  <p className="benefit-content-text">
                    <span>
                      Thousands of vetted candidates in dozens of categories.
                    </span>
                  </p>
                </div>

                <div className="benefit-content">
                  <Svgs.Bullet />

                  <p className="benefit-content-text">
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

            <img className="why-banner" src={Images.ariana} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
