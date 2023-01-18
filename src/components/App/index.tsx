import React from "react";
import "../../styles/globalStyles";
import { Header } from "../Header";
import { Container } from "../shared/Container";
import { Table } from "../shared/Table";

export const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Table />
      </Container>
    </div>
  );
};
