import React, { useState } from "react";
import styled from "styled-components";
import AnimatedShapes from "./AnimatedShapes";
import GirlPic from "../img/5.png";
import Play from "../img/play.png";
import MiniCard from "./MiniCard";

const Box = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 50vh;
    justify-content: center;
    background-color: #f88497;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 100%;
  margin-left: 70px;
  display: ${(props) => (props.open === false ? "block" : "none")};
  position: absolute;
  @media only screen and (max-width: 768px) {
    margin: 0;
    height: 100%;
  }
`;

const Video = styled.video`
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  display: ${(props) => (props.open === false ? "none" : "block")};
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
  @media only screen and (max-width: 768px) {
    padding: 25px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Service = () => {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <Box>
      <Left>
        <Image src={GirlPic} open={isOpen} />
        <Video
          autoPlay
          loop
          controls
          open={isOpen}
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Title>Simple process to start</Title>
        <Desc>
          We provide digital experience services to startups and small
          businesses to looking for a partner of their digital media, design &
          development, lead generation and communications requirents. We work
          with you, not for you. Although we have a great resources
        </Desc>
        <CardContainer>
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </CardContainer>
        <Button onClick={() => setOpen(!isOpen)}>
          <Icon src={Play} />
          How it works
        </Button>
      </Right>
      <AnimatedShapes />
    </Box>
  );
};

export default Service;
