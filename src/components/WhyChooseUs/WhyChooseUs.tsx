import { Svgs } from "@assets/svgs";
import Images from "@assets/images";
import Typography from "@commons/Typography";
import { listItems } from "./WhyChooseData";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <div className="why-choose-us-heading">
          <h2 className="why-choose-us-heading-title">Why choose Zwilt?</h2>

          <div className="why-choose-us-descr-container">
            <Typography
              className="why-choose-us-descr-text"
              text="We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool."
            />
          </div>
        </div>

        <div className="why-choose-us-hero-container">
          <div className="why-choose-us-item">
            <div className="why-choose-us-hero-item-container">
              <h2 className="why-choose-us-hero-item-title">
                Onboard without the risk.
              </h2>

              <div className="why-choose-us-hero-item-content">
                {listItems.map((item, index) => (
                  <div
                    key={index}
                    className="why-choose-us-hero-item-content-list"
                  >
                    <Svgs.Bullet className="bullet-icon" />
                    <p className="why-choose-us-hero-item-content-list-text">
                      <span>{item}</span>
                    </p>
                  </div>
                ))}
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
