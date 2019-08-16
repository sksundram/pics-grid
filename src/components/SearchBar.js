import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onInputChange = e => {
    const searchTerm = e.target.value;
    this.setState(() => ({ searchTerm }));
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
