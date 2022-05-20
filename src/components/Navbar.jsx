import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 50px;
`;

const Logo = styled.h1`
  text-decoration: underline crimson;
`;

const ListItems = styled.ul`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  .link {
    padding-left: 0;
    list-style-type: none;
    color: gray;
    font-size: 22px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Box>
      <Logo data-aos="fade-up">Agency</Logo>
      <ListItems>
        <Link to="home" spy={true} smooth={true} duration={50} className="link">
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          Features
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          Services
        </Link>
        <Link
          to="pricing"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          Pricing
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          Contact
        </Link>
      </ListItems>
      <Button>JOIN TODAY</Button>
    </Box>
  );
};

export default Navbar;
