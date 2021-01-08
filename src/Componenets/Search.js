import React, {useState} from 'react';
import {Main, SearchBar, SearchButton} from './searchSC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
function Search () {
  const [inputValue, setInputValue] = useState('')

  function handleChange (e) {
    setInputValue(e.target.value)
  }

  function handleClick (e) {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=8afc9050&s=${inputValue}`)
    .then(res => {
      console.log(e.target.value)
      console.log(res.data)
      setInputValue('')
    })
  }
  return(
      <Main>
      <h2>Search</h2>
      <SearchBar type="search" placeholder= 'Movie Title' name ='search' onChange={handleChange} />
      <SearchButton onClick= {handleClick}><FontAwesomeIcon icon={faSearch}/></SearchButton>
      </Main>
  )
}

export default Search;