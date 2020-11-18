import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export function Loading() {
  return (
    <Loader type="BallTriangle" color="green" height={80} width={80} visible />
  );
}
