import React from "react";
import "./index.css";
const Banner = () => {
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  return (
    <div>
      <div className="container">
        <div className="heading1">BetDandy CASINO</div>
        <div className="heading2">Creating Winners since 2012!</div>
        <button className="button1" onClick={Move}>
          PLAY NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
