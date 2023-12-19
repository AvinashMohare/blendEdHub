import React, { useState } from "react";
import "../styles/ChatGPT.scss";

const ChatGPT = () => {
    const [query, setQuery] = useState("");
    const [conversation, setConversation] = useState([]);
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const fetchData = async () => {
        const url = "https://open-ai21.p.rapidapi.com/conversationgpt35";
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key":
                    "ad60b40bd3mshc2e5559e9bbc98cp160cc2jsn614c7d5df621",
                "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: "user",
                        content: query,
                    },
                ],
                web_access: false,
                system_prompt: "",
                temperature: 0.9,
                top_k: 5,
                top_p: 0.9,
                max_tokens: 256,
            }),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            const newConversation = [
                ...conversation,
                { role: "user", content: query },
                { role: "AI", content: result.result },
            ];
            setConversation(newConversation);
            setQuery("");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
        setQuery("");
    };

    return (
        <div className="chat-container">
            <h1>Hii I am here to help you!</h1>

            <div className="mainContainer">
                <div className="chat-window">
                    {conversation.map((message, index) => (
                        <div key={index} className={`message ${message.role}`}>
                            {message.content}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={query}
                    onChange={handleInputChange}
                    className="input-field"
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>

            {error && <div className="error-message">Error: {error}</div>}
        </div>
    );
};

export default ChatGPT;
