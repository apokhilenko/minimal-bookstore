import React, { ReactNode } from "react";
import styled from "styled-components";
import { LoadingFullscreen } from "./LoadingFullscreen";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px;
  box-sizing: border-box;
`;

interface LayoutProps {
  isLoading: boolean;
  children: ReactNode;
  error?: string;
}

export function Layout({ isLoading, children, error }: LayoutProps) {
  return (
    <MainWrapper>
      {isLoading && <LoadingFullscreen />}
      {error && <div>{error}</div>}
      {!isLoading && !error && children}
    </MainWrapper>
  );
}
