import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FormField } from "../../../components/FormField";
import { Book } from "../../../models/Book";

export function Form({ book, onFormSubmit }: FormProps) {
  const { register, handleSubmit, reset, errors: formErrors } = useForm<
    BookFormData
  >();

  useEffect(
    function () {
      reset(book as BookFormData);
    },
    [book, reset]
  );

  function handleSubmitBookForm(data: BookFormData) {
    onFormSubmit(data);
  }

  return (
    <MainWrapper>
      <FormField
        label="Title"
        name="title"
        ref={register({
          validate: function (value) {
            return value.length || `Title is required.`;
          },
        })}
        error={formErrors?.title?.message}
      />
      <FormField
        label="Author"
        name="author"
        ref={register({
          validate: function (value) {
            return value.length || `Author is required.`;
          },
        })}
        error={formErrors?.author?.message}
      />
      <FormField
        label="Price"
        type="number"
        name="price"
        ref={register({
          validate: function (value) {
            return value > 0 || `Price is required.`;
          },
        })}
        error={formErrors?.price?.message}
      />
      <div>
        <button onClick={handleSubmit(handleSubmitBookForm)} type="button">
          Save
        </button>
        &nbsp; &nbsp;
        <Link to={"/books"}>
          <button type="button">Cancel</button>
        </Link>
      </div>
    </MainWrapper>
  );
}

interface BookFormData extends Book {}
interface FormProps {
  onFormSubmit: (data: BookFormData) => void;
  book: Book;
}

const MainWrapper = styled.form`
  width: 60%;
`;
