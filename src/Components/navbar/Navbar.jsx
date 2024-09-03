import React, { useEffect, useState } from "react";
import "./navbar.css"; // Assuming your CSS is saved in Navbar.css
import logo from "../../images/Logo.png";

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleDropdownToggle = (e) => {
      e.preventDefault();
      const dropdownContent = e.currentTarget.nextElementSibling;
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdownContent) {
          content.style.display = "none";
        }
      });
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    };

    const dropdownToggles = document.querySelectorAll(
      ".nav-link.dropdown-toggle"
    );
    dropdownToggles.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownToggle);
    });

    return () => {
      dropdownToggles.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownToggle);
      });
    };
  }, []);

  return (
    <>
      {/* Navbar section */}
      <nav
        className="navbar navbar-expand-lg navbar-light position-fixed top-0 w-100 z-100"
        style={{ zIndex: 200000}}
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
            <span className="navbar-toggler-icon"></span>
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item dropdown py-lg-0 py-2">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/fashion"
                    id="dropdownDiscover"
                    aria-expanded="false"
                  >
                    Discover ANAURA
                  </a>
                  <div
                    className="dropdown-content"
                    id="dropdownDiscoverContent"
                  >
                    <a className="dropdown-item border-bottom" href="/about">
                      About us
                    </a>
                    <a className="dropdown-item border-bottom" href="">
                      How it's made
                    </a>
                    <a className="dropdown-item border-bottom" href="/brands">
                      Anaura for brands
                    </a>
                  </div>
                </li>
                <li className="nav-item py-lg-0 py-2">
                  <a className="nav-link text-white" href="/ocean">
                    ANAURA Our Ocean
                  </a>
                </li>
                <li className="nav-item dropdown py-lg-0 py-2">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="/achivement"
                    id="dropdownSustainability"
                    aria-expanded="false"
                  >
                    Sustainability
                  </a>
                  <div
                    className="dropdown-content"
                    id="dropdownSustainabilityContent"
                  >
                    <a className="dropdown-item border-bottom" href="/home">
                      Anaura For Home
                    </a>
                  </div>
                </li>
                <li className="nav-item py-lg-0 py-3">
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

      {/* Full-width dropdown container */}
      <div
        className="dropdown-fullwidth bg-white position-absolute w-100 d-none"
        id="dropdownMenuContainer"
      >
        <div id="dropdownDiscoverMenu" className="dropdown-menu-custom d-none">
          <a className="dropdown-item" href="/about">
            About us
          </a>
          <a className="dropdown-item" href="/fashion">
            How it's made
          </a>
          <a className="dropdown-item" href="/brands">
            Anaura for brands
          </a>
        </div>
        <div
          id="dropdownSustainabilityMenu"
          className="dropdown-menu-custom d-none"
        >
          <a className="dropdown-item" href="/home">
            Anaura For Home
          </a>
          <a className="dropdown-item" href="/home">
            Anaura For Home
          </a>
        </div>
      </div>
      {/* Navbar section ends here */}
    </>
  );
};

export default MyNavbar;
