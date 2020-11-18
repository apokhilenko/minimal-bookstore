import React from "react";
import { useParams } from "react-router-dom";

interface ParamTypes {
  id: string;
}
export function BookEditPage() {
  const { id } = useParams<ParamTypes>();
  const idNumber = parseInt(id);

  return <div>edit {idNumber}</div>;
}
