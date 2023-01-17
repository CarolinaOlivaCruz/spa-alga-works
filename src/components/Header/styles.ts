import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  color: #ffff;
  background-color: #09f;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.2rem;
  }

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 700px) {
    height: 80px;

    h1 {
        font-size: 2rem;
    }
  }
`;
