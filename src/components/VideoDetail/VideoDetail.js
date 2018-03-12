import React from 'react'

const VideoDetail = ({video}) => {
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    
     return(
            <div className="video-detail col-md-12">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src={videoUrl}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
          );  
};