import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sukuna from "../assets/images/jujutsu.png";

function ErrorComponent() {
  const [errorDetails, setErrorDetails] = useState({
    errorCode: "UNKNOWN_ERROR",
    errorMsg: "An unexpected error occurred. Please try again.",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Simulate different error scenarios
    const simulateErrors = () => {
      const errorType = "NOT_FOUND";

      switch (errorType) {
        case "BAD_REQUEST":
          setErrorDetails({
            errorCode: "400",
            errorMsg: "Bad Request: The server did not understand the request.",
          });
          break;
        case "FORBIDDEN":
          setErrorDetails({
            errorCode: "403",
            errorMsg:
              "Forbidden: You do not have permission to access this resource.",
          });
          break;
        case "NOT_FOUND":
          setErrorDetails({
            errorCode: "404",
            errorMsg: "Not Found: The requested resource could not be found.",
          });
          break;
        case "INTERNAL_SERVER_ERROR":
          setErrorDetails({
            errorCode: "500",
            errorMsg:
              "Internal Server Error: Something went wrong on the server.",
          });
          break;
        default:
          setErrorDetails({
            errorCode: "UNKNOWN_ERROR",
            errorMsg: "An unexpected error occurred. Please try again.",
          });
      }
    };

    simulateErrors();
  }, []); // useEffect will run only once when the component mounts

  const redirectToHomepage = () => {
    navigate("/");
  };

  function ErrorJumbo(props) {
    return (
      <>
        <section className="grid grid-rows-2 grid-flow-col h-screen bg-yellow-200 sm:pt-12 md:pt-18 lg:pt-24 lg:pt-32 rounded-lg justify-center lg:grid-rows-1">
          <figure className="lg:pl-48">
            <img className="rounded-b-3xl" src={sukuna} alt="image of Sukuna" />
          </figure>

          <section className="pb-4 text-center align-center backdrop-blur rounded-xl lg:order-first lg:absolute lg:max-w-xl lg:pl-12 xl:pl-48 xl:max-w-2xl 2xl:pl-72 2xl:max-w-4xl">
            <h2 className="text-6xl sm:pt-20">{props.errorCode}</h2>
            <p className="pb-12 pt-4">{props.errorMsg}</p>
            <button
              className="bg-slate-200 text-slate-800 rounded-full px-4 py-2"
              onClick={redirectToHomepage}
            >
              Go to Home
            </button>
          </section>
        </section>
      </>
    );
  }

  return (
    <ErrorJumbo
      errorCode={errorDetails.errorCode}
      errorMsg={errorDetails.errorMsg}
    />
  );
}

export default ErrorComponent;
