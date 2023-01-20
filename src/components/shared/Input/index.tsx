import React from "react";
import { InputStyled } from "./styles";

interface iInputProps {
  label: string;
  placeholder: string;
}

export const Input: React.FC<iInputProps> = (props) => {
  return (
    <InputStyled>
      <label>
        <span>{props.label}</span>
        <input {...props} />
      </label>
    </InputStyled>
  );
};
