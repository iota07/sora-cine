import goku from "../assets/images/goku.svg";

function Hero() {
  //props 1 :{style} background
  const backgroundGoku = {
    background:
      "linear-gradient(90deg, rgba(13,148,136,1) 0%, rgba(162,28,175,1) 100%)",
  };
  //props 2 :image src
  //props 3 :image alt
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed error
            et quisquam vero consectetur voluptatibus eaque mollitia saepe vitae
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

  return (
    <section className="grid xl:grid-cols-2 " style={backgroundGoku}>
      <article className="place-self-end">
        <Herojumbo />
        <div className="xl:flex w-60 hidden">
          <p className="w-20 py-10 text-center bg-red-900 text-slate-100">
            Screen
          </p>
          <button className="w-20 py-10 bg-slate-200 text-slate-800">
            Prev
          </button>
          <button className="w-20 py-10 bg-slate-200 text-slate-800">
            Next
          </button>
        </div>
      </article>
      <figure>
        <img
          src={goku}
          alt=""
          loading="lazy"
          className="xl:max-w-lg lg:max-w-sm max-w-xs mx-auto"
        />
      </figure>
    </section>
  );
}

export { Hero };
