import React, { ReactNode } from "react";
import styled from "styled-components";

interface ListProps {
  columnNames: string[];
  children: ReactNode | ReactNode[];
}

export function List({ children, columnNames }: ListProps) {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          {columnNames.map(function (columnName: string) {
            return (
              <th align="left" key={columnName}>
                {columnName}
              </th>
            );
          })}
        </tr>
        <th></th>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    text-transform: uppercase;
    border-bottom: 1px solid #0e0e0e;
    th {
      padding: 5px;
      text-align: left;
    }
  }

  tr {
    transition: opacity 0.5s ease;

    &:hover {
      td {
        background: #e6e6e6;
      }
    }
  }

  td {
    padding: 5px;
    border-bottom: 1px solid #d6d6d6;
  }
`;
