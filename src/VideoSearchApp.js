import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './VideoSearchApp.css';

import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import APIKey from './services/apiKey';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {videos: []};
    
    YTSearch({key: APIKey, term: 'smurfs'}, videos => this.setState({videos}));
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
