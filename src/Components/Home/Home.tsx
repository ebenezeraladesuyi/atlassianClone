import React from "react";
import Hero from "./Hero";
import Solutions from "./Solutions";
import Watc from "./Watc";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Solutions />
      <Watc />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* position: relative; */
`;
