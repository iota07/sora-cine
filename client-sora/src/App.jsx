import "./index.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./compments/Navbar";
import { ModalCookie } from "./compments/ModalCookie";
function App() {
  return (
    <>
      <Navbar />
      <ModalCookie />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
