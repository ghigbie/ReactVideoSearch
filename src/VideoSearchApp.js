import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import './VideoSearchApp.css';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import APIKey from './services/apiKey';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('ethereum dapp');
  }
    

    videoSearch(term){
      YTSearch({key: APIKey, term: term}, videos => 
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        }));
    }

  
  render() {
    const videoSearch = _.debouce((term) => {this.videoSearch(term)}, 300);
    
    return (
      <div className="App">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
