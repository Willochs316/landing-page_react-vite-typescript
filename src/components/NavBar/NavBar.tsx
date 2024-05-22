import Images from "@assets/images";
import Icon from "@components/Icon/Icon";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="zwilt">
        <img src={Images.logo} alt="" />
      </div>

      <div className="navigation-menu">
        <ul className="navigation-menu-items">
          <li className="navigation-menu-item">Find Work</li>
          <li className="navigation-menu-item menu-list">Find Talent</li>
          <li className="navigation-menu-item menu-list">Articles</li>
          <li className="navigation-menu-item menu-list">About Us</li>
          <li className="navigation-menu-item menu-list">Contact Us</li>
        </ul>
      </div>

      <div className="button-container">
        <div className="login">Log In</div>
        <div className="join-button">Join Now</div>
      </div>

      <div className="hamburger-container">
        <Icon className="hamburger" />
      </div>
    </nav>
  );
};

export default NavBar;
