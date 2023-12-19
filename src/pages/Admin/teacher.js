import React, { useState } from "react";
import "../../styles/teacher.scss";
import Dashboard from "../dashboard.js";
import Modes from "../../components/Mode.js";
import Announcement from "../../components/announcement.js";
import SubjectSelection from "../../components/SubjectSelection.js";
import Quiz from "../../components/Quiz.js";

function Teacher() {
 const [isExpanded, setIsExpanded] = useState(false);
 const handleClick = () => {
    setIsExpanded(!isExpanded);
 };

 return (
    <>
      <div className="teacher">
        <div className="sidebar">
          <Dashboard />
        </div>
        <div>
          <h1>TEACHER'S DASHBOARD</h1>
          <div className="center">
            <Announcement />
            <Modes />
            <div className="attendence-main">
              <h2>ATTENDENCE</h2>
              <div className="attendence">
                <div className="attendence-card">
                 <h4>Present</h4>
                 <h5>25</h5>
                </div>
                <div className="attendence-card">
                 <h4>Absent</h4>
                 <h5>35</h5>
                </div>
                <div className="attendence-card">
                 <h4>Absent</h4>
                 <h5>35</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course" >
          <SubjectSelection/>
          <Quiz/>
        </div>
      </div>
    </>
 );
}

export default Teacher;