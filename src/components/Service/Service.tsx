import "./Service.css";

const Service: React.FC = () => {
  return (
    <div className="service">
      <div className="service-container">
        <div className="service-header">
          <div className="service-tagline">
            <div className="service-info active">
              <p className="service-title">IT & Development</p>
            </div>

            <div className="service-design">
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

          <ul className="service-menu-items service-menu-items-con">
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

          <ul className="service-menu-items">
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
