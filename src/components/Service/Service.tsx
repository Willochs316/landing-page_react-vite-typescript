import { useState } from "react";
import { serviceMenus } from "./ServiceData";
import "./Service.css";

type ServiceCategory = "IT" | "Design";

export default function Service() {
  const [activeService, setActiveService] = useState<ServiceCategory>("IT");
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const toggleActiveService = (service: ServiceCategory) => {
    setActiveService(service);
    setActiveItem(null); // Reset active item when service category changes
  };

  const handleItemClick = (itemId: number) => {
    setActiveItem(itemId);
  };

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-heading-container">
          <div className="service-tagline">
            <div
              className={`service-technology ${
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
          {serviceMenus[activeService].map((menu, index) => (
            <ul className={`${menu.mainClass} ${menu.subClass}`} key={index}>
              {menu.items.map((item) => (
                <li
                  className={`service-menu-item ${menu.listClass} ${
                    item.activeItem || activeItem === item.id
                      ? "activeItem"
                      : ""
                  } ${item.firstChild ? "first-child" : ""}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
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
