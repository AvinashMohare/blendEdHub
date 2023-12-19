import React from "react";
import "../styles/SubjectSelection.scss";
const SubjectSelection = ({ onSelectSubject }) => {
  const handleSubjectSelection = (subject) => {
    onSelectSubject(subject);
  };

  return (
    <>
    <div className="profile">
        <img src="./chem.jpg" alt="profile here"></img>
        <h3>Aditi Dalvi</h3>
    </div>
     <div>
    <h2>Choose a Subject</h2>
      <div className="SubjectSelection">
        <div className="subject-each">
          <button onClick={() => handleSubjectSelection("Maths")}>Math</button>
        </div>
        <div className="subject-each">
          <button onClick={() => handleSubjectSelection("Science")}>
            Science
          </button>
        </div>
        <div className="subject-each">
          <button onClick={() => handleSubjectSelection("English")}>
            English
          </button>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default SubjectSelection;
