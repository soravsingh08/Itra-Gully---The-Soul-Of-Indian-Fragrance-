import { Link } from "react-router-dom";
import "./Footer.css"



export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          
          {/* Column 1: Brand Identity */}
          <div>
            <div className="footer__brand-name">Itra Gully</div>
            <div className="footer__brand-hindi">इत्र गली</div>
            <p className="footer__brand-text">
              Born in the narrow lanes of Kannauj, where the art of attar-making
              has survived for five centuries. We bring the soul of India's
              perfume capital to your doorstep — no synthetics, no shortcuts.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__link-list">
              <li>
                <Link to="/" className="footer__link">Home</Link>
              </li>
              <li>
                <Link to="/collection" className="footer__link">Collection</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brand Story/Trust Factors */}
          <div>
            <h4 className="footer__heading">The Craft</h4>
            <ul className="footer__link-list">
              {/* No links for this becaucse this are just for brand depth */}
              <li><span className="footer__link">Deg-Bhapka Process</span></li>
              <li><span className="footer__link">Our Artisans</span></li>
              <li><span className="footer__link">Kannauj Heritage</span></li>
              <li><span className="footer__link">Sustainability</span></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar: Copyright and Small Info */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            © 2025 Itra Gully. All rights reserved.
          </span>
          <span className="footer__made-with">
          
            Crafted with <span>♦</span> in Kannauj & Mumbai
          </span>
        </div>
      </div>
    </footer>
  );
}