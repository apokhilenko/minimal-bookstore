import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_BOOKS } from "./queries";
import { BookWithId } from "../../models/Book";
import { BookListRow } from "./components/BookListRow";
import { List } from "../../components/List";
import { useSelectedRows } from "../../hooks/useSelectedRows";
import { calcualteTotalPrice } from "./helpers";
import { RowSelectionSummary } from "./components/RowSelectionSummary";
import { ActionsPanel } from "./components/ActionsPanel";
import { Layout } from "../../components/Layout";

const COLUMN_NAMES = ["Id", "Title", "Author", "Price"];

export function BookList() {
  const { loading, error, data } = useQuery<BooksData>(GET_BOOKS);
  const [selectedBooks, handleRowSelect] = useSelectedRows<number>();

  const books: BookWithId[] = data ? data.books : [];
  const totalCount = selectedBooks.length;
  // TODO: consider useMemo to not recalculate on every render
  const totalPrice = calcualteTotalPrice(books, selectedBooks);

  return (
    <Layout isLoading={loading} error={error?.message}>
      <h1>Books</h1>
      <ActionsPanel>
        <RowSelectionSummary count={totalCount} totalPrice={totalPrice} />
        <Link to="/books/new">
          <button>Create new</button>
        </Link>
      </ActionsPanel>
      <List columnNames={COLUMN_NAMES}>
        {books.map(function ({ bookId, author, title, price }: BookWithId) {
          const isSelected = selectedBooks.includes(bookId);

          return (
            <BookListRow
              onRowSelected={handleRowSelect}
              isSelected={isSelected}
              key={bookId}
              bookId={bookId}
              author={author}
              title={title}
              price={price}
            />
          );
        })}
      </List>
    </Layout>
  );
}

export { GET_BOOKS } from "./queries";

interface BooksData {
  books: BookWithId[];
}
