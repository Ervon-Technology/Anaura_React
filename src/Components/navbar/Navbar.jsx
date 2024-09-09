import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../images/Logo.png";

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true); // Track navbar visibility
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      // Toggle the scrolled class based on the scroll position
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        setScrolled(true);
      } else {
        navbar.classList.remove("scrolled");
        setScrolled(false);
      }

      // Check scroll direction to hide/show navbar
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setVisible(false);
      } else {
        // If scrolling up, show the navbar
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar section */}
      <nav
        className={`navbar navbar-expand-lg ${scrolled ? "navbar-light bg-white shadow" : "navbar-dark bg-transparent"} fixed-top ${visible ? "visible" : "hidden"} hover-bg`}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} height="30" alt="ANAURA" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${scrolled ? 'black-icon' : ''}`}></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownDiscover"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discover ANAURA
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownDiscover">
                    <li>
                      <a className="dropdown-item" href="/ocean">ANAURA Our Ocean</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/fashion">How it's made</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/brands">Anaura for brands</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownSustainability"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sustainability
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownSustainability">
                    <li>
                      <a className="dropdown-item" href="/home">Our Story</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/home">Champions of Sustainability</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About us</a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-outline-light rounded-pill px-3 navbtn"
                    href="#"
                  >
                    ANAURA For Business
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
