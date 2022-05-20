import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";
import AnimatedShapes from "./AnimatedShapes";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Box>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
      <AnimatedShapes />
    </Box>
  );
};

export default Price;
