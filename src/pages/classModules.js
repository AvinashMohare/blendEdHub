import React, { useState } from "react";
import SubjectSelection from "../components/subjectSelection";
import ClassDesc from "../components/classDesc"; // Assuming ClassDesc component file path

const ClassModules = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const handleSelectSubject = (subject) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="classModules">
            {!selectedSubject ? (
                <SubjectSelection onSelectSubject={handleSelectSubject} />
            ) : (
                <ClassDesc selectedSubject={selectedSubject} />
            )}
        </div>
    );
};

export default ClassModules;
