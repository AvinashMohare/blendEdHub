import Card from "../components/card.js";
import React from "react";
import { STUDY } from "../components/const";
import Sidebar from "../components/sidebar.js";
import "../styles/studymaterial.scss";
function Studymaterial() {
  return (
    <div className="study">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div>
        <h1>Study Material</h1>
        <div className="study-search">
          <div className="study-search-bar">
            <input placeholder="search"></input>
          </div>
        </div>
        {/* icons  */}
        <div className="cards">
          {STUDY.map((card, index) => (
            <div className="card-each">
              <Card key={index} {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Studymaterial;
