import React from "react";
import MyGame from "../new game component/MyGame";
import "./index.css";
const FourCards = () => {
  return (
    <div>
      <div className="MyGameContainer">
        <MyGame
          heading="$800 WELCOME BONUS"
          text="Up to $800.00 in deposit bonuses! Claim the Miami Club Welcome Bonus and get 100% match, up to $100.00 on your first EIGHT purchases!"
          btntext="$800 BONUS!"
          source="https://miamiclubcasino.im/cms/images/promotions/WeeklyBonus.jpg"
        />
        <MyGame
          heading="NEW GAMES"
          text="The newest games at Miami Club casino! Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and more!"
          btntext="NEW GAMES!"
          source="https://miamiclubcasino.im/cms/images/promotions/10_ng_wheel-of-chance-quickspin_pg_332x141.png"
        />
        <MyGame
          heading="AT MIAMI CLUB"
          text="Another awesome Miami offer! Use coupon WILDLIFE to get 100% up to $200 plus 35 spins on the Wheel of Chance Quick Spin 5-reel!"
          btntext="LATEST BONUS"
          source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
        />
        <MyGame
          heading="$20 FREE!"
          text="Grab yourself $20.00 free, every month! Use Instant Coupon MIFREE20 Exclusively for Miami Club casino members"
          btntext="MIFREE20"
          source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
        />
      </div>
      <div className="tablet">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <MyGame
            heading="$800 WELCOME BONUS"
            text="Up to $800.00 in deposit bonuses! Claim the Miami Club Welcome Bonus and get 100% match, up to $100.00 on your first EIGHT purchases!"
            btntext="$800 BONUS!"
            source="https://miamiclubcasino.im/cms/images/promotions/WeeklyBonus.jpg"
          />
          <MyGame
            heading="NEW GAMES"
            text="The newest games at Miami Club casino! Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and more!"
            btntext="NEW GAMES!"
            source="https://miamiclubcasino.im/cms/images/promotions/10_ng_wheel-of-chance-quickspin_pg_332x141.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
          }}
        >
          <MyGame
            heading="THIS WEEK AT MIAMI CLUB"
            text="Another awesome Miami offer! Use coupon WILDLIFE to get 100% up to $200 plus 35 spins on the Wheel of Chance Quick Spin 5-reel!"
            btntext="LATEST BONUS"
            source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
          />
          <MyGame
            heading="$20 FREE!"
            text="Grab yourself $20.00 free, every month! Use Instant Coupon MIFREE20 Exclusively for Miami Club casino members!"
            btntext="MIFREE20"
            source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
          />
        </div>
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
            heading="$800 WELCOME BONUS"
            text="Up to $800.00 in deposit bonuses! Claim the Miami Club Welcome Bonus and get 100% match, up to $100.00 on your first EIGHT purchases!"
            btntext="$800 BONUS!"
            source="https://miamiclubcasino.im/cms/images/promotions/WeeklyBonus.jpg"
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
            heading="NEW GAMES"
            text="The newest games at Miami Club casino! Cleopatra's Keno, Safari Expedition, Wheel of Chance, Forest Frenzy, The Richest, and more!"
            btntext="NEW GAMES!"
            source="https://miamiclubcasino.im/cms/images/promotions/10_ng_wheel-of-chance-quickspin_pg_332x141.png"
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
            heading="THIS WEEK AT MIAMI CLUB"
            text="Another awesome Miami offer! Use coupon WILDLIFE to get 100% up to $200 plus 35 spins on the Wheel of Chance Quick Spin 5-reel!"
            btntext="LATEST BONUS"
            source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
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
            heading="$20 FREE!"
            text="Grab yourself $20.00 free, every month! Use Instant Coupon MIFREE20 Exclusively for Miami Club casino members!"
            btntext="MIFREE20"
            source="https://miamiclubcasino.im/cms/images/promotions/RebateBonus2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default FourCards;
