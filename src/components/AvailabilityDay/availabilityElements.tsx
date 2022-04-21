import styled from "styled-components";

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
