import React from "react";
import { Products } from "./mockdata";
import { TableStyled } from "./styles";

const headers = [
    {key: "name", value: "Produto"},
    {key: "price", value: "Preço"},
    {key: "stock", value: "Estoque"}
]

export const Table = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
          {  headers.map(header => <th key= {header.key}>{header.value}</th>)}
         {/* <th className="rigth">Stock</th> */}
        </tr>
      </thead>
      <tbody>
        {Products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="rigth">{product.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};
