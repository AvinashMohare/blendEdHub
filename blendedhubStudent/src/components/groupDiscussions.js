import React from "react";
import "../styles/GroupDiscussions.scss";
const GroupDiscussions = () => {
    // Fake discussion data for demonstration
    const discussionData = [
        {
            userName: "Avinash",
            content: "I think the first topic is really interesting!",
            timestamp: "2023-12-18 10:30 AM",
        },
        {
            userName: "Ashwin",
            content: "Yes, I agree. The second topic is challenging though.",
            timestamp: "2023-12-18 11:15 AM",
        },
        {
            userName: "Aditi",
            content:
                "I found some helpful resources on the second topic. Let me share...",
            timestamp: "2023-12-18 12:00 PM",
        },
        // Add more fake discussion messages as needed
    ];

    return (
        <div className="discussion-container">
            <h2>Group Discussion</h2>
            <div className="contentContainer">
                <div className="messages-container">
                    {/* Render discussion messages */}
                    {discussionData.map((message, index) => (
                        <div key={index} className="message">
                            <p className="user">{message.userName}</p>
                            <p className="message-content">{message.content}</p>
                            <p className="timestamp">{message.timestamp}</p>
                        </div>
                    ))}
                </div>
                {/* Add an input form for users to post new messages */}
                <div className="new-message">
                    <input
                        type="text"
                        placeholder="Type your message here..."
                    />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default GroupDiscussions;
