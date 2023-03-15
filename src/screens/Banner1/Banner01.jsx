import React, { useEffect } from "react";
import Banner1 from "../../components/Banner1/Banner1";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Banner01 = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1500 });
  // }, []);
  return (
    <div className="Banner01Container">
      <div>
        <Banner1 />
      </div>
    </div>
  );
};

export default Banner01;
