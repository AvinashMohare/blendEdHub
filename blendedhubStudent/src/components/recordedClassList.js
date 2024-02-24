import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import "../styles/RecordedClassList.scss";
import { db } from "../firebase"; // Update the path to your Firebase config
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const RecordedClassList = ({ onSelectClass, selectedSubject }) => {
    const [classes, setClasses] = useState([]);
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
                        className="liRecordedClass"
                        key={recordedClass.id}
                        onClick={() => handleClassClick(recordedClass)}
                    >
                        <a href="http://127.0.0.1:5000/" target="__blank_">
                            <div className="card">
                                <img
                                    src="https://media.istockphoto.com/id/1322530406/photo/stack-of-hardcover-text-books-on-white-background-isolated-3d-illustration.jpg?s=612x612&w=0&k=20&c=8WyU1MhfeK7YOai1BZJdkH7TPxNoWAVBdCuwoix9Ock="
                                    alt="Avatar"
                                    className="imgBook"
                                />
                                <div className="container">
                                    <FontAwesomeIcon
                                        icon={faPlayCircle}
                                        className="playIcon"
                                    />

                                    <p>{recordedClass.title}</p>
                                    <p>{recordedClass.duration}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecordedClassList;
