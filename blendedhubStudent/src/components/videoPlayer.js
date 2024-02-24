import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ selectedClass }) => {
    return (
        <ReactPlayer
            url={selectedClass.videoURL}
            controls
            width="100%"
            height="100%"
            className="react-player"
        />
    );
};

export default VideoPlayer;
