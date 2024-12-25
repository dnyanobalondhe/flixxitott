// src/pages/VideoPlayer.js
import React, { useState, useEffect } from "react";

const VideoPlayer = ({ match }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const videoId = match.params.id; // Assuming you are passing video id in the URL

  useEffect(() => {
    // Fetch video URL or stream data (modify with your API logic)
    const fetchVideo = async () => {
      const response = await fetch(`http://localhost:5000/api/video/${videoId}`);
      const data = await response.json();
      setVideoUrl(data.url);
    };

    fetchVideo();
  }, [videoId]);

  return (
    <div className="video-player-container">
      {videoUrl ? (
        <video controls width="100%" height="auto">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
