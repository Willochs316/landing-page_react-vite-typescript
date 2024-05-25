import Images from "@assets/images";
import { Svgs } from "@assets/svgs";
import { designTechStackItems, rateItems, techStackItems } from "./TechData";
import TechStackMenuItem from "./TechStackMenuItem";
import DesignTechStackMenuItem from "./DesignStackMenuItem";
import RateItem from "./RateItem";
import "./TechStack.css";

export default function TechStack() {
  return (
    <article className="service-stripe">
      <div className="stripe-container">
        <img className="stripe" src={Images.stripe} alt="" />
      </div>

      <section className="services-tech-stack">
        <div className="services-tech-stack-section">
          <h2 className="services-tech-stack-header">
            <span className="services-tech-stack-header-title">
              Your one-stop market place for finding the talent your business
              needs.
            </span>
          </h2>

          <div className="services-tech-stack-container">
            <div className="services-tech-stack-content">
              <div className="services-tech-stack__heading">
                <span className="services-tech-stack__heading-title">
                  Find Dev and IT professionals to scale your business.
                </span>
              </div>

              <div>
                <div className="services-tech-stack-rate-container">
                  {rateItems.slice(0, 2).map((item, index) => (
                    <RateItem key={index} src={item.src} text={item.text} />
                  ))}
                </div>
                <div className="services-tech-stack-rate-container">
                  <RateItem src={rateItems[2].src} text={rateItems[2].text} />
                </div>
              </div>
            </div>

            <div className="services-tech-stack-main">
              <div className="services-tech-stack-main-header">
                <span>IT & Development</span>
              </div>
              <div className="services-tech-stack-menu">
                {techStackItems.map((item, index) => (
                  <TechStackMenuItem
                    key={index}
                    src={item.src}
                    title={item.title}
                    extraClass={item.extraClass}
                    button={item.button}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="services-tech-stack-container info-inner">
            <div className="services-tech-stack-content">
              <div className="services-tech-stack__heading">
                <span className="services-tech-stack__heading-title">
                  Explore Creative individuals with a keen eye for detail.
                </span>
              </div>

              <div>
                <div className="services-tech-stack-rate-container">
                  {rateItems.slice(0, 2).map((item, index) => (
                    <RateItem key={index} src={item.src} text={item.text} />
                  ))}
                </div>
                <div className="services-tech-stack-rate-container">
                  <RateItem src={rateItems[2].src} text={rateItems[2].text} />
                </div>
              </div>
            </div>

            <div className="services-tech-stack-main">
              <div className="services-tech-stack-main-header">
                <span>Design & Creative</span>
              </div>
              <div className="services-tech-stack-menu">
                {designTechStackItems.map((item, index) => (
                  <DesignTechStackMenuItem
                    key={index}
                    src={item.src}
                    title={item.title}
                    extraClass={item.extraClass}
                    button={item.button}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="explore">
            <div className="explore-conent">
              <button className="explore-btn">
                <Svgs.ChevronRight className="explore-icon" />
              </button>
              <p className="explore-text">Explore More</p>
            </div>

            <button className="explore-more">
              30 more <span className="explore-more-text">to explore</span>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
