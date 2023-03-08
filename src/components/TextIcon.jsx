import { Typography } from "@mui/material";
import React from "react";
import HomeIcon, { Style } from "@mui/icons-material";
const TextIcon = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 25px",
      }}
    >
      <Typography variant="inherit" sx={{ color: "#DBDADE" }}>
        HOME
      </Typography>
      <div>
        {/* <Style sx={{ color: "#DBDADE" }} /> */}
        <img src="../" alt="" />
      </div>
    </div>
  );
};

export default TextIcon;
