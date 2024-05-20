import { useState } from "react";
import Images from "@assets/images";
import NavBar from "@components/NavBar/NavBar";
import "./Header.css";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavBar />

        <div className="header-title">
          Finding the right fit{" "}
          <span>
            <img src={Images.zwilt} />
          </span>{" "}
          has never been easier.
        </div>

        <p className="header-content">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <form className="header-form">
          {inputValue === "" && (
            <div className="placeholder-wrapper">
              <span className="text-darker-gray">Looking for</span>&nbsp;
              <span className="text-gray"> design |</span>
            </div>
          )}

          <input
            className="header-input-field"
            value={inputValue}
            onInput={handleInput}
          />

          <img src={Images.inputIcon} className="header-input-icon" />
        </form>
      </div>
    </header>
  );
};

export default Header;
