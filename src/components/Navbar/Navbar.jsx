import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"


export function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();


  const isActive = function(path) {
    return location.pathname === path;
  };


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collection", label: "Collection" },
  ];

  const closeMobile = function() {
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
   
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <span className="navbar__brand-name">Itra Gully</span>
          <span className="navbar__brand-hindi">इत्र गली</span>
        </Link>

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

    
        <button
          className="navbar__mobile-toggle"
          onClick={function() { setMobileOpen(!mobileOpen); }}
          aria-label="Toggle menu"
        >
      
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

 
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