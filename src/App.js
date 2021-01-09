import React, { useState } from "react";
import "./App.css";
import MovieContext from "./MovieContext";
import NominationContext from "./NominationContext";
import Search from "./Componenets/Search";
import Results from "./Componenets/Results";
import Nomination from "./Componenets/Nominations";

function App() {
  const [movieResults, setMovieResults] = useState([]);
  const [nominations, setNominations] = useState([]);
  const updateMovieResults = (arr) => {
    setMovieResults(arr);
  };
  return (
    <div>
      <header className="title">
        <h1>The Shoppies</h1>
      </header>
      <hr></hr>
      <div className="main">
        <MovieContext.Provider value={{ movieResults, updateMovieResults }}>
          <NominationContext.Provider
            value={{ nominations, setNominations }}
          >
            <Search />
            <Results />
            <Nomination />
          </NominationContext.Provider>
        </MovieContext.Provider>
      </div>
    </div>
  );
}

export default App;
