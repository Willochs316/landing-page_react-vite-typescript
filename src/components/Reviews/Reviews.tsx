import Images from "@assets/images";
import "./Review.css";

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <img className="quote" src={Images.quote} alt="" />
      <div className="reviews-container">
        <div className="review-content">
          <h2 className="review-header">
            How it worked for Jason{" "}
            <span>
              <img src={Images.jason} alt="" />
            </span>{" "}
            at{" "}
            <span>
              <img src={Images.groove} alt="" />
            </span>
          </h2>

          <p className="review-descr">
            Zwilt enabled us to deliver on time and they&apos;ve been heavy
            hitters in our corner since.
          </p>

          <div className="navigation-button">
            <button className="navigation-btn">
              <img className="navigation-icon" src={Images.leftZwilt} alt="" />
            </button>

            <button className="navigation-btn next">
              <img className="navigation-icon" src={Images.rightZwilt} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
