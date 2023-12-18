import { Outlet } from "react-router-dom";

function Profilepage() {
  return (
    <div>
      <h1>Profilepage</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default Profilepage;
