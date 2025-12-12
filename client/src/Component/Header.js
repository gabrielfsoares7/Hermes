import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #141414; 

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 0 40px;

  > :nth-child(2) {
    margin-left: 40px;
    margin-right: auto;
  }
  `;
