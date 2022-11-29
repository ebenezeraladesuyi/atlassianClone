import React from "react";
import styled from "styled-components";

import leftimg from "../../Assets/hero_right.jpg";
import rightimg from "../../Assets/hero_left.png";

const Hero = () => {
  return (
    <Container>
      <Left>
        <h1>It’s possible</h1>
        <h2>with teamwork</h2>
      </Left>
      <Right>
        <img src={leftimg} alt="" />
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 85%;
  height: 65vh;
  margin: auto;
  /* background-color: pink; */
  display: flex;
`;
const Right = styled.div`
  width: 58%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Left = styled.div`
  width: 42%;
  height: 100%;
  background-image: url(${rightimg});
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #253858;

  h1 {
    margin: 0;
    font-size: 5rem;
    font-weight: 500;
  }
  h2 {
    margin: 0;
    font-size: 5rem;
    font-weight: 500;
    margin-left: 22px;
  }
`;
