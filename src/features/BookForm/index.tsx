import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_BOOK } from "./queries";
import { BookWithId, Book } from "../../models/Book";
import { Layout } from "../../components/Layout";
import { Form } from "./components/Form";
import { MODE_CREATE, MODE_EDIT } from "./contsants";
import { useSaveBook } from "./hooks";

export function BookForm({ id }: BookFormProps) {
  const mode = id ? MODE_EDIT : MODE_CREATE;

  const [book, setBook] = useState<BookWithId>({} as BookWithId);
  const [
    getBook,
    { data, loading: gettingLoading, error: gettingError },
  ] = useLazyQuery<BookFormData, BookFormVars>(GET_BOOK);
  const [
    saveBook,
    { data: savedData, loading: savingLoading, error: savingError },
  ] = useSaveBook(mode);

  useEffect(
    function () {
      if (id) {
        getBook({ variables: { bookId: id } });
      }
    },
    [id, getBook]
  );
  useEffect(
    function () {
      if (savedData) {
        setBook(savedData);
      } else if (data) {
        setBook(data.book);
      }
    },
    [data, savedData]
  );

  function handleFormSubmit(data: Book) {
    let book = { ...data, price: parseFloat(data.price.toString()) };

    if (mode === MODE_EDIT) {
      book = { ...book, bookId: id } as BookWithId;
    }
    saveBook(book);
  }

  const heading = prepareHeading(mode, book.title);

  return (
    <Layout
      isLoading={gettingLoading || savingLoading}
      error={gettingError?.message || savingError?.message}
    >
      <h1>{heading}</h1>
      <Form book={book} onFormSubmit={handleFormSubmit} />
    </Layout>
  );
}

function prepareHeading(mode: string, title?: string) {
  if (mode === MODE_EDIT && title) {
    return `Edit "${title}"`;
  } else {
    return "Create new book.";
  }
}

interface BookFormProps {
  id?: number;
}
interface BookFormVars {
  bookId: number;
}
interface BookFormData {
  book: BookWithId;
}
