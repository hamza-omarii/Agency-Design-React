import React from "react";
import styled from "styled-components";
import Women from "../img/2.png";
import AnimatedShapes from "./AnimatedShapes";

const Box = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Tittle = styled.h2`
  width: 60%;
  text-transform: capitalize;
  font-size: 60px;
  @media only screen and (max-width: 768px) {
    font-size: 35px;
    width: 90%;
  }
`;

const SubTittle = styled.p`
  width: 60%;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    width: 90%;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 90%;
    padding-bottom: 10px;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: crimson;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const ContactText = styled.span`
  color: gray;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const ImageWoman = styled.img`
  height: 100%;
  @media only screen and (max-width: 768px) {
    position: absolute;
  }
`;

const Intro = () => {
  return (
    <Box>
      <Left>
        <Tittle>adventures in creative age</Tittle>
        <SubTittle>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </SubTittle>
        <Action>
          <Button>start a project</Button>
          <Info>
            <Phone>Call Us (012) 345 - 6789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Info>
        </Action>
      </Left>
      <Right>
        <ImageWoman src={Women} />
      </Right>
      <AnimatedShapes />
    </Box>
  );
};

export default Intro;
