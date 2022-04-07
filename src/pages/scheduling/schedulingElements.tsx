import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 375px;
  height: 100vh;
  background: linear-gradient(169.07deg, #3A377A 47.13%, #605AC7 82.04%, #8D70FA 94.95%);
  /* border: solid 3px red; */
  padding: 17px;
  color: white;
  font-family: 'Poppins', sans-serif;

  span {
    font-weight: 500;
  }

  p {
    font-weight: 400;
    font-size: 12px;
  }

  .teste {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: 76px 28px; */
    height: 113px;
    grid-row-gap: 9px;
    grid-column-gap: 15px;
    margin-top: 18px;

    /* border: solid 1px yellow; */
  }
`;

export const Month = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* border: solid 1px red; */
  padding: 29px;

  font-size: 16px;
`;
export const Date = styled.div`
  /* border: solid 1px green; */

`;
export const Hour = styled.div`
  /* border: solid 1px pink; */
`;