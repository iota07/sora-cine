import LoginComponent from "../../compments/LoginComponent";
import { Footer, Footerlanding } from "../../compments/Footer";
import ProfileComponent from "../../compments/ProfileComponent";

function Loginpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center lg:min-h-[80vh]">
        <LoginComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Loginpage;
