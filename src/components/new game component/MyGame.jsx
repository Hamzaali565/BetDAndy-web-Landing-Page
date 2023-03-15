import React, { useEffect } from "react";
import "./Index.css";
import AOS from "aos";
import "aos/dist/aos.css";
const MyGame = ({ heading, text, btntext, source }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  return (
    <div className="GameContainer" data-aos="fade-up">
      {/* image */}
      <div className="GameImage">
        <img src={source} alt="" />
      </div>
      {/* heading */}
      <h5 className="GameHeading">{heading}</h5>
      <div className="GameTextContainer">
        <p className="GameText">{text}</p>
      </div>
      <div className="GameButtonContainer" onClick={Move}>
        <button className="GameButton">{btntext}</button>
      </div>
    </div>
  );
};

export default MyGame;
