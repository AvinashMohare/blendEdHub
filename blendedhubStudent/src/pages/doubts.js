import React, { useState } from "react";
import ChatGPT from "../components/chatgpt";
import "../styles/Doubts.scss";

const Doubts = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="rootDoubts">
            {/* <h2>Doubts</h2>
            <div>
                <button onClick={() => handleOptionSelect("Live Classroom")}>
                    Live Classroom
                </button>
                <button onClick={() => handleOptionSelect("Ask ChatGPT")}>
                    Ask ChatGPT
                </button>
            </div>
            {selectedOption === "Live Classroom" && (
                <div>
                    <h3>Live Classroom Content</h3>
                </div>
            )}
            {selectedOption === "Ask ChatGPT" && (
                <div>
                    <h3>Ask ChatGPT Content</h3>
                </div>
            )} */}

            <ChatGPT />
        </div>
    );
};

export default Doubts;
