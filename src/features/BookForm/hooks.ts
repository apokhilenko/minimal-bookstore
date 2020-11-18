import { useEffect, useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { CREATE_BOOK, EDIT_BOOK } from "./queries";
import { Book, BookWithId } from "../../models/Book";
import { MODE_EDIT } from "./contsants";
import { GET_BOOKS } from "../BookList";

export function useSaveBook(
  mode: string
): [
  (book: Book) => void,
  { data: BookWithId | null; loading: boolean; error: ApolloError | undefined }
] {
  const mutataion = mode === MODE_EDIT ? EDIT_BOOK : CREATE_BOOK;

  const history = useHistory();
  const [savedBook, setSavedBook] = useState<BookWithId | null>(null);
  const [saveBook, { data, loading, error }] = useMutation<SaveBookData>(
    mutataion,
    {
      onCompleted: function () {
        history.push("/books");
      },
      refetchQueries: [{ query: GET_BOOKS }],
    }
  );

  useEffect(
    function () {
      if (data) {
        const book = mode === MODE_EDIT ? data.editBook : data.createBook;
        setSavedBook(book);
      }
    },
    [data, mode]
  );

  function handleSave(book: Book) {
    saveBook({ variables: book });
  }

  return [handleSave, { data: savedBook, loading, error }];
}

interface SaveBookData {
  createBook: BookWithId;
  editBook: BookWithId;
}
