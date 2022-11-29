import React from "react";
import styled from "styled-components";
import { BsFillPlayCircleFill } from "react-icons/bs";
import kiva from "../assets/kiva.svg";
import twitter from "../assets/twitter.svg";


const Customer = () => {

    return(
        <div>

            <Every>
                <EveryHold>

                    <Imp>Join the team that achieve the impossible every day</Imp>

                    <Youtube  src="https://www.youtube.com/watch?v=-WaNTXBsyuE" frameBorder="0"> < BsFillPlayCircleFill/> Watch a customer story</Youtube>

                    <Logos>
                        <Logs src="/"/>
                        {/* <Logs src={twitter} />
                        <Logs src={kiva} />
                        <Logs src={kiva} />
                        <Logs src={kiva} />
                        <Logs src={kiva} /> */}
                    </Logos>

                </EveryHold>
            </Every>

        </div>
    )
}

export default Customer;

const Every = styled.div`
width: 100%;
height: 50vh;
background-image: linear-gradient(#fefeff, #eef5ff, #e3eeff);
`;

const EveryHold = styled.div`
width: 80%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const Imp = styled.div`
color: #253858;
font-size: 17px;
`;

const Youtube = styled.iframe`
color: blue;
font-size: 15px;
`;

const Logos = styled.div``;

const Logs = styled.img``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;

// const Every = styled.div``;
