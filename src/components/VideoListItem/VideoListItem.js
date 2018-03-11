import React from 'react';

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const videoTitle = props.video.snippet.title;
    
    return(
        <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img src={imageUrl}
                         alt="From a searsch"
                         className="mr-3" 
                    />
                </div>
                
                <div className="media-body">
                    <div className="mt-0">{videoTitle}</div>
                </div>
            </div>
        </li>);
};

export default VideoListItem;   