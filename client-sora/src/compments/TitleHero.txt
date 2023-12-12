import React from "react";

function TitleHero({ text }) {
  let fontSizeClass = "text-3xl";

  if (text.length > 40) {
    fontSizeClass = "text-xl";
  } else if (text.length > 20) {
    fontSizeClass = "text-2xl";
  }

  return (
    <h1
      className={`text-[#ffff66] max-w-sm md:max-w-xl md:text-4-xl lg:max-w-2xl lg:text-5xl xl:max-w-3xl 2xl:max-w-4xl font-bold sm:text-3xl ${fontSizeClass}`}
    >
      {text}
    </h1>
  );
}

export default TitleHero;
