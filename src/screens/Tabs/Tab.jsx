import React, { useState, useEffect } from "react";
// import Micheal from "../../assets/Micheal";
import Tabbutton from "../../components/TabButton";
import "./index.css";
import Tab1 from "./Tab1/Tab1";
import AOS from "aos";
import "aos/dist/aos.css";
const Tab = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  // useEffect(() => {
  //   AOS.init({ duration: 1500 });
  // }, []);
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
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
      <div
        className="container9"
        data-aos="slide-right"
        data-aos-duration="500"
      >
        <div className="line" />
        <div className="fourButtons">
          <Tabbutton
            Mycolor={tab1 ? "gray" : " #3A3A3A"}
            id="button1"
            title="Featured Games"
            source={require("../../images/TabButtonIcons/2.png")}
            // source="https://www.slotocash.im/images/icons/white_diamond.png"
            onclick={() => {
              FirstTab();
            }}
          />
          <Tabbutton
            Mycolor={tab2 ? "gray" : " #3A3A3A"}
            title="Slots Games"
            source={require("../../images/TabButtonIcons/1.png")}
            // source="https://www.slotocash.im/images/icons/white_cherry.png"
            onclick={() => {
              SecondTab();
            }}
          />
          <Tabbutton
            Mycolor={tab3 ? "gray" : " #3A3A3A"}
            title="Other Games"
            source={require("../../images/TabButtonIcons/3.png")}
            // source="https://www.slotocash.im/images/icons/white_seven.png"
            onclick={() => {
              ThirdTab();
            }}
          />
          <Tabbutton
            Mycolor={tab4 ? "gray" : " #3A3A3A"}
            title="New Games"
            source={require("../../images/TabButtonIcons/2.png")}
            // source="https://www.slotocash.im/images/icons/white_diamond.png"
            onclick={() => {
              FourthTab();
            }}
          />
        </div>
        <div className="tabs">
          {/* tab1 */}
          {tab1 ? (
            <Tab1
              source1={require("../../images/Tab1/1.jpg")}
              source2={require("../../images/Tab1/2.jpg")}
              source3={require("../../images/Tab1/3.jpg")}
              source4={require("../../images/Tab1/4.jpg")}
              source5={require("../../images/Tab1/5.jpg")}
              source6={require("../../images/Tab1/6.jpg")}
              source7={require("../../images/Tab1/7.jpg")}
              source8={require("../../images/Tab1/8.jpg")}
            />
          ) : null}
          {/* tab2 */}
          {tab2 ? (
            <Tab1
              source1={require("../../images/Tab2/1.jpg")}
              source2={require("../../images/Tab2/2.jpg")}
              source3={require("../../images/Tab2/3.jpg")}
              source4={require("../../images/Tab2/4.jpg")}
              source5={require("../../images/Tab2/5.jpg")}
              source6={require("../../images/Tab2/6.jpg")}
              source7={require("../../images/Tab2/7.jpg")}
              source8={require("../../images/Tab2/8.jpg")}
            />
          ) : null}
          {/* tab3 */}
          {tab3 ? (
            <Tab1
              source1={require("../../images/Tab3/1.jpg")}
              source2={require("../../images/Tab3/2.jpg")}
              source3={require("../../images/Tab3/3.jpg")}
              source4={require("../../images/Tab3/4.jpg")}
              source5={require("../../images/Tab3/5.jpg")}
              source6={require("../../images/Tab3/6.jpg")}
              source7={require("../../images/Tab3/7.jpg")}
              source8={require("../../images/Tab3/8.jpg")}
            />
          ) : null}
          {/* tab4 */}
          {tab4 ? (
            <Tab1
              source1={require("../../images/Tab4/1.jpg")}
              source2={require("../../images/Tab4/2.jpg")}
              source3={require("../../images/Tab4/3.jpg")}
              source4={require("../../images/Tab4/4.jpg")}
              source5={require("../../images/Tab4/5.jpg")}
              source6={require("../../images/Tab4/6.jpg")}
              source7={require("../../images/Tab4/7.jpg")}
              source8={require("../../images/Tab4/8.jpg")}
            />
          ) : null}
          <div className="btContainer" onClick={Move}>
            <button className="tabButton" style={{ fontWeight: "600" }}>
              SEE ALL GAMES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
