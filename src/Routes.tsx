import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage";
import { BookCreatePage } from "./pages/BookCreatePage";
import { BookEditPage } from "./pages/BookEditPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/books" exact component={BooksPage} />
      <Route path="/books/new" exact component={BookCreatePage} />
      <Route path="/books/:id" component={BookEditPage} />

      <Redirect exact from="/" to="books" />
    </Switch>
  );
}
