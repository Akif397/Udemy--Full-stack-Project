import { useState } from 'react';
import './App.css';

function App() {

  const [ movies, setMovie ] = useState(['Movie1', 'Movie2']);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
      <div className="layout">
        <div>
          { movies.map( movie => {
            return <h2>{ movie }</h2>
          }) }
        </div>
        <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
