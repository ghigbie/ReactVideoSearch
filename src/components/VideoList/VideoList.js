import React from 'react';

import VideoListItem from './../VideoListItem/VideoListItem';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list group">
            {props.videos.map((video) => (
                <VideoListItem video={video}/>)
            )}
        </ul>
    );
};

export default VideoList;