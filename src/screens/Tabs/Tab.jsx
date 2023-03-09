import React, { useState } from "react";
// import Micheal from "../../assets/Micheal";
import Tabbutton from "../../components/TabButton";
import "./index.css";
import Tab1 from "./Tab1/Tab1";
const Tab = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const FirstTab = () => {
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab1(true);
  };
  const SecondTab = () => {
    setTab2(true);
    setTab3(false);
    setTab4(false);
    setTab1(false);
  };
  const ThirdTab = () => {
    setTab3(true);
    setTab2(false);
    setTab4(false);
    setTab1(false);
  };
  const FourthTab = () => {
    setTab4(true);
    setTab2(false);
    setTab3(false);
    setTab1(false);
  };
  return (
    <div className="container8">
      <div className="container9">
        <div className="line" />
        <div className="fourButtons">
          <Tabbutton
            id="button1"
            title="Feactured Games"
            source="https://www.slotocash.im/images/icons/white_diamond.png"
            onclick={() => {
              FirstTab();
            }}
          />
          <Tabbutton
            title="Slots Games"
            source="https://www.slotocash.im/images/icons/white_cherry.png"
            onclick={() => {
              SecondTab();
            }}
          />
          <Tabbutton
            title="Other Games"
            source="https://www.slotocash.im/images/icons/white_seven.png"
            onclick={() => {
              ThirdTab();
            }}
          />
          <Tabbutton
            title="New Games"
            source="https://www.slotocash.im/images/icons/white_diamond.png"
            onclick={() => {
              FourthTab();
            }}
          />
        </div>
        <div className="tabs">
          {/* tab1 */}
          {tab1 ? (
            <Tab1
              source1={
                "https://www.slotocash.im/images/games/featuredgames/santa_strikes_back_375x281.jpg"
              }
              source2={
                "https://www.slotocash.im/images/games/featuredgames/naughtyornice_375x281.jpg"
              }
              source3={
                "https://www.slotocash.im/images/games/featuredgames/luchalibre_375x281.jpg"
              }
              source4={
                "https://www.slotocash.im/images/games/featuredgames/cashbandits_375x281.jpg"
              }
              source5={
                "https://www.slotocash.im/images/games/featuredgames/doubleyaluck_375x281.jpg"
              }
              source6={
                "https://www.slotocash.im/images/games/featuredgames/three_stooges_ii_375x281.jpg"
              }
              source7={
                "https://www.slotocash.im/images/games/featuredgames/sweet16_375x281.jpg"
              }
              source8={
                "https://www.slotocash.im/images/games/featuredgames/voodoo_magic_375x281.jpg"
              }
            />
          ) : null}
          {/* tab2 */}
          {tab2 ? (
            <Tab1
              source1={
                "https://www.slotocash.im/images/games/slots/football_frenzy_375x281.jpg"
              }
              source2={
                "https://www.slotocash.im/images/games/slots/spiritinca_thumbnail.jpg"
              }
              source3={
                "https://www.slotocash.im/images/games/slots/jackpotpinatas_thumbnail.jpg"
              }
              source4={
                "https://www.slotocash.im/images/games/slots/dreamrun_thumbnail.jpg"
              }
              source5={
                "https://www.slotocash.im/images/games/slots/bubblebubble_thumbnail.jpg"
              }
              source6={
                "https://www.slotocash.im/images/games/slots/crystalwaters_thumbnail.jpg"
              }
              source7={
                "https://www.slotocash.im/images/games/slots/cleopatra_thumbnail.jpg"
              }
              source8={
                "https://www.slotocash.im/images/games/slots/super6_thumbnail.jpg"
              }
            />
          ) : null}
          {/* tab3 */}
          {tab3 ? (
            <Tab1
              source1={
                "https://www.slotocash.im/images/games/othergames/treasuretree_thumbnail.jpg"
              }
              source2={
                "https://www.slotocash.im/images/games/othergames/keno_thumbnail.jpg"
              }
              source3={
                "https://www.slotocash.im/images/games/othergames/american_roulette_thumbnail.jpg"
              }
              source4={
                "https://www.slotocash.im/images/games/othergames/caribbean_stud_thumbnail.jpg"
              }
              source5={
                "https://www.slotocash.im/images/games/othergames/craps_thumbnail.jpg"
              }
              source6={
                "https://www.slotocash.im/images/games/othergames/jokerpoker_thumbnail.jpg"
              }
              source7={
                "https://www.slotocash.im/images/games/othergames/blackjack_thumbnail.jpg"
              }
              source8={
                "https://www.slotocash.im/images/games/othergames/bingo_thumbnail.jpg"
              }
            />
          ) : null}
          {/* tab4 */}
          {tab4 ? (
            <Tab1
              source1={
                "https://www.slotocash.im/images/games/newgames/fishcatch_375x281.jpg"
              }
              source2={
                "https://www.slotocash.im/images/games/newgames/fuchi_375x281.jpg"
              }
              source3={
                "https://www.slotocash.im/images/games/newgames/ghostship_375x281.jpg"
              }
              source4={
                "https://www.slotocash.im/images/games/newgames/izombie_375x281.jpg"
              }
              source5={
                "https://www.slotocash.im/images/games/newgames/naughtyorniceiii_375x281.jpg"
              }
              source6={
                "https://www.slotocash.im/images/games/newgames/plentifultreasure_375x281.jpg"
              }
              source7={
                "https://www.slotocash.im/images/games/newgames/scubafishing_375x281.jpg"
              }
              source8={
                "https://www.slotocash.im/images/games/newgames/wildwizards_375x281.jpg"
              }
            />
          ) : null}
          <div className="btContainer">
            <button className="tabButton">SEE ALL GAMES</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
