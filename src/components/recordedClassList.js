// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import RecordedClassData from "./recordedClassData"; // Update the path to your data file
// import "../styles/RecordedClassList.scss";
// import { useState } from "react";

// const RecordedClassList = ({ onSelectClass }) => {
//     const [selectedId, setSelectedId] = useState(RecordedClassData[0].id);

//     const handleClassClick = (selectedClass) => {
//         onSelectClass(selectedClass);
//         setSelectedId(selectedClass.id);
//     };

//     return (
//         <div className="rootRecordedClass">
//             <h2 className="heading">Recorded Classes</h2>
//             <ul className="customUl">
//                 {RecordedClassData.map((recordedClass) => (
//                     <li
//                         key={recordedClass.id}
//                         className={`recordedList ${
//                             selectedId === recordedClass.id ? "selected" : ""
//                         }`}
//                         onClick={() => handleClassClick(recordedClass)}
//                     >
//                         <FontAwesomeIcon
//                             icon={faPlayCircle}
//                             className="playIcon"
//                         />
//                         <p>{recordedClass.name}</p>
//                         <p>{recordedClass.duration}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default RecordedClassList;

import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import "../styles/RecordedClassList.scss";
import { db } from "../firebase"; // Update the path to your Firebase config

const RecordedClassList = ({ onSelectClass, selectedSubject }) => {
    const [classes, setClasses] = useState([]);
    console.log("Hii");
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedSubject) {
                    // Reference the collection for the selected subject
                    const subjectRef = collection(
                        db,
                        `subjects/${selectedSubject}/documents`
                    );

                    // Fetch all documents in the collection
                    const querySnapshot = await getDocs(subjectRef);

                    const data = [];
                    querySnapshot.forEach((doc) => {
                        // Push document data to the 'data' array
                        data.push({ id: doc.id, ...doc.data() });
                    });

                    setClasses(data);
                }
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchData();
    }, [selectedSubject]);

    const handleClassClick = (selectedClass) => {
        onSelectClass(selectedClass);
    };

    return (
        <div className="rootRecordedClass">
            <h2 className="heading">Selected Subject: {selectedSubject}</h2>
            <ul className="customUl">
                {classes.map((recordedClass) => (
                    <li
                        key={recordedClass.id}
                        onClick={() => handleClassClick(recordedClass)}
                    >
                        {/* Render your class data here */}
                        <p>{recordedClass.title}</p>
                        <p>{recordedClass.duration}</p>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordedClassList;
