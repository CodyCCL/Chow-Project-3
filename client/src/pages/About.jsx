import React from "react";

import Jumbotron from "../sections/about/Jumbotron";
import Partners from "../sections/home/Partners";
import TasteTheDifference from "../sections/home/TasteTheDifference";
import OurStory from "../sections/about/OurStory";
import ImageText from "../sections/about/ImageText";
import OnlyTheGoodStuff from "../sections/about/OnlyTheGoodStuff";

const About = () => {
  return (
    <>
      <Jumbotron />
      <OurStory />
      <ImageText />
      <OnlyTheGoodStuff />
      <TasteTheDifference />
      <Partners />
    </>
  );
};

export default About;
