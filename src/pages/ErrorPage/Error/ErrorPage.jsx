import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <div className="text-center">
        <h1>{error.status}</h1>
        <p className="text-danger fs-3">{error.statusText}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
