import styled from "styled-components";

export const Container = styled.div`
  border: solid 1px red;
  position: relative;
  display: flex; 
  align-items: center;
  justify-content: center;
  margin-top: 200px;

  img {
    position: absolute;
    border: solid 1px yellow;
  }
`;