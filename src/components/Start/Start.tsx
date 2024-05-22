import Images from "@assets/images";
import "./Start.css";

export default function Start() {
  return (
    <section className="start">
      <div className="start-container">
        <h2 className="start-heading">Start your journey today.</h2>

        <div className="start-menu">
          <img className="image-banner" src={Images.blueGroup} />
          <img className="image-banner" src={Images.yellowGroup} />
          <img className="image-banner" src={Images.whiteGroup} />
        </div>
      </div>
    </section>
  );
}
