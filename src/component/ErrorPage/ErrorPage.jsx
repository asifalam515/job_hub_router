import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-5xl">Error Ocurred</h1>
      <button onClick={goHome} className="btn btn-error">
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
