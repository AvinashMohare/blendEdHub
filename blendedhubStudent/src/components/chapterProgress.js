import React from "react";
import "../styles/ChapterProgress.scss"; // Import your SCSS file

const ChapterProgress = () => {
    // Example array of chapters with progress
    const chapters = [
        { name: "Chapter 1", progress: 30, subject: "English" },
        { name: "Chapter 2", progress: 60, subject: "Maths" },
        { name: "Chapter 3", progress: 90, subject: "Physics" },
        { name: "Chapter 1", progress: 30, subject: "Chemistry" },
        { name: "Chapter 2", progress: 60, subject: "Hindi" },
        { name: "Chapter 3", progress: 90, subject: "Sanskrit" },
    ];

    return (
        <div className="chapter-progress">
            <h3 className="heading">Completion Progress</h3>
            {chapters.map((chapter, index) => (
                <div className="chapter-progress__item" key={index}>
                    <div className="chapter-progress__label">
                        <h4>{chapter.subject}</h4>
                        <p> {chapter.name}</p>
                        <p> {chapter.progress}%</p>
                    </div>
                    <div className="chapter-progress__bar-container">
                        <div
                            className="chapter-progress__bar"
                            style={{ width: `${chapter.progress}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChapterProgress;
