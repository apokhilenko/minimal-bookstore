import React from "react";
import { useParams } from "react-router-dom";
import { BookForm } from "../features/BookForm";

interface ParamTypes {
  id: string;
}
export function BookEditPage() {
  const { id } = useParams<ParamTypes>();
  const idNumber = parseInt(id);

  return <BookForm id={idNumber} />;
}
