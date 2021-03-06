import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends  Component{
    constructor(props){
        super(props);
        
        this.state = {
            term: ''
        };
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    };
    
    render(){
        return(
            <div className="form-group search-bar">
                <input class="form-control search"
                       value={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
}

export default SearchBar;