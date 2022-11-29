import React from "react";
import styled from "styled-components";
import arow from "../Assets/arrowright.svg";
import confluence from "../Assets/compass.png";

interface solution {
  title: string;
  subtitle: string;
  flex: string;
  flex1: string;
  flex2: string;
  image: any;
  ProdTitle: string;
  ProdDesc: string;
  ProdTitle1: string;
  ProdDesc1: string;
  ProdTitle2: string;
  ProdDesc2: string;
}

const WorkFLow: React.FC<solution> = ({
  title,
  subtitle,
  flex,
  flex1,
  flex2,
  image,
  ProdTitle,
  ProdDesc,
  ProdTitle1,
  ProdDesc1,
  ProdTitle2,
  ProdDesc2,
}) => {
  return (
    <Container>
      <Right>
        <h1>{title}</h1>
        <Text>
          <p>{subtitle}</p>
          <img src={arow} alt="" />
        </Text>

        <Box flex={flex}>
          <First>
            <img src={confluence} alt="" />
          </First>
          <Second>
            <Top>
              <h2>{ProdTitle}</h2>
            </Top>
            <Bottom>
              <p>{ProdDesc}</p>
            </Bottom>
          </Second>
        </Box>
        <Box1 flex1={flex1}>
          <First>
            <img src={confluence} alt="" />
          </First>
          <Second>
            <Top>
              <h2>{ProdTitle1}</h2>
            </Top>
            <Bottom>
              <p>{ProdDesc1}</p>
            </Bottom>
          </Second>
        </Box1>
        <Box2 flex2={flex2}>
          <First>
            <img src={confluence} alt="" />
          </First>
          <Second>
            <Top>
              <h2>{ProdTitle2}</h2>
            </Top>
            <Bottom>
              <p>{ProdDesc2}</p>
            </Bottom>
          </Second>
        </Box2>
      </Right>

      <Left>
        <img src={image} />
      </Left>
    </Container>
  );
};

export default WorkFLow;

const Box = styled.div<{ flex: string }>`
  width: 20vw;
  height: 13vh;
  margin-top: 20px;
  display: ${(props) => props.flex};
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
const Box1 = styled.div<{ flex1: string }>`
  width: 20vw;
  height: 13vh;
  margin-top: 20px;
  display: ${(props) => props.flex1};
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
const Box2 = styled.div<{ flex2: string }>`
  width: 20vw;
  height: 13vh;
  margin-top: 20px;
  display: ${(props) => props.flex2};
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;
const First = styled.div`
  width: 7vw;
  height: 80%;
  background-color: #dddbdb;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 50px;
  }
`;
const Second = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 18px;
    color: #253858;
  }
`;
const Bottom = styled.div`
  p {
    margin: 0;
    font-size: 16.7px;
    color: #253858;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Right = styled.div`
  width: 40%;
  /* background-color: #1b141b; */

  h1 {
    font-weight: 500;
    width: 30vw;
    font-size: 1.9rem;
    color: #253858;
    margin: 0;
    line-height: 2.5rem;
  }
`;

const Left = styled.div`
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  display: flex;
  color: #0065ff;
  font-size: 20px;
  img {
    margin-top: 5px;
    margin-left: 10px;
    width: 13px;
  }
  p {
    transition: all ease-in 0.2s;

    :hover {
      margin-right: 8px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
