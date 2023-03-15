import React from "react";
import "./index.css";
import "aos/dist/aos.css";
const Banner1 = () => {
  return (
    <div className="BannerMainContainer">
      <div className="BannerMainContainer2">
        <div
          className="BannerText"
          data-aos="slide-up"
          data-aos-duration="1000"
        >
          Our team at BetDandy has developed a revolutionary paper-printed
          magazine that will change the online gambling world forever. Packed
          with engaging articles on critical gambling topics, entertainment and
          contest sections, and segments on how to lead a fulfilling and
          wholesome lifestyle, our innovative magazine is a must-read for any
          gambling enthusiast.
        </div>
        <div className="BannerImage">
          <img
            data-aos="slide-up"
            data-aos-duration="1000"
            className="mainBannerImage"
            src={require("../../images/Banner1 Image/1.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
