import { TableStyled } from "./styles";

export const Table = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
           <td>Cookie</td>
           <td>$1.25</td>
           <td>5</td> 
        </tr>
      </tbody>
    </TableStyled>
  );
};
