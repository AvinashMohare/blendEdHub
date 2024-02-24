import React, { useState, useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ReactPlayer from "react-player";

const Recommendations = () => {
    const [userData, setUserData] = useState(null);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userDocRef = doc(db, "users", "2Q1R1apl82MeePmSzWeY");
                const docSnapshot = await getDoc(userDocRef);

                if (docSnapshot.exists()) {
                    const userData = {
                        id: docSnapshot.id,
                        ...docSnapshot.data(),
                    };
                    setUserData(userData);

                    // Calculate average score
                    const quizScore = userData.quizScore;
                    const attentionScore = userData.attentionScore;
                    console.log(quizScore);
                    console.log(attentionScore);
                    const avgScore = (quizScore + attentionScore) / 2;

                    if (avgScore < 40) {
                        // Fetch recommendations if average score is less than 40
                        const recommendationsRef = collection(
                            db,
                            "recommendations/Avinash/documents"
                        );
                        const querySnapshot = await getDocs(recommendationsRef);

                        const recommendationsData = [];
                        querySnapshot.forEach((doc) => {
                            recommendationsData.push({
                                id: doc.id,
                                ...doc.data(),
                            });
                        });

                        setRecommendations(recommendationsData);
                    }
                } else {
                    console.log("No such document exists!");
                }
            } catch (error) {
                console.error("Error fetching user document:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="recommendations">
            {recommendations.length > 0 && (
                <div>
                    <h3>Recommendations</h3>
                    <ul>
                        {recommendations.map((recommendation) => (
                            <>
                                <h1>{recommendation.title}</h1>
                                <ReactPlayer url={recommendation.videoURL} />
                            </>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Recommendations;
