import React from "react";
const Tabbutton = ({ title, source }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "15%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={source} alt="" />
      <div>{title}</div>
    </div>
  );
};

export default Tabbutton;
