import { useState } from "react";
import Images from "@assets/images";
import NavBar from "@components/NavBar/NavBar";
import ItDepartment from "@components/Service/Service";
import "./Header.css";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavBar />

        <h2 className="header-title">
          Finding the right fit{" "}
          <span>
            <img src={Images.zwilt} />
          </span>{" "}
          has never been easier.
        </h2>

        <p className="header-content">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>

        <form className="header-form">
          {inputValue === "" && (
            <div className="placeholder-container">
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

        <ItDepartment />
      </div>
    </header>
  );
};

export default Header;
