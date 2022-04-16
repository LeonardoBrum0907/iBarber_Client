import styled from "styled-components";

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