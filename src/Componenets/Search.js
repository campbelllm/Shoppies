import React from 'react';
import {Main, SearchBar, SearchButton} from './searchSC'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Search () {
  return(
    <div>
      <Main>
      <h2>Search</h2>
      <SearchBar type="search" placeholder= 'Movie Title' name ='search'/>
      <SearchButton><FontAwesomeIcon icon={faSearch}/></SearchButton>
      
      </Main>

    </div>
  )
}

export default Search;