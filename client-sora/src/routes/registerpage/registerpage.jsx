import SignupComponent from "../../compments/SignupComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Registerpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center lg:min-h-[80vh] px-4">
        <SignupComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Registerpage;
