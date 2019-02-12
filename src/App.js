import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : ComponentWillMount() -> render() -> componentDidMount()
  // Update : ComponentWillReceiveProps() -> shouldComponentUpdate -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          key={movie.id}
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      )
    })
    return movies;
  }

  _getMovies = () => {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(res => res.json())
    .then(json => {
      this.setState({
        movies: json.data.movies
      });
    })
    .catch(e => console.log(e));

  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
