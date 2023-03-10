import React from "react";
import BottomBarComponent from "../../components/BottomBarComponent/BottomBarComponent";
import "./Footer.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Footer = () => {
  const Languages = [
    { label: "Enaglish" },
    { label: "italiana" },
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
          disablePortal
          id="combo-box-demo"
          options={Languages}
          className="Autocomplete"
          // sx={{ width: 300, bgcolor: "white" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Language" />
          )}
        />
        {/* </div> */}
        <div className="CopyRightText">
          Copyright © 2023 Sloto'Cash. All Rights Reserved. You must be at least
          18 years of age to play.
        </div>
      </div>
    </div>
  );
};

export default Footer;
