import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faEnvelope,
    faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Dashboard.scss";
import Leaderboard from "../components/leaderboard";
import ChapterProgress from "../components/chapterProgress";
import Quizes from "../components/quizes";
import Attendance from "../components/attendance";

function Dashboard() {
    return (
        <div className="rootDashboard">
            <div className="centerDashboard">
                <div className="header">
                    <h2>Dashboard</h2>
                </div>

                <div className="searchContainer">
                    <div className="search-bar">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="search-bar__icon"
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-bar__input"
                        />
                    </div>

                    <div className="icons">
                        <FontAwesomeIcon
                            icon={faBell}
                            style={{
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: 2,
                            }}
                        />
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>

                <div className="announcements">
                    <h3>Announcement</h3>
                    <div className="msgContainer">
                        <p className="msg">
                            Team Polaris is participating in Smart India
                            Hackathon Grand Finale 2023 !!
                        </p>

                        {/* <div className="button">
                            <p>Start</p>
                        </div> */}
                    </div>
                </div>

                <div className="chartsContainer">
                    <div className="leaderboardContainer">
                        <Leaderboard />
                    </div>

                    <div className="progressContainer">
                        <ChapterProgress />
                    </div>
                </div>

                <div className="chartsContainer">
                    <div className="leaderboardContainer">
                        <Quizes />
                    </div>
                    <div className="progressContainer">
                        <Attendance />
                    </div>
                </div>
            </div>

            {/* <div className="right"></div> */}
        </div>
    );
}

export default Dashboard;
