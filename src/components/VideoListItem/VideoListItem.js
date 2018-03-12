import React from 'react';

const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
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