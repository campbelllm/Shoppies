import styled from "styled-components";

export const Main = styled.div`
  width: 80%;
  border-radius: 5px;
  border: 1px solid white;
  padding: 20px;
  margin: 20px;
  font-size: 18px;
`


export const SearchBar = styled.input`
  display: flex;  
  width: 80%;
  background: transparent;
  border: solid 1px white;
  padding: 10px;
  position: absolute;
`

export const SearchButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    left: 96%;
    margin: 5px 0px;
    font-size: 20px;
`