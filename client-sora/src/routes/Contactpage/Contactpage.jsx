import ContactComponent from "../../compments/ContactComponent";
import { Footer, Footerlanding } from "../../compments/Footer";

function Contactpage() {
  return (
    <>
      <section className="pt-6 pb-12">
        <ContactComponent />
      </section>
      <Footer>
        <Footerlanding />
      </Footer>
    </>
  );
}

export default Contactpage;
