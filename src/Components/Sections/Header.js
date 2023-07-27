import React from "react";
import "../Sectionscss/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="Logo_img" src="/images/Logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="container">
              <div className="bar1" />
              <div className="bar2" />
              <div className="bar3" />
            </div>
          </button>
          <div
            className="collapse navbar-collapse navbaritems"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className="nav-link active justify-content-center"
                  aria-current="page"
                  href="#"
                >
                  <span
                    style={{
                      color: "#519259",
                      borderBottom: "5px solid #064635",
                      borderRadius: "5px",
                    }}
                    className="home_menu"
                  >
                    Home
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus " aria-current="page" href="#">
                  Co-traveller
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus " href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus " href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link menus " href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div className="container_menu">
                    <div className="bar1" />
                    <div className="bar2" />
                    <div className="bar3" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
