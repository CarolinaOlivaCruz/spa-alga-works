import React from "react";
import { Button } from "../shared/Button";
import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1>AlgaStock</h1>
        <Button onClick={() => window.alert("Olá")}>
            <span>login</span>
        </Button>
      </div>
    </HeaderStyled>
  );
};
