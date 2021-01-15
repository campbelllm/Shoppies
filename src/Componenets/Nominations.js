import React, { useContext, useEffect } from "react";
import { Main, NominationList, RemoveButton } from "./nominationsSC";
import NominationContext from "../NominationContext";

function Nominations() {
  const { nominations, setNominations } = useContext(NominationContext);
  // nominations.length = 5;
  const handleClick = (movie, year) => {
    const filteredMovies = nominations.filter((movieName) => 
      (movie !== movieName.title || year !== movieName.year)
    )
    setNominations(filteredMovies)
  };

  // useEffect(() => {
  //   if(nominations.length = 5){
  //     return false
  //   }
  // }, [nominations])
  return (
    <Main>
      <h1>Nominations</h1>
      <NominationList>
        {nominations.map((movie) => (
          <div>
            <li>
              {movie.title}, {movie.year}
            </li>
            <RemoveButton onClick={() => handleClick(movie.title, movie.year)}>Remove</RemoveButton>
          </div>
        ))}
      </NominationList>
    </Main>
  );
}

export default Nominations;
