import React, { useContext, useEffect, useState } from "react";
import { Main, NominationList, RemoveButton, Banner } from "./nominationsSC";
import NominationContext from "../NominationContext";

function Nominations() {
  const { nominations, setNominations } = useContext(NominationContext);
  const [ banner, setBanner ] =useState('none')
  const handleClick = (movie, year) => {
    const filteredMovies = nominations.filter((movieName) => 
      (movie !== movieName.title || year !== movieName.year)
    )
    setNominations(filteredMovies)
  };
 

  useEffect(() => {
    if(nominations.length === 5){
      nominations.length = 5
      setBanner('inline')
    }
    else {
      setBanner('none')
    }
  }, [nominations])
  return (
    <Main>
      <h1>Nominations</h1>
      <Banner style= {{display: `${banner}`}}>
        Congratulations, you have submitted all 5 nominations
      </Banner>
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
