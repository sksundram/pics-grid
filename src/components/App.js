import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async searchTerm => {
    try {
      const response = await unsplash.get('/search/photos', {
        params: {
          query: searchTerm
        }
      });

      this.setState(() => ({ images: response.data.results }));
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
