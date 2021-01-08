import React, { useContext, useEffect } from "react";
import MovieContext from "../MovieContext";
import { Main, MovieList, NominateButton } from "./resultsSC";

function Results() {
  const { movieResults } = useContext(MovieContext);

  console.log("RESULTS", movieResults);
  return (
    <Main>
      <h1>Results</h1>
      <MovieList>
        {movieResults.map((movie) => (
          <li>
            <strong>Movie Title:</strong> {movie.Title}{" "}
            <strong>Release Year:</strong> {movie.Year}{" "}
            <NominateButton> Nominate </NominateButton>
          </li>
        ))}
      </MovieList>
    </Main>
  );
}

export default Results;
