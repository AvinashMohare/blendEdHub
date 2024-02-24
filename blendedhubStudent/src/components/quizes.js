import React from "react";
import "../styles/Quizes.scss"; // Import your SCSS file

const childrenData = [
    {
        id: 1,
        name: "Chemistry",
        chapter: 4,
        status: "Pending", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Physics",
        chapter: 1,
        status: "Pending", // Replace with actual image URL
    },
    {
        id: 3,
        name: "Maths",
        chapter: 2,
        status: "Pending", // Replace with actual image URL
    },
];

const Quizes = () => {
    return (
        <div className="quizes">
            <h3 className="heading">Quizzes</h3>
            {childrenData.map((child) => (
                <div key={child.id} className="quizes__card">
                    <div className="quizes_info">
                        <h3>{child.name}</h3>
                        <p>Chapter {child.chapter}</p>
                    </div>
                    <div className="quizes__details">
                        <h3 className="quizes__name">{child.status}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Quizes;
