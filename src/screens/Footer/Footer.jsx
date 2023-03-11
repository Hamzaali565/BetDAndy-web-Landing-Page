import React, { useEffect, useState } from "react";
import BottomBarComponent from "../../components/BottomBarComponent/BottomBarComponent";
import "./Footer.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Footer = () => {
  const [convertedText, setConvertedText] = useState("");
  const [language, setLanguage] = useState("");
  const [texts, setTexts] = useState("");
  // function googleTranslateElementInit() {
  //   new google.translate.TranslateElement(
  //     { pageLanguage: "en" },
  //     "google_translate_element"
  //   );
  console.log("====================================");
  console.log(convertedText);
  console.log("====================================");
  // }
  useEffect(() => {
    const response = axios
      .post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: "",
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      )
      .then((response) => {
        setConvertedText(response.data.data.translations[0].translatedText);
      })
      .catch((err) => {
        console.log("rest api error", err);
      });
  }, [language]);

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
          onChange={(e, val) => {
            console.log("====================================");
            setLanguage(val);
            console.log("====================================");
          }}
          disablePortal
          id="combo-box-demo"
          options={Languages.map((item) => item.label)}
          className="Autocomplete"
          // sx={{ width: 300, bgcolor: "white" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Language" />
          )}
        />
        <div id="google_translate_element" style={{ color: "white" }}>
          {convertedText}
        </div>
        {/* </div> */}
        <div
          className="CopyRightText"
          onChange={(e) => setTexts(e.target.value)}
        >
          Copyright © 2023 2023 BetDandy. All Rights Reserved. You must be at
          least 18 years of age to play.
        </div>
      </div>
    </div>
  );
};

export default Footer;
