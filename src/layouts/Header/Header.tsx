import Svgs from "@assets/svgs";
import Images from "@assets/images";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Svgs.Header />
      <img src={Images.google} alt="Header" />
    </header>
  );
};

export default Header;
