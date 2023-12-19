import React, { useState } from "react";
import { Card2 } from "../components/Card2.js";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/teacher.scss";
import { blue } from "@mui/material/colors";

const Announcement = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div style={{ backgroundColor: "white", width: 800, padding: 20 }}>
      <h2>ANNOUNCEMENTS</h2>
      <div className="mode-main">
        {/* {MODES.map((card, index) => ( */}
        <div className="modes">
          <div
            className="mode-card"
            style={{ padding: 20, backgroundColor: 'orange',border:0,color:"white" }}
          >
            20/12/23 is the Final Semester test
          </div>
          <div
            className="mode-card"
            style={{ padding: 20, backgroundColor: ' #ffca92',border:0,color:"black"}}
          >
            20/12/23 is the Final Semester test of class 10th
          </div>

          {/* <IoIosArrowUp
            size={30}
            style={{ margin: 2, padding: 2 }}
            onClick={handleClick}
          />{" "}
          {isExpanded && (
            <div className="expandible">
              <Card2 />
            </div> */}
          {/* )} */}
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Announcement;
