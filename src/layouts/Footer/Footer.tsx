import Images from "@assets/images";
import Typography from "@commons/Typography";
import { menuData } from "./FooterData";
import FooterBottom from "./FooterBottom";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="foooter-container">
        <div className="footer-content">
          <div className="footer-heading">
            <span className="footer-heading-title">
              Need a job done, and done well? Get started
            </span>
          </div>

          <div className="footer-form">
            <img className="footer-icon" src={Images.zwiltDown} alt="" />
          </div>
        </div>

        <div className="footer-main-inner">
          <div className="footer-company">
            <div className="footer-company-content">
              <img className="footer-logo" src={Images.footerZwilt} alt="" />

              <p className="footer-company-descr">
                We take complex hiring processes - and simplify them. Connecting
                you to the world&apos;s highly qualified talent pool.
              </p>
            </div>

            <div className="footer-links">
              <p className="links-redir">links and redirects</p>

              <div className="links-redr-btn-container">
                <a href="/" className="">
                  <button className="links-redr-btn">Hire now</button>
                </a>

                <a href="/" className="btn-space">
                  <button className="links-redr-btn">Apply now</button>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-connect">
            <Typography
              className="footer-connect-title"
              text="Connecting the right people to the right businesses."
            />
            <div className="footer-menu-container">
              {menuData.map((menu, index) => (
                <div className="footer-menu" key={index}>
                  <Typography
                    className={`footer-menu-title ${menu.titleClass || ""}`}
                    text={menu.title}
                  />
                  {menu.items.map((item, itemIndex) => (
                    <ul className="footer-menu-items">
                      <li
                        className={`footer-menu-list ${menu.listClass} ${
                          item.isActive ? "isActive" : ""
                        }`}
                        key={itemIndex}
                      >
                        {item.text}
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </section>
  );
}
