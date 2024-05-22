import Typography from "@commons/Typography";
import { privacyLinks } from "./FooterData";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-content">
        <div className="footer-rights">
          <Typography
            className="footer-rights-text"
            text="All rights reserved by Zwilt"
          />
        </div>

        <div className="footer-privacy">
          {privacyLinks.map((link, index) => (
            <a
              href={link.href}
              className={`footer-privacy-text ${link.className}`}
              key={index}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
