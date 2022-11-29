import React, { useState } from "react";
import styled from "styled-components";
import WorkFLow from "./WorkFLow";
import pic from "../Assets/WorkManagement.png";
import IT from "../Assets/Solutions_2.png";
import AG from "../Assets/Solutions_3.png";

const Solutions = () => {
  const [work, setWork] = useState<boolean>(true);
  const [It, setIt] = useState<boolean>(false);
  const [Agile, setAgile] = useState<boolean>(false);

  const toggle = () => {
    setWork(true);
    setIt(false);
    setAgile(false);
  };
  const toggle2 = () => {
    setIt(true);
    setWork(false);
    setAgile(false);
  };
  const toggle3 = () => {
    setAgile(true);
    setIt(false);
    setWork(false);
  };

  return (
    <Container>
      <One>
        <h1>Atlassian solutions are designed for all types of work</h1>
      </One>
      <Two>
        <Button bg={work ? "jh" : ""} color={work ? "gh" : ""} onClick={toggle}>
          Work Management
        </Button>
        <Button bg={It ? "jh" : ""} color={It ? "gh" : ""} onClick={toggle2}>
          IT Service Management
        </Button>
        <Button
          bg={Agile ? "jh" : ""}
          color={Agile ? "gh" : ""}
          onClick={toggle3}
        >
          Agile and DevOps
        </Button>
      </Two>
      <Three>
        {work ? (
          <WorkFLow
            title="Make work flow across teams while connecting back to company goals"
            subtitle="Work differently, together"
            flex="flex"
            flex1="flex"
            flex2="flex"
            image={pic}
            ProdTitle="Confluence"
            ProdDesc="Content collaboration"
            ProdTitle1="Trello"
            ProdDesc1="Visual project management"
            ProdTitle2="
Jira Work Management"
            ProdDesc2="Business team collaboration"
          />
        ) : null}
        {It ? (
          <WorkFLow
            title="Enable your dev, IT ops, and business teams to deliver great service experiences"
            subtitle="Deliver at high velocity"
            flex="flex"
            flex1="none"
            flex2="none"
            image={IT}
            ProdTitle="Jira Service Management"
            ProdDesc="High-velocity ITSM"
            ProdTitle1=""
            ProdDesc1=""
            ProdTitle2=""
            ProdDesc2=""
          />
        ) : null}
        {Agile ? (
          <WorkFLow
            title="Run a world-class agile software company—from discovery to delivery and operations"
            subtitle="Explore Open DevOps"
            flex="flex"
            flex1="flex"
            flex2="flex"
            image={AG}
            ProdTitle="Jira Software"
            ProdDesc="Project and issue tracking"
            ProdTitle1="Jira Align"
            ProdDesc1="Enterprise Agile planning"
            ProdTitle2="Compass"
            ProdDesc2="Developer experience platform"
          />
        ) : null}
      </Three>
    </Container>
  );
};

export default Solutions;

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  /* position: relative; */
`;
const One = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #253858;
    font-size: 2.5rem;
    font-weight: 500;
  }
`;
const Button = styled.button<{ bg: string; color: string }>`
  padding: 35px 70px;
  border-radius: 50px;
  border: 0;
  font-size: 20px;
  font-weight: 900;
  margin-right: 40px;
  background-color: ${(props) => (props.bg ? "#0065ff" : "#DEEBFF")};
  color: ${(props) => (props.color ? "#fff" : "#0065ff")};

  &:hover {
    cursor: pointer;
  }
`;
const Two = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Three = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-top: 80px;
`;
