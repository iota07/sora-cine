import ErrorComponent from "../../compments/ErrorComponent";
import { useEffect } from "react";

function Errorpage() {
  useEffect(() => {
    // Change the body background color
    document.body.style.backgroundColor = "white";
  });

  return <ErrorComponent />;
}

export { Errorpage };
