import React, { useState } from "react";
import SubjectSelection from "../components/subjectSelection";
import ClassDesc from "../components/classDesc"; // Assuming ClassDesc component file path
import "../styles/ClassModules.scss";

const ClassModules = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleSelectSubject = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="classModules">
            {!selectedSubject ? (
                <div className="subjectSelection">
                    <SubjectSelection onSelectSubject={handleSelectSubject} />
                </div>
            ) : (
                <div className="classDesc">
                    <ClassDesc selectedSubject={selectedSubject} />
                </div>
            )}
        </div>
    );
};

export default ClassModules;
