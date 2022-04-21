import styled from "styled-components";

export const Container = styled.div`
  background: #2a275e;
  padding: 5px 0px;
  height: 100vh;

`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 374px;
  height: 100%;
  background: linear-gradient(169.07deg, #3A377A 47.13%, #605AC7 82.04%, #8D70FA 94.95%);
  /* border: solid 3px red; */
  padding: 17px;
  color: white;
  font-family: 'Poppins', sans-serif;
  border-radius: 10px;

  img {
    position: fixed;
    bottom: 60px;
    right: 530px;
  }

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
  margin-top: 11px;
  /* display: flex;
  flex-direction: inherit;
  align-items: center;
  justify-content: center; */
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
  width: 130px;
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

export const DateList = styled.div`
  height: 110px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px; 
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar {
        height: 8px;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
        border-radius: 20px;       
    }
  }
  
  `;

export const DateItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 25px; */
  min-width: 80px;
  margin-bottom: 15px;

  /* opacity: 0.3; */
  color: white;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.08);
  
  &:hover {
    cursor: pointer;

    filter: brightness(0.9);
  }
`;

export const DateItemNumber = styled.span`
  font-size: 28px;
  font-weight: 500;
`;
export const DateItemWeekDay = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

export const TimeList = styled.div`
  display: flex;
  gap: 5px;
  overflow-y: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px; 
    background-color: transparent;
  }
  &:hover {
    &::-webkit-scrollbar {
        height: 8px;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
        border-radius: 20px;       
    }
  }
`;

export const TimeItem = styled.button`
  min-width: 80px;
  height: 28px;
  margin-top: 10px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.3);

  border: none;
  border-radius: 12px;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.08);
  
  &:hover {
    cursor: pointer;

    filter: brightness(0.9);
  }
`;

export const TimeItemText = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: white;
`;