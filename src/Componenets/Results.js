import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";
import NominationContext from "../NominationContext";
import { Main, MovieList, NominateButton } from "./resultsSC";

function Results() {
  const { movieResults } = useContext(MovieContext);
  const { nominations, setNominations } = useContext(NominationContext);
  
  const handleClick = (title, year) => {
    setNominations([...nominations, { title, year }]);
  };
 
  return (
    <Main>
      <h1>Results</h1>
      <MovieList>
        {movieResults.map((movie) => (
          <div>
            <li>
              <strong>Movie Title:</strong> {movie.Title}{" "}
              <strong>Release Year:</strong> {movie.Year}{" "}
            </li>
            <NominateButton
              onClick={() => handleClick(movie.Title, movie.Year)}
            >
              {" "}
              Nominate{" "}
            </NominateButton>
          </div>
        ))}
      </MovieList>
    </Main>
  );
}

export default Results;
