import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img src="hf.jpg" alt="" />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Crops</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Fertilizer</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Crop Diseases</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>HortiCulture</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Health</p>
      </div>



      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img src="logo192.png" alt="" />
        <p>Education</p>
      </div>

      <div className="sidebarOption discoverSpaces">
        <p className="text">Discover Spaces</p>
        <FontAwesomeIcon icon={faPlus} className="plusIcon" />
      </div>
    </div>
  );
}

export default SidebarOptions;
