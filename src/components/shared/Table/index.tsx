import React from "react";
import { TableStyled } from "./styles";


export const Table = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th className="rigth">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <td>Cookie</td>
           <td>$1.25</td>
           <td className="rigth">5</td> 
        </tr>
      </tbody>
    </TableStyled>
  );
};
