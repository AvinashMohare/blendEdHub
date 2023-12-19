import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import "../styles/RecordedClassList.scss";
import { db } from "../firebase"; // Update the path to your Firebase config
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

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
            <h2 className="heading">Assigned Modules </h2>
            <ul className="customUl">
                {classes.map((recordedClass) => (
                    <li
                        key={recordedClass.id}
                        onClick={() => handleClassClick(recordedClass)}
                        className="recordedList"
                    >
                        <FontAwesomeIcon
                            icon={faPlayCircle}
                            className="playIcon"
                        />
                        <p>{recordedClass.title}</p>
                        <p>{recordedClass.duration}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordedClassList;
