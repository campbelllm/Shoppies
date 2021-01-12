import React, { useContext } from "react";
import { Main, NominationList } from "./nominationsSC";
import NominationContext from "../NominationContext";

function Nominations() {
  const { nominations } = useContext(NominationContext);
  console.log(nominations);

  return (
    <Main>
      <h1>Nominations</h1>
      <NominationList>
        {nominations.map((movie) => (
          <li>{movie.title}, {movie.year}</li>
        ))}
      </NominationList>
    </Main>
  );
}

export default Nominations;
