import NavBar from "@components/NavBar/NavBar";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavBar />

        <div className="right"></div>
      </div>
    </header>
  );
};

export default Header;
