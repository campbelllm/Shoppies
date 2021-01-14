import styled from "styled-components";


export const Main = styled.div`
  height: 10%;
  width: 90%;
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
  margin: 20px;
  position: absolute;
  justify-self: center;
`

export const SearchButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: relative;
    left: 88%;
    top: 22px;
    margin: 5px 0px;
    font-size: 20px;
`