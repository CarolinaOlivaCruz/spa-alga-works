import React from "react";
import { Products } from "./mockdata";
import { TableStyled } from "./styles";

const headers: iTableHeader[] = [
  { key: "name", value: "Produto" },
  { key: "price", value: "Preço" },
  { key: "stock", value: "Estoque", rigth: true },
];

interface iTableHeader {
  key: string;
  value: string;
  rigth?: boolean;
}

type IndexedHeaders = {
  [key: string]: iTableHeader;
};

type OrganizedItem = {
  [key: string]: any;
};

function organizeData(
  data: any[],
  headers: iTableHeader[]
): [OrganizedItem[], IndexedHeaders] {
  const indexedHeaders: IndexedHeaders = {};

  headers.forEach((header) => {
    indexedHeaders[header.key] = {
      ...header,
    };
  });

  const headerKeysInOrder = Object.keys(indexedHeaders);

  const organizedData = data.map((item) => {
    const organizedItem: OrganizedItem = {};

    headerKeysInOrder.forEach((key) => {
      organizedItem[key] = item[key];
    });
    organizedItem.$original = item;
    return organizedItem;
  });

  return [organizedData, indexedHeaders];
}

export const Table = () => {
  const [organizedData, indexedHeaders] = organizeData(Products, headers);

  return (
    <TableStyled>
      <thead>
        <tr>
          {headers.map((header) => (
            <th className={header.rigth ? "rigth" : ""} key={header.key}>
              {header.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {organizedData.map((row, i) => {
          return (
            <tr key={i}>
              {Object.keys(row).map((item, i) =>
                item !== "$original" ? (
                  <td
                    key={row.$original.id + i}
                    className={indexedHeaders[item].rigth ? "rigth" : ""}
                  >
                    {row[item]}
                  </td>
                ) : null
              )}
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};
