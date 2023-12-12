import React, { useState, useEffect } from "react";
import WatchNowButton from "./WatchNowButton";
import TitleHero from "./TitleHero";

const apiUrl = "https://webdis-t9ot.onrender.com/recent-release?type=1"; // Replace with your API endpoint

function Hero({ defaultDescription = "" }) {
  const [animeData, setAnimeData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    // Fetch anime data from the first API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API returns an array of objects with anime information
        setAnimeData(data || []);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
      });
  }, []);

  useEffect(() => {
    // Check if there is valid animeData and the currentImageIndex is within bounds
    if (
      animeData.length > 0 &&
      currentImageIndex >= 0 &&
      currentImageIndex < animeData.length
    ) {
      const animeId = animeData[currentImageIndex]?.animeId;

      // Fetch anime details from the second API based on the animeId
      fetch(`https://webdis-t9ot.onrender.com/anime-details/${animeId}`)
        .then((response) => response.json())
        .then((data) => {
          setAnimeDetails(data || null);
        })
        .catch((error) => {
          console.error("Error fetching anime details:", error);
        });
    }
  }, [animeData, currentImageIndex]);

  /* use interval to circle trough the first useEffect) */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    }, 100000);

    return () => clearInterval(interval);
  }, [animeData]);

  const style = {
    backgroundImage: `url(${animeData[currentImageIndex]?.animeImg || ""})`, // map the anime background according to image index
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // define synopsis prop retrived for second useEffect call
  const synopsis = animeDetails?.synopsis || defaultDescription;

  return (
    <section className="h-screen w-screen grid-cols-2" style={style}>
      <section className="h-full lg:max-w-screen-md flex items-center">
        <article className="Card p-5 ml-12 sm:ml-20 md:ml-24 lg:ml-48 rounded-lg backdrop-blur h-auto flex flex-col justify-between">
          <TitleHero text={animeDetails?.animeTitle || ""} />
          <p className="text-[#fffbdb] max-w-xs sm:max-w-md md:max-w-screen-sm lg:max-w-screen-md text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl line-clamp-3 sm:line-clamp-4 md:line-clamp-5 lg:line-clamp-6">
            <h2 className="font-bold">Synopsis</h2> {synopsis}
          </p>
          <p className="self-end">
            <WatchNowButton />
          </p>
        </article>
      </section>
    </section>
  );
}

export { Hero };
