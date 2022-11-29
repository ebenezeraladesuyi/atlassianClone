import React, { useState } from "react";
import styled from "styled-components";
import video from "../Assets/video.png";
// import youtube from "../youtube";
import cl from "../Assets/close.svg";
import audi from "../Assets/audi.png";
import cast from "../Assets/castlight.png";
import nasa from "../Assets/nasa.png";
import red from "../Assets/redfin.png";
import twit from "../Assets/twitter.png";
import kiva from "../Assets/kiva.png";
// import christmas from "../Assets/christmas.mp4";

import { FaLevelDownAlt } from "react-icons/fa";

const Watc = () => {
  const [vid, setVid] = useState<boolean>(false);

  const PopUp = () => {
    setVid(!vid);
  };
  const ClosePop = () => {
    setVid(!vid);
  };

  return (
    <Container>
      <h2>Join the teams that achieve the impossible every day</h2>
      <Play>
        <img src={video} alt="" />
        <p onClick={PopUp}>Watch a customer story</p>
      </Play>
      {vid ? (
        <VideoPop>
          <VideoHold>
            <video src="https://www.youtube.com/watch?v=-WaNTXBsyuE" autoPlay loop></video>
          </VideoHold>
          <Close>
            <img src={cl} onClick={ClosePop} />
          </Close>
        </VideoPop>
      ) : null}

        {/* <iframe width="800" height="500"
        src="https://www.youtube.com/watch?v=-WaNTXBsyuE">
        </iframe> */}

      <Teams>
        <Box>
          <img src={kiva} alt="" />
        </Box>
        <Box>
          <img src={twit} alt="" />
        </Box>
        <Box>
          <img src={red} alt="" />
        </Box>
        <Box>
          <img src={nasa} alt="" />
        </Box>
        <Box>
          {" "}
          <img src={audi} alt="" />
        </Box>
        <Box>
          <img src={cast} alt="" />
        </Box>
      </Teams>
    </Container>
  );
};

export default Watc;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Teams = styled.div`
  width: 90%;
  height: 20vh;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;
`;
const VideoPop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000a6;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`;
const Close = styled.div`
  margin-left: 15px;
  height: 70vh;

  img {
    cursor: pointer;
  }
`;

const VideoHold = styled.div`
  height: 70vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(251, 251, 251, 0) 0.05%,
    #065de926 99.95%
  );
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 500;
    color: #253858;
  }
`;
const Play = styled.div`
  display: flex;

  p {
    margin: 0;
    color: #0065ff;
    font-size: 18px;

    :hover {
      cursor: pointer;
      color: #0141a0;
    }
  }
  img {
    height: 25px;
    width: 25px;
    margin-right: 10px;
  }
`;
