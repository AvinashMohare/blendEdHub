import React, { useState } from "react";

const Doubts = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <h2>Doubts</h2>
            <div>
                <button onClick={() => handleOptionSelect("Live Classroom")}>
                    Live Classroom
                </button>
                <button onClick={() => handleOptionSelect("Ask ChatGPT")}>
                    Ask ChatGPT
                </button>
            </div>
            {/* Based on the selected option, render different content */}
            {selectedOption === "Live Classroom" && (
                <div>
                    {/* Content for Live Classroom */}
                    <h3>Live Classroom Content</h3>
                    {/* You can add more components or content specific to Live Classroom */}
                </div>
            )}
            {selectedOption === "Ask ChatGPT" && (
                <div>
                    {/* Content for Ask ChatGPT */}
                    <h3>Ask ChatGPT Content</h3>
                    {/* You can add more components or content specific to Ask ChatGPT */}
                </div>
            )}
        </div>
    );
};

export default Doubts;
