import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./css/MinorBox.css";

function MinorBox()  {
  return (
  <div className="minorBox">
    <div className="minorBox_info">
      <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    <div className="minorBox_minor">
<h5>what is your question or link</h5>
       </div>
      
  </div>
  );
}

export default MinorBox;