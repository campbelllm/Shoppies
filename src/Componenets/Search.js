import React, {useState, useContext} from 'react';
import MovieContext from '../MovieContext';
import {Main, SearchBar, SearchButton} from './searchSC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Search () {
  let { updateMovieResults } = useContext(MovieContext);
  const [inputValue, setInputValue] = useState('')
  const [movies, setMovies] = useState([])
  // let movies = []
  function handleChange (e) {
    setInputValue(e.target.value)
  }

  const handleClick = async (e) =>  {
    await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8afc9050&s=${inputValue}`)
    .then(res => {
     const data = res.data.Search.map(movie => [movie.Title, movie.Year ])
    setMovies(data)
     
    })
  }
  updateMovieResults(movies)
 
 
  return(
      <Main>
      <h2>Search</h2>
      <SearchBar type="search" placeholder= 'Movie Title' name ='search' onChange={handleChange} />
      <SearchButton onClick= {handleClick}><FontAwesomeIcon icon={faSearch}/></SearchButton>
      </Main>
  )
}

export default Search;