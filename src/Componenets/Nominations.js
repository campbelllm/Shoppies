import React, { useContext} from 'react';
import {Main} from './nominationsSC';
import NominationContext from '../NominationContext';

function Nominations () {
  const { nominations } = useContext(NominationContext);

  return(
    <Main>
      <h1>Nominations</h1>
    </Main>
  )
}

export default Nominations;