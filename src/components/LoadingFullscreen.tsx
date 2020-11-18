import React from "react";
import styled from "styled-components";
import { Loading } from "./Loading";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function LoadingFullscreen() {
  return (
    <MainWrapper>
      <Loading />
    </MainWrapper>
  );
}
