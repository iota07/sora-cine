import goku from "../assets/images/goku.svg";
import gto from "../assets/images/gto.png";
import onep from "../assets/images/onep.png";
import bleach from "../assets/images/bleach.png";
import { useState } from "react";

function Herojumbo() {
  //props 4 :title
  //props 5 :description
  //props 6 :button
  return (
    <>
      <article className="py-3 px-6 lg:py-12 md:px-36 text-slate-50">
        <h2 className="text-7xl  py-8 lg:py-0">Hero</h2>
        <h6 className="top-10lg:m-6 text-xs w-32 text-center lg:text-sm lg:text-sm rounded-full px-2 py-1 bg-teal-500">
          Arriving Shortly
        </h6>
        <p className="pb-12 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed error et
          quisquam vero consectetur voluptatibus eaque mollitia saepe vitae
          asperiores.
        </p>
        <section className="text-center">
          <button className="bg-slate-200 text-slate-800 rounded-full px-4 py-2">
            <span>Button</span>
          </button>
        </section>
      </article>
    </>
  );
}

function Hero(props) {
  const images = [goku, gto, onep, bleach];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <section
      className="grid xl:grid-cols-2"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(13,148,136,1) 0%, rgba(162,28,175,1) 100%)",
      }}
    >
      <article className="place-self-end">
        {props.children}
        <div className="xl:flex w-60 hidden">
          <p className="w-20 py-10 text-center bg-red-900 text-slate-100">
            Screen
          </p>
          <button
            className="w-20 py-10 bg-slate-200 text-slate-800"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="w-20 py-10 bg-slate-200 text-slate-800"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </article>
      <figure className="grid place-items-end">
        <img
          src={images[currentIndex]}
          alt={props.alt}
          loading="lazy"
          className="xl:max-w-lg lg:max-w-sm w-[30vh] mx-auto"
        />
      </figure>
    </section>
  );
}

export { Hero, Herojumbo };
