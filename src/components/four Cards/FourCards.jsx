import React from "react";
import MyGame from "../new game component/MyGame";
import "./index.css";
const FourCards = () => {
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  const MoveTo = () => {
    window.open("https://miamiclubcasino.im/?c=464176&s=128413875");
  };
  return (
    <div>
      <div className="MyGameContainer">
        <MyGame
          onClick={MoveTo}
          heading="Miami Club"
          text="Get up to $800.00 in deposit bonuses by claiming the Miami Club Welcome Bonus. On your first eight purchases, you'll receive a 100% match, up to $100.00 each time. Lets enjoy with Miami"
          btntext="Miami Club"
          source={require("../../images/CardImages/1.jpg")}
        />
        <MyGame
          onClick={Move}
          heading="Sloto’Cash"
          text="Discover the latest additions to the game selection at Miami Club Casino, including Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and many more exciting games!"
          btntext="Sloto’Cash"
          source={require("../../images/CardImages/2.png")}
        />
        {/* <MyGame
          onClick={Move}
          heading="AT MIAMI CLUB"
          text="Take advantage of another amazing offer from Miami Club by using coupon code WILDLIFE. With this code, you can receive a 100% match bonus up to $200 and 35 spins on the Wheel."
          btntext="LATEST BONUS"
          source={require("../../images/CardImages/3.jpg")}
        />
        <MyGame
          onClick={MoveTo}
          heading="$20 FREE!"
          text="Miami Club casino members can take advantage of the exclusive Instant Coupon MIFREE20 to receive $20.00 free every month! Don't miss out on this great opportunity to grab some extra cash."
          btntext="MIFREE20"
          source={require("../../images/CardImages/1.jpg")} */}
        {/* /> */}
      </div>
      <div className="tablet">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <MyGame
            onClick={MoveTo}
            heading="Miami Club"
            text="Up to $800.00 in deposit bonuses! Claim the Miami Club Welcome Bonus and get 100% match, up to $100.00 on your first EIGHT purchases!"
            btntext="Miami Club"
            source={require("../../images/CardImages/1.jpg")}
          />
          <MyGame
            onClick={Move}
            heading="NEW GAMES"
            text="The newest games at Miami Club casino! Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and more!"
            btntext="Sloto’Cash"
            source={require("../../images/CardImages/2.png")}
          />
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <MyGame
            onClick={Move}
            heading="THIS WEEK AT MIAMI CLUB"
            text="Another awesome Miami offer! Use coupon WILDLIFE to get 100% up to $200 plus 35 spins on the Wheel of Chance Quick Spin 5-reel!"
            btntext="LATEST BONUS"
            source={require("../../images/CardImages/3.jpg")}
          />
          <MyGame
            onClick={MoveTo}
            heading="$20 FREE!"
            text="Grab yourself $20.00 free, every month! Use Instant Coupon MIFREE20 Exclusively for Miami Club casino members!"
            btntext="MIFREE20"
            source={require("../../images/CardImages/1.jpg")}
          />
        </div> */}
      </div>
      <div className="mobile">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MyGame
            onClick={MoveTo}
            heading="Miami Club"
            text="Up to $800.00 in deposit bonuses! Claim the Miami Club Welcome Bonus and get 100% match, up to $100.00 on your first EIGHT purchases!"
            source={require("../../images/CardImages/1.jpg")}
            btntext="Miami Club"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MyGame
            onClick={Move}
            heading="NEW GAMES"
            text="The newest games at Miami Club casino! Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and more!"
            source={require("../../images/CardImages/2.png")}
            btntext="Sloto’Cash"
          />
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MyGame
            onClick={Move}
            heading="THIS WEEK AT MIAMI CLUB"
            text="Another awesome Miami offer! Use coupon WILDLIFE to get 100% up to $200 plus 35 spins on the Wheel of Chance Quick Spin 5-reel!"
            source={require("../../images/CardImages/3.jpg")}
            btntext="LATEST BONUS"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MyGame
            onClick={MoveTo}
            heading="$20 FREE!"
            text="Grab yourself $20.00 free, every month! Use Instant Coupon MIFREE20 Exclusively for Miami Club casino members!"
            source={require("../../images/CardImages/1.jpg")}
            btntext="MIFREE20"
          />
        </div> */}
      </div>
    </div>
  );
};

export default FourCards;
