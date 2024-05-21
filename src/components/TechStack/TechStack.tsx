import Images from "@assets/images";
import "./TechStack.css";

const Information: React.FC = () => {
  return (
    <section className="services-tech-stack">
      <div className="services-tech-stack-section">
        <h2 className="services-tech-stack-header">
          <span className="services-tech-stack-header-title">
            Your one-stop marketplace for finding the talent your business
            needs.
          </span>
        </h2>

        <div className="services-tech-stack-container info">
          <div className="services-tech-stack-content">
            <div className="services-tech-stack__heading">
              <span className="services-tech-stack__heading-title">
                Find Dev and IT professionals to scale your business.
              </span>
            </div>

            <div className="services-tech-stack-rate-container">
              <div className="services-tech-stack-rate-items">
                <img src={Images.medal} alt="" />
                <p className="services-tech-stack-rate">989 Skills</p>
              </div>

              <div className="services-tech-stack-rate-items">
                <img src={Images.category} alt="" />
                <p className="services-tech-stack-rate">45 Sub-Categories</p>
              </div>
            </div>

            <div className="services-tech-stack-rate-container">
              <div className="services-tech-stack-rate-items">
                <img src={Images.profile} alt="" />
                <p className="services-tech-stack-rate">1011 Profiles</p>
              </div>
            </div>
          </div>

          {/* tech stack */}
          <div className="information__tech-stack">
            <div className="information__tech-stack-header">
              <span className="">IT & Development</span>
            </div>

            <div className="services-tech-stack-menu">
              <div className="services-tech-stack-menu-item">
                <img src={Images.shopify} alt="" />
                <span className="services-tech-stack-menu-title">
                  Shopify Developer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.magento} alt="" />
                <span className="services-tech-stack-menu-title">
                  Magento Developer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.data} alt="" />
                <span className="services-tech-stack-menu-title">
                  Data Scientist
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.webflow} alt="" />
                <span className="services-tech-stack-menu-title">
                  Webflow Developer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.dot} alt="" />
                <span className="services-tech-stack-menu-title">
                  Dot Net Developer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.rightZwilt} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* design */}

        <div className="services-tech-stack-container info-inner">
          <div className="services-tech-stack-content">
            <div className="services-tech-stack__heading">
              <span className="services-tech-stack__heading-title">
                Explore Creative individuals with a keen eye for detail.
              </span>
            </div>

            <div className="services-tech-stack-rate-container">
              <div className="services-tech-stack-rate-items">
                <img src={Images.medal} alt="" />
                <p className="services-tech-stack-rate">989 Skills</p>
              </div>

              <div className="services-tech-stack-rate-items">
                <img src={Images.category} alt="" />
                <p className="services-tech-stack-rate">45 Sub-Categories</p>
              </div>
            </div>

            <div className="services-tech-stack-rate-container">
              <div className="services-tech-stack-rate-items">
                <img src={Images.profile} alt="" />
                <p className="services-tech-stack-rate">1011 Profiles</p>
              </div>
            </div>
          </div>

          {/* tech stack */}
          <div className="information__tech-stack">
            <div className="information__tech-stack-header">
              <span className="">Design & Creative</span>
            </div>

            <div className="services-tech-stack-menu">
              <div className="services-tech-stack-menu-item">
                <img src={Images.leftZwilt} alt="" />
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.figma} alt="" />
                <span className="services-tech-stack-menu-title">
                  UX Designer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.photoShop} alt="" />
                <span className="services-tech-stack-menu-title">
                  Graphics Designer
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.ai} alt="" />
                <span className="services-tech-stack-menu-title">
                  Illustration Artist
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.unreal} alt="" />
                <span className="services-tech-stack-menu-title">
                  Unreal Engine
                </span>
              </div>

              <div className="services-tech-stack-menu-item tech-stack-item">
                <img src={Images.cinema} alt="" />
                <span className="services-tech-stack-menu-title">
                  Cinema 4D
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-tech-stack-container explore">
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
};

export default Information;
