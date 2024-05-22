import Images from "@assets/images";
import { designTechStackItems, rateItems, techStackItems } from "./TechData";
import TechStackMenuItem from "./TechStackMenuItem";
import DesignTechStackMenuItem from "./DesignStackMenuItem";
import RateItem from "./RateItem";
import "./TechStack.css";

export default function TechStack() {
  return (
    <section className="services-tech-stack">
      <div className="services-tech-stack-section">
        <h2 className="services-tech-stack-header">
          <span className="services-tech-stack-header-title">
            Your one-stop marketplace for finding the talent your business
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
                />
              ))}
            </div>
          </div>
        </div>

        <div className="explore">
          <div className="explore-conent">
            <img className="explore-btn" src={Images.roundZwilt} alt="" />
            <p className="explore-text">Explore More</p>
          </div>

          <button className="explore-more">
            30 more <span className="explore-more-text">to explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}
