import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 5vh;
  background-color: #111;
  color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  @media only screen and (max-width: 768px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const Copyright = styled.span`
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Box>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Hamza Omari Ⓒ</Copyright>
      </Wrapper>
    </Box>
  );
};

export default Footer;
