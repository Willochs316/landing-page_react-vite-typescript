import Images from "@assets/images";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <img className="footer-bg" src={Images.footerBg} alt="" />
      <div className="foooter-container">
        <div className="footer-content">
          <div className="footer-heading">
            <span className="footer-heading-title">
              Need a job done, and done well? Get started
            </span>
          </div>

          <div className="footer-form">
            <img src={Images.zwiltDown} alt="" />
          </div>
        </div>

        <div className="footer-main-inner">
          <div className="footer-company">
            <div className="footer-company-content">
              <img src={Images.footerZwilt} alt="" />

              <p className="footer-company-descr">
                We take complex hiring processes - and simplify them. Connecting
                you to the world&apos;s highly qualified talent pool.
              </p>
            </div>

            <div className="footer-links">
              <p className="links-redir">LINKS AND REDIRECTS</p>

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
            <p className="footer-connect-title">
              Connecting the right people to the right businesses.
            </p>
            <div className="footer-menu-container">
              <div className="footer-menu">
                <p className="footer-menu-title">PLATFORM</p>

                <ul className="footer-menu-items">
                  <li className="footer-menu-list active">Find Work</li>

                  <li className="footer-menu-list footer-menu-lt">
                    Find Talent
                  </li>
                  <li className="footer-menu-list footer-menu-lt">
                    Categories
                  </li>
                  <li className="footer-menu-list footer-menu-lt">About Us</li>
                </ul>
              </div>

              <div className="footer-menu">
                <p className="footer-menu-title">CATEGORIES</p>

                <ul className="footer-menu-items">
                  <li className="footer-menu-list">Data Science</li>

                  <li className="footer-menu-list footer-menu-lt">
                    IT & Networking
                  </li>
                  <li className="footer-menu-list footer-menu-lt">
                    Web & Mobile
                  </li>
                </ul>
              </div>

              <div className="footer-menu">
                <p className="footer-menu-title">HELP</p>

                <ul className="footer-menu-items">
                  <li className="footer-menu-list">FAQ&apos;s</li>

                  <li className="footer-menu-list footer-menu-lt">
                    Contact Us
                  </li>
                </ul>
              </div>

              <div className="footer-menu">
                <p className="footer-menu-title">GET IN TOUCH @</p>

                <ul className="footer-menu-items">
                  <li className="footer-menu-list">Instagram</li>

                  <li className="footer-menu-list footer-menu-lt">LinkedIn</li>
                  <li className="footer-menu-list footer-menu-lt">Twitter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
