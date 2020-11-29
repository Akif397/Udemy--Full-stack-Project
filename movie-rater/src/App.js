import { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

function App() {

  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-Type': 'application-json',
        'Authorization': 'Token 587f51b1fd5fac03914b5d9794d857a1ccc1ff1d'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch( error => console.log(error))
  }, [])

  const movieClicked = movie => {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <MovieList movies={ movies } movieClicked={ movieClicked }/>
        <MovieDetails movies={ selectedMovie }/>
      </div>
    </div>
  );
}

export default App;