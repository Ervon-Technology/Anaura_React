import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../../images/Logo.png";

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        setScrolled(true);
      } else {
        navbar.classList.remove("scrolled");
        setScrolled(false);
      }
    };

    // Function to expand the navbar height when a dropdown opens
    const handleDropdownOpen = () => {
      const navbar = document.querySelector(".navbar");
      navbar.style.height = "auto"; // Allow automatic height expansion
      setExpanded(true);
    };

    // Function to reset the navbar height when the dropdown closes
    const handleDropdownClose = () => {
      const navbar = document.querySelector(".navbar");
      navbar.style.height = "auto"; // Reset back to normal
      setExpanded(false);
    };

    // Listen for Bootstrap dropdown events
    document.addEventListener("shown.bs.dropdown", handleDropdownOpen);
    document.addEventListener("hidden.bs.dropdown", handleDropdownClose);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("shown.bs.dropdown", handleDropdownOpen);
      document.removeEventListener("hidden.bs.dropdown", handleDropdownClose);
    };
  }, []);

  return (
    <>
      {/* Navbar section */}
      <nav
        className={`navbar navbar-expand-lg ${
          scrolled ? "navbar-light bg-white shadow" : "navbar-dark bg-transparent"
        } fixed-top hover-bg ${expanded ? "expanded" : ""}`}
      >
        <div className="container-fluid mx-5">
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
            <span className={`navbar-toggler-icon ${scrolled ? "black-icon" : ""}`}></span>
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
                <li className="nav-item dropdown me-3">
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
                      <a className="dropdown-item" href="/anaura-for-brands">
                        ANAURA For Brand
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/how-its-made">
                        How ANAURA is Made
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/anaura-fashion">
                      ANAURA For Fashion
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/anaura-home">
                      ANAURA For Home
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown me-3">
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
                      <a className="dropdown-item" href="/our-story">
                        Our Story
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="/about">
                    About ANAURA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light rounded-pill px-3 navbtn" href="/contact">
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
