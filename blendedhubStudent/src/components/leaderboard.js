import React from "react";
import "../styles/Leaderboard.scss"; // Import your SCSS file

const childrenData = [
    {
        id: 1,
        name: "Avinash Mohare",
        score: 350,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 2,
        name: "Ashwin Navnage",
        score: 200,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 3,
        name: "Sanika Peshkar",
        score: 150,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 4,
        name: "Aditi Dhule",
        score: 100,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
        id: 5,
        name: "Harsh Wardhan",
        score: 50,
        imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    },
];

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <h3 className="heading">Leader board</h3>
            {childrenData.map((child) => (
                <div key={child.id} className="leaderboard__card">
                    <img
                        src={child.imageUrl}
                        alt={child.name}
                        className="leaderboard__image"
                    />
                    <div className="leaderboard__details">
                        <h3 className="leaderboard__name">{child.name}</h3>
                        <p className="leaderboard__score">
                            Score: {child.score}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Leaderboard;
