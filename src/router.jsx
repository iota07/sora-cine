import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Errorpage } from "./routes/errorpage/Errorpage";
import Landingpage from "./routes/Landingpage.jsx/Landingpage";
import Registerpage from "./routes/registerpage/registerpage";
import Loginpage from "./routes/Loginpage/Loginpage";
import Contactpage from "./routes/Contactpage/Contactpage";

import Profilepage from "./routes/Profilepage/Profilepage";
import Homepage from "./routes/Profilepage/routes/Homepage/Homepage";
import Settingspage from "./routes/Profilepage/routes/Settingspage/Settingspage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "register", element: <Registerpage /> },
      { path: "login", element: <Loginpage /> },
      { path: "contact", element: <Contactpage /> },
      {
        path: "/profile",
        element: <Profilepage />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "settings", element: <Settingspage /> },
        ],
      },
    ],
  },
]);
