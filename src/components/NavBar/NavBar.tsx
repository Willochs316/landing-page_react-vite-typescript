import { Svgs } from "@assets/svgs";
import Icon from "@components/Icon/Icon";
import { buttons, navigationItems } from "./NavData";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navigation">
      <a href="/" className="zwilt">
        <Svgs.Zwilt className="site-logo" />
      </a>

      <div className="navigation-menu">
        <ul className="navigation-menu-items">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={`navigation-menu-item ${
                index > 0 ? " menu-list" : ""
              }`}
            >
              <a href="/" className="navigation-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navigation-menu-btn-container">
        {buttons.map((button, index) => (
          <a key={index} href={button.href} className={button.className}>
            {button.label}
          </a>
        ))}
      </div>

      <div className="hamburger-container">
        <Icon className="hamburger" />
      </div>
    </nav>
  );
}
