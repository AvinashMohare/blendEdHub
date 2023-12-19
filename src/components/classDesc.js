import React, { useState } from "react";
import RecordedClassList from "../components/recordedClassList";
import VideoPlayer from "../components/videoPlayer";
import "../styles/ClassModules.scss";

const ClassDesc = ({ selectedSubject }) => {
    const [selectedClass, setSelectedClass] = useState("");

    const handleSelectClass = (selected) => {
        setSelectedClass(selected);
    };

    return (
        <div className="rootClassModule">
            <div className="center">
                <h1>
                    {selectedClass ? selectedClass.name : "No class selected"}
                </h1>
                <div className="video">
                    <VideoPlayer selectedClass={selectedClass} />
                </div>
            </div>
            <div className="right">
                <RecordedClassList
                    selectedSubject={selectedSubject}
                    onSelectClass={handleSelectClass}
                />
            </div>
        </div>
    );
};

export default ClassDesc;
