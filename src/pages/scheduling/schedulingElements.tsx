import styled from "styled-components";

export const Container = styled.div`
  background: #2a275e;
  
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 374px;
  height: 100vh;
  background: linear-gradient(169.07deg, #3A377A 47.13%, #605AC7 82.04%, #8D70FA 94.95%);
  /* border: solid 3px red; */
  padding: 17px;
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;

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
export const Hour = styled.div`
  /* border: solid 1px pink; */
`;

export const Main = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 11px;
`;

export const DatePrevArea = styled.div`
  display: flex;
  /* border: solid 1px red; */
  flex: 1;
  justify-content: flex-end;

  cursor: pointer;
  margin-right: 5px;
`;

export const DateTitleArea = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
`;

export const DateNextArea = styled.div`
  display: flex;
  /* border: solid 1px red; */
  flex: 1;

  cursor: pointer;
  margin-left: 5px;
`;

export const DayButton = styled.button`
  background: transparent;
  border: none;
`;
export const HourButton = styled.button`
  background: transparent;
  border: solid 1px red;
  /* display: none; */
`;