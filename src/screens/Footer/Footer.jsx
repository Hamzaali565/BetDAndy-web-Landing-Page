import React from "react";
import BottomBarComponent from "../../components/BottomBarComponent/BottomBarComponent";
import "./Footer.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Footer = () => {
  // const [convertedText, setConvertedText] = useState("");
  // const [language, setLanguage] = useState("");
  // const [texts, setTexts] = useState("");

  // console.log("====================================");
  // console.log(convertedText);
  // console.log("====================================");
  const Languages = [
    { label: "en" },
    { label: "th" },
    { label: "Turkish" },
    { label: "اردو" },
    { label: "हिंदी" },
  ];
  return (
    <div className="FooterContainer">
      <BottomBarComponent />
      <div className="content">
        {/* <div className="AutocompleteContainer"> */}
        <Autocomplete
          // onChange={(e, val) => {
          //   console.log("====================================");
          //   setLanguage(val);
          //   console.log("====================================");
          // }}
          disablePortal
          id="combo-box-demo"
          options={Languages.map((item) => item.label)}
          className="Autocomplete"
          // sx={{ width: 300, bgcolor: "white" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Language" />
          )}
        />
        <div className="CopyRightText" id="CR">
          "Copyright © 2023 2023 BetDandy. All Rights Reserved. You must be
          atleast 18 years of age to play."
        </div>
      </div>
    </div>
  );
};

export default Footer;
