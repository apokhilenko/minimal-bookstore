import React from "react";
import { Link } from "react-router-dom";
import { BookWithId } from "../../../models/Book";

export function BookListRow({
  bookId,
  title,
  price,
  author,
  isSelected,
  onRowSelected,
}: BookListRowProps) {
  function handleRowSelect() {
    onRowSelected(bookId);
  }

  return (
    <tr onClick={handleRowSelect}>
      <td>
        <input checked={isSelected} type="checkbox" />
      </td>
      <td>{bookId}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{price}</td>
      <td
        align="right"
        onClick={function (event) {
          // stop propagation of row selection event
          event.stopPropagation();
        }}
      >
        <Link to={`/books/${bookId}`}>
          <button>Edit</button>
        </Link>
      </td>
    </tr>
  );
}

interface BookListRowProps extends BookWithId {
  isSelected: boolean;
  onRowSelected: (id: number) => void;
}
