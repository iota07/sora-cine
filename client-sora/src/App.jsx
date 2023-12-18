import "./index.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ModalCookie } from "./compments/ModalCookie";
import { Navbar } from "./compments/Navbar";

function App() {
  return (
    <>
      <ModalCookie />
      <Navbar />
      <main className="min-h-screen bg-gray-900">
        <Outlet></Outlet>
      </main>
      <ScrollRestoration />
    </>
  );
}

export default App;
