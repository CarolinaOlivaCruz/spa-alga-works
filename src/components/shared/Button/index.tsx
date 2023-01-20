import React from "react";
import { ButtonStyled } from "./styles";

interface iButtonProps {
  content?: string;
  onClick?: () => void;
  children: JSX.Element;
}

export const Button: React.FC<iButtonProps> = (props) => {
  return (
    <ButtonStyled onClick={props.onClick}>
      {props.children || "Name ess button"}
    </ButtonStyled>
  );
};
