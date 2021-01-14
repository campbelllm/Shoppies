import styled from "styled-components";
import Stars from './Stars'
import star from '../star.png'

export const Main = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`

export const Title = styled.h1`
    text-align: center;
    padding:10px; 
    font-weight:bold;
    font-family:arial;
    font-size:200px;
    color: black;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: black;
`