import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
    
  width: 74px;
  height: 112px;

  /* .loader{
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

export const Date = styled.button`
  height: 75px;
  width: 74px;
  border: none;
  background: transparent;  
  color: white;
  
  .active {
    background: #6C63FF;
    
    .dayMonth {
      color: yellow;  
    }
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    box-shadow: 0px 20px 5px rgba(0, 0, 0, 0.08);
    
    &:hover {
      cursor: pointer;
  
      filter: brightness(0.9);
    }
    
    .dayMonth {
      font-size: 28px;
      font-weight: 500;
    }
    .dayWeek {
      font-size: 16px;
      font-weight: 300;
    }
  }


`;

export const Hour = styled.button`
  height: 28px;
  border: none;
  background: transparent; 
  color: white;

  .active {
    background: #6C63FF; 
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 28px;

    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 5px rgba(0, 0, 0, 0.08);
    border-radius: 6px;

    cursor: pointer;

    &:hover {
      cursor: pointer;

      filter: brightness(0.9)
    }
  }
`;