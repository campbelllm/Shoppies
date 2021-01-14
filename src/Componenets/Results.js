import React, { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";
import NominationContext from "../NominationContext";
import { Main, MovieList, NominateButton } from "./resultsSC";

function Results() {
  const { movieResults } = useContext(MovieContext);
  const { nominations, setNominations } = useContext(NominationContext);
  const { disable, setDisable } = useState(false)
  const handleClick = (title, year) => {
    setNominations([...nominations, { title, year }]);
    // movieResults.map((movie) => (movie.Title === title? setDisable(true): null))
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
              // disabled = {disable}
              onClick={() => handleClick(movie.Title, movie.Year)}
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
