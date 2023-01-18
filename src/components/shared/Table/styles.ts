import styled, { css } from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-collapse: collapse;

  thead {
    background-color: #09f;

    tr th {
      color: #ffffffd4;
      text-align: left;
      padding: 7px 10px;
      font-size: 0.8em;
      text-transform: uppercase;
      letter-spacing: 0.75px;

      &.rigth {
        text-align: right;
      }
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: #0099ff70;
      }

      td {
        padding: 7px 10px;
        color: #222;

        &.rigth {
        text-align: right;
      }
      }
    }
  }
`;
