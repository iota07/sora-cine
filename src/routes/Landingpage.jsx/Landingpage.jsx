import { Landing } from "../../compments/Landing";
import { Footer, Footerlanding } from "../../compments/Footer";

function Landingpage() {
  return (
    <>
      <section className="pt-24 pb-12 grid grid place-items-center lg:min-h-[120vh]">
        <Landing />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}
export default Landingpage;
