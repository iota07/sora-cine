import { TitleCategory } from "./../../../../compments/TitleCategory";
import Card from "./../../../../compments/Card";
import { Hero, Herojumbo } from "./../../../../compments/Hero";
import { Footer } from "./../../../../compments/Footer";

import React, { useState, useEffect } from "react";
import ModalVideo from "../../../../compments/ModalVideo";

import {
  motion,
  useTransform,
  useScroll,
  useViewportScroll,
} from "framer-motion";

import { useRef } from "react";
import SearchComponent from "../../../../compments/SearchComponent";

function Homepage() {
  const targetRef = useRef < HTMLDivElement > null;
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%%"]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState("");

  const openModal = (youtubeUrl) => {
    console.log("Opening modal with YouTube URL:", youtubeUrl);
    setModalVideoUrl(youtubeUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [mysteryData, setMysteryData] = useState([]);
  const [crimeData, setCrimeData] = useState([]);
  const [fantasyData, setFantasyData] = useState([]);
  const [actionAdventureData, setActionAdventureData] = useState([]);
  const [comedyData, setComedyData] = useState([]);

  useEffect(() => {
    // Fetch data for Mystery category
    const fetchMysteryData = async () => {
      try {
        const response = await fetch(
          "https://sora-cine.onrender.com/series/mystery"
        );
        const data = await response.json();

        const mysteryCards = data.map((item) => ({
          title: item.name,
          image: item.poster_path,
          youtube: item.url,
        }));

        setMysteryData(mysteryCards);
      } catch (error) {
        console.error("Error fetching mystery data:", error);
      }
    };

    // Fetch data for Crime category
    const fetchCrimeData = async () => {
      try {
        const response = await fetch(
          "https://sora-cine.onrender.com/series/Crime"
        );
        const data = await response.json();

        const crimeCards = data.map((item) => ({
          title: item.name,
          image: item.poster_path,
          youtube: item.url,
        }));

        setCrimeData(crimeCards);
      } catch (error) {
        console.error("Error fetching crime data:", error);
      }
    };
    const fetchFantasyData = async () => {
      try {
        const response = await fetch(
          "https://sora-cine.onrender.com/series/fantasy"
        );
        const data = await response.json();

        const fantasyCards = data.map((item) => ({
          title: item.name,
          image: item.poster_path,
          youtube: item.url,
        }));

        setFantasyData(fantasyCards);
      } catch (error) {
        console.error("Error fetching fantasy data:", error);
      }
    };

    // Fetch data for Action/Adventure category
    const fetchActionAdventureData = async () => {
      try {
        const response = await fetch(
          "https://sora-cine.onrender.com/series/act_adv"
        );
        const data = await response.json();

        const actionAdventureCards = data.map((item) => ({
          title: item.name,
          image: item.poster_path,
          youtube: item.url,
        }));

        setActionAdventureData(actionAdventureCards);
      } catch (error) {
        console.error("Error fetching action/adventure data:", error);
      }
    };

    // Fetch data for Comedy category
    const fetchComedyData = async () => {
      try {
        const response = await fetch(
          "https://sora-cine.onrender.com/series/comedy"
        );
        const data = await response.json();

        const comedyCards = data.map((item) => ({
          title: item.name,
          image: item.poster_path,
          youtube: item.url,
        }));

        setComedyData(comedyCards);
      } catch (error) {
        console.error("Error fetching comedy data:", error);
      }
    };

    fetchMysteryData();
    fetchCrimeData();
    fetchFantasyData();
    fetchActionAdventureData();
    fetchComedyData();
  }, []);

  return (
    <>
      <Hero>
        <Herojumbo />
      </Hero>
      {isModalOpen && (
        <ModalVideo onClose={closeModal} youtube={modalVideoUrl} />
      )}
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Mystery" />

        <motion.section className="h-64 ps-36">
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {mysteryData.map((series, index) => (
                <Card
                  key={index}
                  title={series.title}
                  image={series.image}
                  youtube={series.youtube}
                  onClick={openModal}
                />
              ))}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Fantasy" />

        <motion.section className="h-64 ps-36">
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {fantasyData.map((series, index) => (
                <Card
                  key={index}
                  title={series.title}
                  image={series.image}
                  youtube={series.youtube}
                  onClick={openModal}
                />
              ))}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Action - Adventure" />
        <motion.section className=" h-64 ps-36">
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {actionAdventureData.map((series, index) => (
                <Card
                  key={index}
                  title={series.title}
                  image={series.image}
                  youtube={series.youtube}
                  onClick={openModal}
                />
              ))}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Comedy" />

        <motion.section className=" h-64 ps-36">
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {comedyData.map((series, index) => (
                <Card
                  key={index}
                  title={series.title}
                  image={series.image}
                  youtube={series.youtube}
                  onClick={openModal}
                />
              ))}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <article className="h-[50vh] w-screen">
        <TitleCategory title="Crime" />
        <motion.section className="h-64 ps-36">
          <article
            className=" flex items-right justify-end"
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="overflow-x-auto max-w-xl2 flex flex-row gap-x-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              {crimeData.map((series, index) => (
                <Card
                  key={index}
                  title={series.title}
                  image={series.image}
                  youtube={series.youtube}
                  onClick={openModal}
                />
              ))}
            </motion.div>
          </article>
        </motion.section>
      </article>
      <Footer />
    </>
  );
}
export default Homepage;
