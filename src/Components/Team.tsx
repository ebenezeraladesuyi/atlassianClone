import React from "react";
import styled from "styled-components";

interface drop {
  Titletext: string;
  products: string;
}

const Team: React.FC<drop> = ({ Titletext, products }) => {
  return (
    <Container>
      <Right>
        <Wrapper>
          <First>
            <Title>
              <h1>BY TEAM SIZE</h1>
            </Title>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
          </First>
          <Second>
            <Title>
              <h1>{Titletext}</h1>
            </Title>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
          </Second>
          <Third>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
            <Box1>
              <h2>Startups</h2>
              <p>Great for startups, from incubator to IPO</p>
            </Box1>
          </Third>
        </Wrapper>
        <Last>
          <h4>{products}</h4>
        </Last>
      </Right>
      <Left>
        <Box>
          <h1>Marketplace</h1>
          <h2>Apps that enhance Atlassian products</h2>
        </Box>
        <Box>
          <h1>Developers</h1>
          <h2>Docs and resources to build Atlassian apps</h2>
          <hr />
        </Box>
        <Box>
          <h1>Developers</h1>
          <h2>Docs and resources to build Atlassian apps</h2>
          <hr />
        </Box>
        <Box>
          <h1>Developers</h1>
          <h2>Docs and resources to build Atlassian apps</h2>
        </Box>
      </Left>
    </Container>
  );
};

export default Team;
const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Last = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Container = styled.div`
  width: 95%;
  position: absolute;
  background-color: #fff;
  top: 80px;
  left: 30px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #00000065;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
const Right = styled.div`
  width: 60%;
  background-color: #fff;
`;
const First = styled.div`
  padding: 10px;
`;
const Second = styled.div`
  padding: 10px;
`;
const Third = styled.div`
  padding: 10px;
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 14px;
    color: #00000089;
  }
`;
const Left = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
  border-left: 1px solid #00000052;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-bottom: 30px;

  h1 {
    margin: 0;
    font-size: 17px;
    font-weight: 500;
    color: #000000ac;
  }
  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    margin-top: 3px;
    color: #00000076;
  }
  hr {
    width: 5vw;
    border: 1px solid #0000003d;
    margin-left: 0px;
    margin-top: 30px;
  }
`;
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #000000cf;
  }
  p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    margin-top: 3px;
    color: #00000076;
  }
  hr {
    width: 5vw;
    border: 1px solid #0000003d;
    margin-left: 0px;
    margin-top: 30px;
  }
`;
