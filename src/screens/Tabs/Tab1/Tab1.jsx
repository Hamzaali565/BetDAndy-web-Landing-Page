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
}) => {
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  return (
    <div className="Container3">
      {/* 1 */}
      <div className="imagesContainer">
        <div onClick={Move} className="imageBox">
          <img
            src={source1}
            alt=""
            className="mainImage"
            // style={{ cursor: "pointer" }}
          />
        </div>
        <div onClick={Move}>
          <img src={source2} alt="" className="mainImage" />
        </div>
        <div onClick={Move}>
          <img src={source3} alt="" className="mainImage" />
        </div>
        <div onClick={Move}>
          <img src={source4} alt="" className="mainImage" />
        </div>
        {/* </div> */}
        {/* 2 */}
        {/* <div className="imagesContainer2"> */}
        <div onClick={Move}>
          <img src={source5} alt="" className="mainImage" />
        </div>
        <div onClick={Move}>
          <img src={source6} alt="" className="mainImage" />
        </div>
        <div onClick={Move}>
          <img src={source7} alt="" className="mainImage" />
        </div>
        <div onClick={Move}>
          <img src={source8} alt="" className="mainImage" />
        </div>
      </div>
      {/* //{" "} */}
    </div>
  );
};

export default Tab1;
