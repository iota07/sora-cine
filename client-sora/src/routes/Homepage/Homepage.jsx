import { TitleCategory } from "../../compments/TitleCategory";
import Card from "../../compments/Card";
import { Hero } from "../../compments/Hero";
import { Footer } from "../../compments/Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <article className="pt-12 pb-6">
        <TitleCategory title="Titre category 1" />
        <section className="flex flex-row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </article>
      <TitleCategory title="Titre category 2" />
      <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
