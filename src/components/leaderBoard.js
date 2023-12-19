import React from "react";
import "../styles/teacher.scss"
const Leaderboard = ({ name, rank }) => {
  return (
    <div className="leader-card">
      <h3>{name}</h3>
      <h2>{rank}</h2>
    </div>
  );
};

export default Leaderboard;
