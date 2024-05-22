import Images from "@assets/images";
import Icon from "@components/Icon/Icon";
import { navigationItems } from "./NavData";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="zwilt">
        <img className="site-logo" src={Images.logo} alt="" />
      </div>

      <div className="navigation-menu">
        <ul className="navigation-menu-items">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={`navigation-menu-item ${
                index > 0 ? " menu-list" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="button-container">
        <div className="login">Log In</div>
        <button className="join-button">Join Now</button>
      </div>

      <div className="hamburger-container">
        <Icon className="hamburger" />
      </div>
    </nav>
  );
}
