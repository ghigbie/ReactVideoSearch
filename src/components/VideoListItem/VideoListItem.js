import React from 'react';

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const videoTitle = props.video.snippet.title;
    
    return(
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl}
                         alt="From a searsch"
                         className="media-object" 
                    />
                </div>
                
                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>
        </li>);
};

export default VideoListItem;   