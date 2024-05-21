import Images from "@assets/images";
import "./Information.css";

const Information: React.FC = () => {
  return (
    <section className="information">
      <div className="information-header">
        <span className="information-header-title">
          Your one-stop marketplace for finding the talent your business needs.
        </span>
      </div>

      <div className="information-container info">
        <div className="information-content">
          <div className="information-category__heading">
            <span className="information-category__heading-title">
              Find Dev and IT professionals to scale your business.
            </span>
          </div>

          <div className="information-category">
            <div className="information-category__items">
              <img src={Images.medal} alt="" />
              <p className="information-category__description">989 Skills</p>
            </div>

            <div className="information-category__items">
              <img src={Images.category} alt="" />
              <p className="information-category__description">
                45 Sub-Categories
              </p>
            </div>
          </div>

          <div className="information-category">
            <div className="information-category__items">
              <img src={Images.profile} alt="" />
              <p className="information-category__description">1011 Profiles</p>
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="information__tech-stack">
          <div className="information__tech-stack-header">
            <span className="">IT & Development</span>
          </div>

          <div className="information__tech-stack-content">
            <div className="information__tech-stack-item">
              <img src={Images.shopify} alt="" />
              <span className="information__tech-stack-title">
                Shopify Developer
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.magento} alt="" />
              <span className="information__tech-stack-title">
                Magento Developer
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.data} alt="" />
              <span className="information__tech-stack-title">
                Data Scientist
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.webflow} alt="" />
              <span className="information__tech-stack-title">
                Webflow Developer
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.dot} alt="" />
              <span className="information__tech-stack-title">
                Dot Net Developer
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.rightZwilt} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* design */}

      <div className="information-container info-inner">
        <div className="information-content">
          <div className="information-category__heading">
            <span className="information-category__heading-title">
              Explore Creative individuals with a keen eye for detail.
            </span>
          </div>

          <div className="information-category">
            <div className="information-category__items">
              <img src={Images.medal} alt="" />
              <p className="information-category__description">989 Skills</p>
            </div>

            <div className="information-category__items">
              <img src={Images.category} alt="" />
              <p className="information-category__description">
                45 Sub-Categories
              </p>
            </div>
          </div>

          <div className="information-category">
            <div className="information-category__items">
              <img src={Images.profile} alt="" />
              <p className="information-category__description">1011 Profiles</p>
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="information__tech-stack">
          <div className="information__tech-stack-header">
            <span className="">Design & Creative</span>
          </div>

          <div className="information__tech-stack-content">
            <div className="information__tech-stack-item">
              <img src={Images.leftZwilt} alt="" />
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.figma} alt="" />
              <span className="information__tech-stack-title">UX Designer</span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.photoShop} alt="" />
              <span className="information__tech-stack-title">
                Graphics Designer
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.ai} alt="" />
              <span className="information__tech-stack-title">
                Illustration Artist
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.unreal} alt="" />
              <span className="information__tech-stack-title">
                Unreal Engine
              </span>
            </div>

            <div className="information__tech-stack-item tech-stack-item">
              <img src={Images.cinema} alt="" />
              <span className="information__tech-stack-title">Cinema 4D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
