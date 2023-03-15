import React, { useEffect } from "react";
import MerginDescription from "../../components/Description/MerginDescription";
import NewMerge from "../../components/NewMerge";
import "./index.css";
const Description = () => {
  return (
    <div className="descriptionContain1">
      <div className="descriptionContain2">
        {/* <MerginDescription /> */}
        <NewMerge />
      </div>
    </div>
  );
};

export default Description;
