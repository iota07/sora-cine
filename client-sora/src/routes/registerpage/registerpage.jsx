import SignupComponent from "../../compments/SignupComponent";
import { Footer, Footerlanding } from "../../compments/Footer";
function Registerpage() {
  return (
    <>
      <section className="pt-6 pb-12">
        <SignupComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Registerpage;
