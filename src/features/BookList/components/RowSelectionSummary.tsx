import React from "react";
import styled from "styled-components";

interface RowSelectionSummaryProps {
  count: number;
  totalPrice: number;
}

export function RowSelectionSummary({
  count,
  totalPrice,
}: RowSelectionSummaryProps) {
  return (
    <MainWrapper>
      Selected {count} books{" "}
      {totalPrice ? <span> with total price {totalPrice}</span> : null}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  margin: 16px 0;
`;
