import mokupsora from "../assets/images/mokup-sora.png";
import SignupComponent from "./SignupComponent";
import { TitleMain } from "../compments/TitleCategory";

function Landing() {
  const title = "Get started";
  return (
    <article className="flex flex-col items-center align-center gap-y-4 pt-8 pb-6 px-2">
      <section className="grid md:grid-cols-2 place-items-center bg-red-900 py-12 px-2 xl:px-12 rounded-lg gap-x-14 gap-y-24">
        <TitleMain title={title} />

        <figure className="grid items-center">
          <img alt="" src={mokupsora} className="max-w-[18rem]" />
        </figure>
        <figure className="md:col-span-2 ">
          <SignupComponent />
        </figure>
      </section>
    </article>
  );
}

export { Landing };
