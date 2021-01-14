import React, { useState } from "react";
import "./App.css";
import MovieContext from "./MovieContext";
import NominationContext from "./NominationContext";
import Header from './Componenets/Header'
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
      <Header/>
      <div className="main">
        <h4 className ="scroll"> ^ Scroll to Nominate ^ </h4>
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
