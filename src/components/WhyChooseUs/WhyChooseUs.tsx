import Images from "@assets/images";
import "./WhyChooseUs.css";

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
          <img className="why-choose-us-banner" src={Images.risk} alt="" />
          <img className="why-choose-us-banner" src={Images.book} alt="" />
          <img className="why-choose-us-banner" src={Images.loop} alt="" />
        </div>
      </div>
    </section>
  );
}
