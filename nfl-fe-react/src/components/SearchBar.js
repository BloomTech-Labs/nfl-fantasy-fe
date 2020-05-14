import React, { Component } from 'react';

// this is a message 
class Search extends Component {
    state = {
        error: false,
        query: '',
        results: []
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <form>
                <input 
                placeholder="Player's Name"
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Search;