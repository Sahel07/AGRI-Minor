import React from "react";
import MinorHeader from "./MinorHeader";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import "./css/Minor.css";

function Minor()  {
  return (
    <div className="Minor">
      <MinorHeader />
<div className="minor_contents">
  <div className="minor_contents">
         <Sidebar />
          <Feed />
        <Widget />
  </div>
</div>
      
    </div>
  );
}

export default Minor;
