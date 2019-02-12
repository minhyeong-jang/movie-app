import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render : ComponentWillMount() -> render() -> componentDidMount()
  // Update : ComponentWillReceiveProps() -> shouldComponentUpdate -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "1",
          },
          {
            title: "Full Metal Jacket",
            poster: "1",
          },
          {
            title: "Oldboy",
            poster: "1",
          },
          {
            title: "Stgar Wars",
            poster: "1",
          },
        ]
      })
    }, 1000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
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
