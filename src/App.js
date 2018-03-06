import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar'
import APIKey from './services/apiKey';

YTSearch({key: APIKey, term: 'smurfs'}, (data) => {
  console.log(data);
});

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {videos: []};
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
