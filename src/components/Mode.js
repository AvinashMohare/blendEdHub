import React, { useState } from "react";
import { MODES } from "../components/const.js";
import { Card2 } from "../components/Card2.js";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/teacher.scss";

const Modes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="mode-main" style={{ backgroundColor: "white", width: 800, padding: 20 }}>
      <h2>ROTATIONAL MODES </h2>
      <div className="modes">
        {MODES.map((card, index) => (
          <div className={index === 1 ? "mode-card special-background" : "mode-card"}>
            <h2>{card.title}</h2>
            <h3>{card.num}</h3>
            {/* <IoIosArrowUp
              size={30}
              style={{ margin: 2, padding: 2 }}
              onClick={handleClick}
            />{" "} */}
            {isExpanded && (
              <div className="expandible">
                <Card2 />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modes;
