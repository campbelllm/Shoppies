import React, { useContext, useEffect, useState, useRef } from "react";
import MovieContext from "../MovieContext";
import NominationContext from "../NominationContext";
import { Main, MovieList, NominateButton } from "./resultsSC";

function Results() {
  const { movieResults } = useContext(MovieContext);
  const { nominations, setNominations } = useContext(NominationContext);

  const handleClick = (e,title, year) => {
    console.log ("CLASSNAME", e.target.className)
    setNominations([...nominations, { title, year }]);
    if (e.target.className){
      e.target.setAttribute("disabled", "disabled");
    }
  };
 
  return (
    <Main>
      <h1>Results</h1>
      <MovieList>
        {movieResults.map((movie) => (
          
          <div>
            <li>
              <strong>Movie Title:</strong> {movie.Title}
              <strong>Released:</strong> {movie.Year}
            </li>
            <NominateButton
              onClick={(e) => handleClick(e,movie.Title, movie.Year)}
            >
              Nominate
            </NominateButton>
          </div>
        ))}
      </MovieList>
    </Main>
  );
}

export default Results;
