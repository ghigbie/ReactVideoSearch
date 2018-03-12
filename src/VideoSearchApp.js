import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './VideoSearchApp.css';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail';
import APIKey from './services/apiKey';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {videos: []};
    
    YTSearch({key: APIKey, term: 'smurfs'}, videos => this.setState({videos}));
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
