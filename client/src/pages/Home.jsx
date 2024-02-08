import React from "react";

// import home sections
import HowItWorks from "../sections/home/HowItWorks";
import Jumbotron from "../sections/home/Jumbotron";
import Discover from "../sections/home/Discover";
import ExploreOurMenu from "../sections/home/ExploreTheMenu";
import TasteTheDifference from "../sections/home/TasteTheDifference";
import Partners from "../sections/home/Partners";
import Reviews from "../sections/home/Reviews";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <HowItWorks />
      <Discover />
      <ExploreOurMenu />
      <TasteTheDifference />
      <Partners />
      <Reviews />
    </>
  );
};

export default Home;
