import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

/**
 * ==========================================
 * EXPLANATION COMMENTS (Delete this block later)
 * ==========================================
 * 1. useState hook se mobile menu ko open/close karne ka logic handle kiya hai.
 * 2. useLocation hook se current path pata chal raha hai taaki 'Active' link highlight ho sake.
 * 3. navLinks array banaya hai taaki ek hi jagah edit karke links add ya remove kar sako.
 * 4. TypeScript ki types ( : string, etc.) poori tarah hata di hain.
 * 5. BEM class naming strategy use ki hai (navbar__inner, navbar__link).
 * ==========================================
 */

export function Navbar() {
  // Mobile menu open hai ya nahi, ye check karne ke liye state
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Current URL check karne ke liye location hook
  const location = useLocation();

  // Function check karne ke liye ki kaunsa link active hai
  const isActive = function(path) {
    return location.pathname === path;
  };

  // Navigation links ka data
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collection", label: "Collection" },
  ];

  // Mobile menu band karne ke liye helper function
  const closeMobile = function() {
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        {/* Brand Logo / Name */}
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <span className="navbar__brand-name">Itra Gully</span>
          <span className="navbar__brand-hindi">इत्र गली</span>
        </Link>

        {/* Desktop Links: Ye sirf bade screens par dikhenge */}
        <div className="navbar__links">
          {navLinks.map(function(link) {
            return (
              <Link
                key={link.path}
                to={link.path}
                className={"navbar__link " + (isActive(link.path) ? "navbar__link--active" : "")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Icon: Mobile menu kholne ke liye button */}
        <button
          className="navbar__mobile-toggle"
          onClick={function() { setMobileOpen(!mobileOpen); }}
          aria-label="Toggle menu"
        >
          {/* Ye teen spans CSS se teen lines (hamburger) ban jayengi */}
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu: Jab mobileOpen true hoga tabhi 'open' class aayegi */}
      <div className={"navbar__mobile-menu " + (mobileOpen ? "open" : "")}>
        {navLinks.map(function(link) {
          return (
            <Link
              key={link.path}
              to={link.path}
              className={"navbar__link " + (isActive(link.path) ? "navbar__link--active" : "")}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}