import { motion } from "framer-motion";

function TitleCategory(props) {
  return (
    <section className="pt-24 ps-12 pb-8">
      <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold text-slate-200 tracking-widest">
        {props.title}
      </h2>
    </section>
  );
}
const TitleMain = (props) => {
  return (
    <section className="pt-8 pb-4 text-center">
      <h2 className="text-4xl md:text-6xl tracking-tight font-bold text-slate-200">
        {props.title}
      </h2>
    </section>
  );
};

export { TitleCategory, TitleMain };
