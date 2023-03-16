import React from "react";
import "./index.css";
// import Dev from "../../../assets/Tab1/dev";

const Tab1 = ({
  source1,
  source2,
  source3,
  source4,
  source5,
  source6,
  source7,
  source8,
  onClick,
}) => {
  return (
    <div className="Container3">
      {/* 1 */}
      <div className="imagesContainer">
        <div className="imageBox">
          <img
            onClick={onClick}
            src={source1}
            alt=""
            className="mainImage"
            // style={{ cursor: "pointer" }}
          />
        </div>
        <div>
          <img onClick={onClick} src={source2} alt="" className="mainImage" />
        </div>
        <div>
          <img onClick={onClick} src={source3} alt="" className="mainImage" />
        </div>
        <div>
          <img onClick={onClick} src={source4} alt="" className="mainImage" />
        </div>
        {/* </div> */}
        {/* 2 */}
        {/* <div className="imagesContainer2"> */}
        <div>
          <img src={source5} alt="" className="mainImage" />
        </div>
        <div>
          <img onClick={onClick} src={source6} alt="" className="mainImage" />
        </div>
        <div>
          <img onClick={onClick} src={source7} alt="" className="mainImage" />
        </div>
        <div>
          <img onClick={onClick} src={source8} alt="" className="mainImage" />
        </div>
      </div>
      {/* //{" "} */}
    </div>
  );
};

export default Tab1;
