import styled from "styled-components";

export const Main = styled.div`
  width: 40%;
  height: 400px;
  border-radius: 5px;
  border: 1px solid white;
  padding: 20px;
  margin: 10px;
  font-size: 18px;
  overflow: scroll;
  box-shadow: 1px 1px 13px 0.2px #000;
`

export const MovieList = styled.ol`
  margin: 20px;
  & li{
    margin-top: 10px;
    line-height: 1.5em;
  }
`

export const NominateButton = styled.button`
  font-weight: bold;
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  &:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: black;
  color: #666666;
}
`