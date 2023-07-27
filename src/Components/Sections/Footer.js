import React from "react";
import "../Sectionscss/Footercss.css";
import logo from "../../Images/Logo.png";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-end   ">
      <MDBContainer className="text-center  mt-5 main_container">
        <MDBRow className="mt-3">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="footer_logo_section ">
                <MDBCol md="3" lg="6" className="d-flex  flex-column">
                  <img
                    className="Logo_img"
                    src={logo}
                    alt="Logo"
                    style={{ borderRadius: "10%", marginBottom: "10px" }}
                  />
                  <div className="contact_logo">
                    <h6 style={{ fontWeight: "900", color: "#000000" }}>
                      203, Abc road , xyz{" "}
                    </h6>
                    <h6>
                      <strong style={{ fontWeight: "900", color: "#000000" }}>
                        Phone
                      </strong>{" "}
                      : +91 44 4269 2288{" "}
                    </h6>
                    <h6>
                      <strong style={{ fontWeight: "900", color: "#000000" }}>
                        Email
                      </strong>{" "}
                      : admin@parikshan.net.in
                    </h6>
                  </div>
                </MDBCol>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="row " style={{ backgroundColor: "#F4EEA9" }}>
                <MDBCol md="2" lg="2" className="mx-auto mb-4">
                  <h6
                    className=" fw-bold mb-4 useful_link"
                    style={{
                      fontWeight: "900",
                      color: "#000000",
                    }}
                  >
                    Useful Link
                  </h6>
                  <p>
                    <a href="/" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Training Registration
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Services
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 mt-5">
                  <p>
                    <a href="/" className="text-reset">
                      Support
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Contact Us
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6
                    className=" fw-bold mb-4 site_map"
                    style={{
                      fontWeight: "900",
                      color: "#000000",
                    }}
                  >
                    Site Map
                  </h6>
                  <p>
                    <a href="/" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Services
                    </a>
                  </p>
                  <p>
                    <a
                      href="/"
                      className="text-reset"
                      style={{ color: "#000000" }}
                    >
                      Training Registration
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-reset">
                      Services
                    </a>
                  </p>
                </MDBCol>
              </div>
              <div className="row" style={{ backgroundColor: "#F4EEA9" }}>
                <div className="col-lg-12 col-md-12">
                  <div
                    className="text-center p-4 "
                    style={{ backgroundColor: "#F4EEA9" }}
                  >
                    Food Labs Inc. © Copyright 2022. All Rights Reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </MDBRow>
      </MDBContainer>
      {/* </section> */}
    </MDBFooter>
  );
};

export default Footer;
