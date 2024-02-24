import React, { useState, useEffect } from "react";
import RecordedClassList from "../components/recordedClassList";
import "../styles/ClassDesc.scss";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase";

const ClassDesc = ({ selectedSubject }) => {
    const [selectedClass, setSelectedClass] = useState("");
    const [quizScore, setQuizScore] = useState(0);
    const [gamesScoreData, setGamesScoreData] = useState(null); // State to hold fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the 'games_score' document from the 'users' collection
                const gamesScoreRef = doc(db, "users", "games_score"); // Replace 'games_score' with the actual document ID
                const gamesScoreDoc = await getDoc(gamesScoreRef);

                if (gamesScoreDoc.exists()) {
                    const data = gamesScoreDoc.data();
                    // Update state with fetched data
                    setGamesScoreData(data);
                    setQuizScore(data);

                    setQuizScore(data.game_score);
                } else {
                    console.log("Games Score document does not exist!");
                }
            } catch (error) {
                console.error("Error fetching games score document:", error);
            }
        };

        fetchData();
    }, []); // Run the effect only once on component mount

    const handleSelectClass = (selected) => {
        setSelectedClass(selected);
    };

    return (
        <div className="rootClassModule">
            <div className="center">
                <RecordedClassList
                    selectedSubject={selectedSubject}
                    onSelectClass={handleSelectClass}
                />
            </div>
            <a href="https://modulequiz.vercel.app/" target="__blank_">
                <div className="buttonQuiz">
                    <p>Quiz 1, Score : {quizScore}</p>
                </div>
            </a>
        </div>
    );
};

export default ClassDesc;
