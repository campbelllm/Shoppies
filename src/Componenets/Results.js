import React, {useContext} from 'react';
import MovieContext from '../MovieContext'
import {Main} from './resultsSC'

function Results () {
  const { movieResults } = useContext(MovieContext);
  console.log('RESULTS', movieResults)
  return (
    <Main>
      <h1>Results</h1>
    </Main>
  )
}

export default Results;