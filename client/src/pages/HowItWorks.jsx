import React from "react";
import { Container } from "reactstrap";

import Jumbotron from "../sections/how-it-works/Jumbotron";
import TasteTheDifference from "../sections/home/TasteTheDifference";
import Partners from "../sections/home/Partners";
import Steps from "../sections/how-it-works/Steps";
import Discover from "../sections/home/Discover";

const TextHolder = () => {
  return (
    <Container
      className="h-100"
      fluid
      style={{ backgroundColor: "#FFA668", color: "#FFFFFF", fontSize: "32px" }}
    >
      <Container className="py-5 text-center">
        <p>
          Ditch the apron and unveil a world of flavor! Our local mom and pop
          restaurants craft culinary masterpieces, delivered straight to your
          door. Indulge in an experience that's as delicious as it is
          convenient.
        </p>
      </Container>
    </Container>
  );
};

const HowItWorks = () => {
  return (
    <>
      <Jumbotron />
      <Steps />
      <TextHolder />
      <TasteTheDifference />
      <Discover />
      <Partners />
    </>
  );
};

export default HowItWorks;
