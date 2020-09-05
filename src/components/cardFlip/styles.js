import styled from "styled-components";

export const Front = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px double whitesmoke;
`;

export const Back = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  border: 5px double black;
  height: 560px;
`;

export const DescriptionBook = styled.div`
  padding: 2%;
  text-align: justify;
`;

export const Button = styled.div`
  height: 30px;
  background-color: lightgray;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 2px solid black;

  :hover {
    background-color: rgb(170, 167, 167);
  }
`;
