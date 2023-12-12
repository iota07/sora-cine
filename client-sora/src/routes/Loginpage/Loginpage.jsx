import LoginComponent from "../../compments/LoginComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Loginpage() {
  return (
    <>
      <section className="pt-6 pb-12">
        <LoginComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Loginpage;
