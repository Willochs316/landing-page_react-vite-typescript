import { useState } from "react";
import Images from "@assets/images";
import NavBar from "@components/NavBar/NavBar";
import Service from "@components/Service/Service";
import Typography from "@commons/Typography";
import "./Header.css";

export default function Header() {
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
          <span className="header-image-container">
            <img className="header-image" src={Images.zwilt} />
          </span>{" "}
          has never been easier.
        </h2>

        <Typography
          className="header-content"
          text="With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again."
        />

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

        <Service />
      </div>
    </header>
  );
}
