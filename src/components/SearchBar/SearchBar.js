import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends  Component{
    constructor(props){
        super(props)
        
        this.state = {
            term: ''
        };
    }
    
    render(){
        return(
            <div className="search-bar">
                <input value={this.state.term}
                       onChange={event => this.setState({term: event.target.value})}/>
                {this.state.term}
            </div>
        );
    }
}

export default SearchBar;