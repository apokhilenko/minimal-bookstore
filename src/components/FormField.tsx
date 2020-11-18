import React, { forwardRef } from "react";
import styled from "styled-components";

export const FormField = forwardRef<HTMLInputElement, FromFieldProps>(function (
  { label, name, defaultValue, error, type = "text" }: FromFieldProps,
  ref
) {
  return (
    <MainWrapper>
      <label>{label}</label>
      <br />
      <input type={type} name={name} defaultValue={defaultValue} ref={ref} />
      <br />
      <Error>{error}</Error>
    </MainWrapper>
  );
});

interface FromFieldProps {
  label: string;
  name: string;
  defaultValue?: string | number;
  error?: string;
  type?: string;
}

const MainWrapper = styled.div`
  margin-bottom: 10px;

  input {
    width: 100%;
    padding: 5px 8px;
  }
`;

const Error = styled.span`
  color: red;
`;
