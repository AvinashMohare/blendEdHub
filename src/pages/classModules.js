// import React, { useState } from "react";
// import RecordedClassList from "../components/recordedClassList";
// import VideoPlayer from "../components/videoPlayer";
// import "../styles/ClassModules.scss";
// import recordedClassData from "../components/recordedClassData";

// const ClassModules = () => {
//     const [selectedClass, setSelectedClass] = useState(recordedClassData[0]);

//     const handleSelectClass = (selected) => {
//         setSelectedClass(selected);
//     };

//     return (
//         <div className="rootClassModule">
//             <div className="center">
//                 <h1>{selectedClass.name}</h1>
//                 <div className="video">
//                     <VideoPlayer selectedClass={selectedClass} />
//                 </div>
//             </div>
//             <div className="right">
//                 <RecordedClassList onSelectClass={handleSelectClass} />
//             </div>
//         </div>
//     );
// };

// export default ClassModules;

//Trial Directories
// import React from "react";
// import SubjectSelection from "../components/subjectSelection"; // Assuming SubjectSelection component file path

// const ClassModules = () => {
//     return (
//         <div className="classModules">
//             <SubjectSelection />
//         </div>
//     );
// };

// export default ClassModules;

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
