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
  return (
    <div className="Container3">
      {/* 1 */}
      <div className="imagesContainer">
        <div>
          <img src={source1} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source2} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source3} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source4} alt="Image Here" className="mainImage" />
        </div>
        {/* </div> */}
        {/* 2 */}
        {/* <div className="imagesContainer2"> */}
        <div>
          <img src={source5} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source6} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source7} alt="Image Here" className="mainImage" />
        </div>
        <div>
          <img src={source8} alt="Image Here" className="mainImage" />
        </div>
      </div>
      {/* //{" "} */}
    </div>
  );
};

export default Tab1;
