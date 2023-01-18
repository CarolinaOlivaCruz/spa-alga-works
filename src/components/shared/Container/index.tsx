import React from "react";
import { ContainerStyled } from "./styles";

declare interface iContainer {
  children: JSX.Element;
}

export const Container: React.FC<iContainer> = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};
