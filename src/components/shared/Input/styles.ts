import styled from "styled-components";

export const InputStyled = styled.div`
  height: 45px;

  label {
    display: flex;
    flex-direction: column;

    span {
      text-transform: uppercase;
      color: #09f;
      font-size: 0.8rem;
      height: 15px;
      letter-spacing: 0.75px;
    }

    input {
      border: none;
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      height: 30px;
      color: #222;
    }

    input:focus {
      border-color: #09f;
      outline: none;
    }

    input::placeholder {
      color: #ccc;
    }
  }
`;
