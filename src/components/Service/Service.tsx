import { useState } from "react";
import { serviceMenus } from "./ServiceData";
import "./Service.css";

export default function Service() {
  const [activeService, setActiveService] = useState<string>("IT");

  const toggleActiveService = (service: string) => {
    setActiveService(service);
  };

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-header">
          <div className="service-tagline">
            <div
              className={`service-info ${
                activeService === "IT" ? "active" : ""
              }`}
              onClick={() => toggleActiveService("IT")}
            >
              <p className="service-title">IT & Development</p>
            </div>

            <div
              className={`service-design ${
                activeService === "Design" ? "active" : ""
              }`}
              onClick={() => toggleActiveService("Design")}
            >
              <p className="service-title">Design and Creative</p>
            </div>
          </div>
        </div>

        <div className="service-menu">
          {serviceMenus.map((menu, index) => (
            <ul className={`${menu.mainClass} ${menu.subClass}`} key={index}>
              {menu.items.map((item, itemIndex) => (
                <li
                  className={`service-menu-item ${menu.listClass}
                  ${item.activeItem ? "activeItem" : ""}
                  `}
                  key={itemIndex}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
