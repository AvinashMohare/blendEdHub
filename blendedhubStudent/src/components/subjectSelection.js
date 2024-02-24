// import React from "react";

// const SubjectSelection = ({ onSelectSubject }) => {
//     const handleSubjectSelection = (subject) => {
//         onSelectSubject(subject);
//     };

//     return (
//         <div className="subjectSelection">
//             <h1>Choose a Subject</h1>
//             <button onClick={() => handleSubjectSelection("Maths")}>
//                 Math
//             </button>
//             <button onClick={() => handleSubjectSelection("Science")}>
//                 Science
//             </button>
//             <button onClick={() => handleSubjectSelection("English")}>
//                 English
//             </button>
//         </div>
//     );
// };

// export default SubjectSelection;

import React from "react";
import "../styles/SubjectSelection.scss";

const SubjectSelection = ({ onSelectSubject }) => {
    const handleSubjectSelection = (subject) => {
        onSelectSubject(subject);
    };

    return (
        <div className="rootSelection">
            <h2 className="heading">Choose a Subject</h2>
            <div className="SubjectSelection">
                <div className="subject-each">
                    <button onClick={() => handleSubjectSelection("Physics")}>
                        Physics
                    </button>
                </div>
                <div className="subject-each">
                    <button onClick={() => handleSubjectSelection("Maths")}>
                        Maths
                    </button>
                </div>
                <div className="subject-each">
                    <button onClick={() => handleSubjectSelection("English")}>
                        English
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubjectSelection;
