import React, { useEffect } from "react";
import "./ForDecs.css";
import AOS from "aos";
import "aos/dist/aos.css";
const ForDesc = ({ heading, text }) => {
  function myFunction() {
    // var dots = document.getElementById("dots");
    // var moreText = document.getElementById("more");
    // var btnText = document.getElementById("myBtn");
    window.open("https://www.slotocash.im/");
    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more";
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less";
    //   moreText.style.display = "inline";
    // }
  }
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  // data-aos="fade-up" data-aos-duration="1000"
  return (
    <div className="forContainer" data-aos="fade-up" data-aos-duration="2000">
      <div className="Heading22">{heading}</div>
      <div className="text22">{text}</div>
    </div>
  );
};

export default ForDesc;
