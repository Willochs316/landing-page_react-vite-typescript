import Images from "@assets/images";
import "./Start.css";

const Start: React.FC = () => {
  return (
    <section className="start">
      <div className="start-container">
        <h2 className="start-heading">Start your journey today.</h2>

        <div className="start-menu">
          <img src={Images.blueGroup} />
          <img src={Images.yellowGroup} />
          <img src={Images.whiteGroup} />
        </div>
      </div>
    </section>
  );
};

export default Start;
