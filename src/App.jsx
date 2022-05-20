import React from "react";
import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    position: relative;
  }
`;

const IntroShape = styled.div`
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  ${Shape}
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0,100% 0%,100% 100%,62% 100%);
  background-color: crimson;
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0,62% 0%,62% 100%,0 100%);
  background-color: pink;
`;

const App = () => {
  return (
    <>
      <Container id="home">
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container id="features">
        <Feature />
        <FeatureShape />
      </Container>
      <Container id="services">
        <Service />
        <ServiceShape />
      </Container>
      <Container id="pricing">
        <Price />
        <PriceShape />
      </Container>
      <Container id="contact">
        <Contact />
        <Footer />
        <ContactShape />
      </Container>
    </>
  );
};

export default App;
