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
              <img className="groove" src={Images.groove} alt="" />
            </span>
          </h2>

          <p className="review-descr">
            Zwilt enabled us to deliver on time and they&apos;ve been heavy
            hitters in our corner since.
          </p>

          <div className="navigation-button">
            <button className="navigation-swipe-btn">
              <img className="navigation-icon" src={Images.leftZwilt} alt="" />
            </button>

            <button className="navigation-swipe-btn next">
              <img className="navigation-icon" src={Images.rightZwilt} alt="" />
            </button>
          </div>
        </div>

        <div className="review-content review-cont">
          <div className="review-info-header">
            <div className="review-image-container">
              <img className="review-imagehq" src={Images.groovehq} alt="" />
            </div>

            <div className="review-info-head-content">
              <div className="">
                <h2 className="review-info-heading">Jason Makki</h2>
                <p className="review-info-tile">Engineer at GROOVE</p>
              </div>

              <p className="review-info-tile">San Francisco</p>
            </div>
          </div>

          <div className="review-info-descr-container">
            <p className="review-info-descr">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since. Zwilt enabled us to deliver on time
              and they&apos;ve been heavy hitters in our corner since.Zwilt
              enabled us to deliver on time and they&apos;ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
