import { useState } from "react";
import "./Service.css";

const Service: React.FC = () => {
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
          <ul className="service-menu-items">
            <li className="service-menu-item">Python Developer</li>
            <li className="service-menu-item service-list">
              Shopify Developer
            </li>
            <li className="service-menu-item service-list acive">
              MERN Stack Developer
            </li>
            <li className="service-menu-item service-list">
              Full Stack Developer
            </li>
          </ul>

          {/*  */}

          <ul className="service-menu-items service-menu-small">
            <li className="service-menu-item">Data Scientist</li>
            <li className="service-menu-item service-list">
              Front End Developer
            </li>
            <li className="service-menu-item service-list">
              Front End Developer
            </li>
            <li className="service-menu-item service-list">Python Developer</li>
          </ul>

          {/*  */}

          <ul className="service-menu-items service-menu-small">
            <li className="service-menu-item">Shopify Developer</li>
            <li className="service-menu-item service-list">Python Developer</li>
            <li className="service-menu-item service-list">
              Full Stack Developer
            </li>
            <li className="service-menu-item service-list acive">
              Explore More
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
