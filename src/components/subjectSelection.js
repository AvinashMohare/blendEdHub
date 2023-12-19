import React from "react";

const SubjectSelection = ({ onSelectSubject }) => {
    const handleSubjectSelection = (subject) => {
        onSelectSubject(subject);
    };

    return (
        <div className="subjectSelection">
            <h1>Choose a Subject</h1>
            <button onClick={() => handleSubjectSelection("Maths")}>
                Math
            </button>
            <button onClick={() => handleSubjectSelection("Science")}>
                Science
            </button>
            <button onClick={() => handleSubjectSelection("English")}>
                English
            </button>
        </div>
    );
};

export default SubjectSelection;
