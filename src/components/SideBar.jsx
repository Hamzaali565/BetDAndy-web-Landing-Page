import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import TextIcon from "./TextIcon";

const SideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src={"https://miamiclubcasino.im/cms/images/mc_logo.png"}
          width="220"
          height="100"
          alt=""
        />
      </div>
      <TextIcon />
      <TextIcon />
      <TextIcon />
    </div>
  );
};

export default SideBar;
