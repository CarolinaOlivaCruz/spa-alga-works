import React from "react";
import "../../styles/globalStyles";
import { Header } from "../Header";
import { Container } from "../shared/Container";
import { Input } from "../shared/Input";

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Input label="street" placeholder="15th avenue" />
      </Container>
    </div>
  );
};
