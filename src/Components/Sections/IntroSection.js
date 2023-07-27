import React from "react";
import "../Sectionscss/intro.css";
import intro from "../../Images/intro_img.png";

const IntroSection = () => {
  return (
    <>
      <div className="containerfluid">
        <h2 className="intro_section_head">Food Lab Food Safety Services</h2>
        <div className="row">
          <div className="col-lg-6 col-sm-12 intro_img">
            <img src={intro} alt="intro" className="intro_image_size" />
          </div>
          <div className="col-lg-6 col-sm-12 intro_description">
            <h5 className="intro_description_h5">
              Aperiam quia sapiente vel consequatur consequatur omnis sed autem
              quae. Ipsa et minus consequatur vero et doloribus. Ex error illum
              consequatur amet ea occaecati odit. Quia similique dolorum
              officiis distinctio magnam ut facilis. Et dolore est inventore ea
              et molestiae earum.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
