import React from "react";
import styled from "styled-components";
import confluence from "./Assets/compass.png";
import arow from "./Assets/arrowright.svg";
import bulb from "./Assets/bulb.png";
import cl from "./Assets/close_copy.svg";

const ProductsNav = () => {
  return (
    <Container>
      <Right>
        <Top>
          <h2>Featured</h2>
          <BoxHolder>
            <Box>
              <First>
                <img src={confluence} alt="" />
              </First>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>

            <Box>
              <First>
                <img src={confluence} alt="" />
              </First>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>

            <Box>
              <First>
                <img src={confluence} alt="" />
              </First>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>

            <Box>
              <First>
                <img src={confluence} alt="" />
              </First>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>
          </BoxHolder>
          <Text>
            <p>View all products</p>
            <img src={arow} alt="" />
          </Text>
        </Top>
        <Bottom>
          <One>
            <Text2>
              <img src={bulb} alt="" />
              <Text1>
                <h5>New products from Point A</h5>
                <p>Innovations from Atlassian</p>
              </Text1>
            </Text2>
            <ViewBox>
              <p>View all</p>
              <img src={arow} alt="" />
            </ViewBox>
          </One>
          <Two>
            <Box>
              <First1>
                <img src={confluence} alt="" />
              </First1>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>
            <Box>
              <First1>
                <img src={confluence} alt="" />
              </First1>
              <Second>
                <h5>Jira Software</h5>
                <p>Project and issue tracking</p>
              </Second>
            </Box>
          </Two>
        </Bottom>
        <Market>
          <ViewBox1>
            <p>Marketplace</p>
            <span>
              <h6>
                Connect thousands of apps for all your Atlassian products{" "}
              </h6>
              <img src={arow} alt="" />
            </span>
          </ViewBox1>
        </Market>
      </Right>
      <Left>
        <Close>
          <img src={cl} />
        </Close>
        <h1>BROWSE BY SOLUTION</h1>
        <Lbox>
          <h2>Agile & DevOps</h2>
          <p>
            Run a world-class agile software organization from discovery to
            delivery and operations
          </p>
        </Lbox>
        <Lbox>
          <h2>IT Service Management</h2>
          <p>
            Enable dev, IT ops, and business teams to deliver great service at
            high velocity
          </p>
        </Lbox>
        <Lbox>
          <h2>Work Management</h2>
          <p>
            Empower autonomous teams without losing organizational alignment
          </p>
        </Lbox>
        <Lbox>
          <h3>BROWSE BY TEAM TYPE</h3>
          <h4>Enterprise</h4>
          <h4>Small business</h4>
          <h4>Startup</h4>
          <h4>Non-profit</h4>
        </Lbox>
      </Left>
    </Container>
  );
};

export default ProductsNav;

const Text = styled.div`
  margin-top: 20px;
  display: flex;
  color: #0065ff;
  font-size: 16px;
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
const BoxHolder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
const First = styled.div`
  height: 60px;
  width: 60px;
  background-color: #dfe1e5;
  margin-right: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    height: 30px;
  }
`;
const First1 = styled.div`
  height: 60px;
  width: 60px;
  background-color: #fafcff;
  margin-right: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    height: 30px;
  }
`;
const Second = styled.div`
  cursor: pointer;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  h5 {
    margin: 0;
    font-size: 19px;
    margin-top: 5px;
    color: #000000c3;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: #0000007f;
    margin-top: 5px;
  }
`;

const Box = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`;

const Top = styled.div`
  width: 80%;

  h2 {
    margin: 0;
    text-transform: uppercase;
    color: #00000055;
    font-size: 16px;
  }
`;

const Bottom = styled.div`
  width: 85%;
  height: 23%;
  border-radius: 5px;
  background-color: #deebff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ViewBox = styled.div`
  display: flex;
  color: #000000ac;
  font-size: 16px;
  img {
    margin-top: 7px;
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
const ViewBox1 = styled.div`
  display: flex;
  color: #000000ac;
  font-size: 16px;
  flex-direction: column;
  img {
    margin-top: 3px;
    margin-left: 10px;
    width: 13px;
  }
  p {
    transition: all ease-in 0.2s;
    margin: 0;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 20px;

    :hover {
      margin-right: 8px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  span {
    display: flex;

    h6 {
      margin: 0;
      font-size: 13px;
      font-weight: 600;
    }
  }
`;

const One = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  img {
    height: 40px;
  }
`;
const Text2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Text1 = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-left: 3px;
  h5 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 16px;
    color: #000000c7;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: #0000007b;
  }
`;

const Two = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Market = styled.div`
  width: 80%;
  height: 13%;
  border-top: 1px solid #00000040;
  margin-top: 50px;
`;
const Lbox = styled.div`
  width: 100%;

  p {
    margin-left: 50px;
    font-size: 13px;
    font-weight: 600;
    color: #00000086;
    width: 20vw;
    margin-top: 5px;
  }
  h2 {
    margin: 0;
    margin-left: 50px;
    font-size: 16px;
    color: #0000008b;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  h3 {
    margin: 0;
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 13.5px;
    color: #0000008b;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  h4 {
    margin: 0;
    margin-bottom: 5px;
    margin-left: 50px;
    font-size: 16px;
    color: #0000008b;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: absolute;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  top: 80px;
  left: 0px;
  border-top: 1px solid #0000004b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 30%;
  height: 80%;
  border-left: 1px solid #9b9b9b;

  h1 {
    font-size: 15px;
    color: #00000088;
    margin-left: 50px;
  }
`;
